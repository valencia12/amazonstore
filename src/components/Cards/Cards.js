import React, { useCallback, useEffect, useState } from 'react'
import AppCls from '../../api/getApplications'
import Card from '../Card/Card'
const App = new AppCls();
export default function Cards({ card, button }) {
    const [cards, SetCards] = useState([]);
    const [category, SetCategory] = useState([]);
    const [selected, setSelected] = useState("Categorias");
    const options = ["Categorias", "Education", "Gamer", "Infante"];

    const initialize = useCallback(async () => {

        const data = await App.getApps();
        const filterByCategory = await App.getAppsByCategory(selected);
        SetCategory(filterByCategory.data);
        SetCards(data.data);
    });

    useEffect(() => {
        initialize()
    }, [selected])
    return (
        <>
            <div className="row" style={{ margin: "1%", width: "100%" }}>

                <select
                    value={selected}
                    onChange={e => setSelected(e.target.value)}
                    style={{
                        borderRadius: "12px",
                        fontFamily: "Arial",
                        color: "#050707"
                    }}
                >
                    {
                        options.map((e) => {
                            return <option value={e} key={e}>{e}</option>
                        })
                    }
                </select>
            </div>
            <div className='rowResponsive'>

                <div className="row" style={{
                    justifyContent: "center",
                    margin: "5%",
                }}>

                    {selected !== "Categorias" &&
                        category.map((card) => {
                            return <>
                                <Card card={card} />
                            </>
                        })
                    }
                    {selected === "Categorias" &&
                        cards.map((card) => {
                            return <>
                                <Card card={card} />
                            </>
                        })
                    }


                </div>
            </div>
        </>
    )
}
