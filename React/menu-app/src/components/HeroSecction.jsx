import React from "react";
import Button from "./Button.jsx";
import '../styles/HeroSecction.css'
import '../App.css'


const HeroSecction = ()=>{



    return(
        <div className="hero-container">
            <video>
                <source src='../../public/video/video-1.mp4'  />
            </video>
            <h1>Where there is food, there is happiness </h1>
            <p>What are you witing for to order?</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                path = '/edition'
                >
                GET STARTED    
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                path = '/products'
                >
                    VIEW MENU <i className="fas fa-hamburger"/>
                </Button>
                
            </div>
        </div>
    );
}


export default HeroSecction;