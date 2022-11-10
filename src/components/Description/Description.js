import React from 'react'
import { userData } from '../../store/DummyData'
import StarsRating from '../Raiting/StarsRating'

export default function Description({ information, stars }) {
  
    return (
        <>
            <hr />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "20%", textAlign: "center" }}>
                    <img
                        src={information.card.url}
                        style={{
                            padding: "1%",
                            width: "50%"
                        }}
                    />
                </div>
                <div style={{ width: "80%", padding: "2%", fontSize: "2vh", alignItems: "center" }}>
                    <h6>{information.card.name}</h6>
                    <p>{information.card.description}</p>
                </div>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "center"}}>
                <StarsRating stars={information.card.numberRating} modal={true}/>
                <p style={{marginLeft:"10px"}}> {information.card.numberRating}.0</p>
            </div>
            <hr />
            <div className='overflow'>
                {userData.map((e) => {
                    return <>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "auto" }}>
                            <div style={{ width: "20%", textAlign: "center" }}>
                                <img
                                    src={e.profile}
                                    style={{
                                        padding: "1%",
                                        width: "50%"
                                    }}
                                />
                            </div>
                            <div style={{ width: "80%", padding: "2%", fontSize: "2vh", alignItems: "center" }}>
                                <h6>{e.username}</h6>
                                <p>{e.description}</p>
                            </div>
                               
                        </div>
                        <hr/>
                    </>
                })}
                
            </div>
        </>
    )
}
