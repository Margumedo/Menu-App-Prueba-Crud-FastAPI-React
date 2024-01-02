import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Button from './Button.jsx';
import '../styles/Navbar.css'


const Navbar = ()=>{

    //declaro mis Hooks
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    //declaro mis funciones

    const handleClick = (event)=> setClick(!click);
    
    const closeMobileMenu = ()=> setClick(false);

    const showBotton = ()=> window.innerWidth <=960 ? setButton(false): setButton(true);
    
    window.addEventListener('resize', showBotton);


    useEffect(()=>{
        showBotton();
    },[])
        
    return(
        <>
        <nav className="navbar" >
        <div className="navbar-container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            MENU App
            <i className="fas fa-utensils mx-3"/>
            
            </Link>
            
            <div className="menu-icon">
                <i className={click?'fas fa-times':'fas fa-bars'} onClick={handleClick}/>
            </div>

            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className="nav-item">
                    <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-links" to="/edition" onClick={closeMobileMenu}>
                        Edition
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-links" to="/products" onClick={closeMobileMenu}>
                        Menu
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-links-mobile" to="/sing-up" onClick={closeMobileMenu}>
                        Sing Up
                    </Link>
                </li>
            </ul>

            {button && <Button buttonStyle='btn--outline'>SING UP</Button>}

        </div>
    </nav>    
        </>
    
    );
};


export default Navbar;