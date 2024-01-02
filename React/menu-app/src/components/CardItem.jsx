import React from "react";
import { Link } from "react-router-dom";

function Card (props){

    const {src, text, label, path, precio} = props

    return(
        <>
        <li className="cards__item">
            <Link to={path} className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category={label}>
                    <img 
                    src={src} 
                    alt="food" 
                    className="cards__item__img"
                    />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{text}</h5>
                    <h5 className="cards__item__text">Precio: {precio}$</h5>
                </div>
            </Link>
        </li>
        </>
    );

}

export default Card;