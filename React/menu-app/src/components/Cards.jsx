import React from "react";
import CardItem from './CardItem.jsx'
import '../styles/Cards.css'

function Cards(){


    return(

        <div className="cards">
            <h1>Check out theses EPIC dishes!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        text="The real cheseburger"
                        label='Oferta'
                        path='/edition'
                        />
                        <CardItem
                        src='https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600'
                        text="Pollo al vino con especias"
                        label='Oferta'
                        path='/edition'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        text="Fetuchini de Mariscos"
                        label='Oferta'
                        path='/edition'
                        />
                        <CardItem
                        src='https://images.pexels.com/photos/2027696/pexels-photo-2027696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        text="Yougut de frutos mixtos"
                        label='Oferta'
                        path='/edition'
                        />
                        <CardItem
                        src='https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        text="Ramen Uzumaki"
                        label='Oferta'
                        path='/edition'
                        />
                    </ul>

                </div>
            </div>
        </div>

    );
}


export default Cards;