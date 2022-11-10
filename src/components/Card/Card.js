import React, { useEffect, useState } from 'react'
import StarsRating from '../Raiting/StarsRating'
import Modal from '../Modal/Modal';
import { Carousel } from 'react-responsive-carousel';
import Description from '../Description/Description';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../style/style.css"


export default function Card(card) {
    const [stars, setStars] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [disableButton, setDisableButton] = useState();
    useEffect(() => {
        setStars(card.card.numberRating);
        setDisableButton(card.card.isInstalled)
    }, [])
    return (
        <>
            <div>
                <div
                    className='hoverEffect'>
                    <img
                        src={card.card.url}
                        className="card-img"
                        style={{
                            padding: "1%"
                        }}
                        onClick={() => setShowModal(true)}
                    />
                    <div className="card-body ">
                        <h6 className="card-title">{card.card.name}</h6>
                        {card.card.price <= 0.50 ? <p className="card-text">FREE</p> : <p className="card-text">${card.card.price}.00</p>}
                        <StarsRating stars={stars} modal={showModal} />

                    </div>
                </div>
            </div>
            <Modal
                show={showModal}
                close={() => { setShowModal(false) }}
            >
                <div style={{ marginTop: "10px", overflow: "auto" }}>
                    <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                        <div>
                            <img style={{ width: "85%" }} src={card.card.banner} />
                        </div>
                    </Carousel>
                    <Description information={card} stars={stars} />
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1.5rem" }}>
                        <button className='btn btn-success' disabled={disableButton} >Instalar</button>

                        <button className='btn btn-secondary' onClick={()=> setShowModal(false)}> Cerrar</button>
                    </div>
                </div>
            </Modal>
        </>


    )
}
