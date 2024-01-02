import React from "react";
import Button from "./Button";
import '../styles/Footer.css'
import { Link } from "react-router-dom";


export default function Footer(){

    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the special newsletter to recive our best recipt and dishes oferts
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        className="footer-input"
                        />
                        <Button  buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>About Us</h3>
                        <Link to='/sing-up'>How it works</Link>
                        <Link to='/'> Testimonial</Link>
                        <Link to='/'> Carres</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'> Terms of Services</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>Contact Us</h3>
                        <Link to='/sing-up'>Contact</Link>
                        <Link to='/'> Support</Link>
                        <Link to='/'> Destinations</Link>
                        <Link to='/'> Sponsorships</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>Videos</h3>
                        <Link to='/sing-up'>Ambassadors</Link>
                        <Link to='/'> Submit video</Link>
                        <Link to='/'> Agency</Link>
                        <Link to='/'> Influencer</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>Social Media</h3>
                        <Link to='/sing-up'>Instagram</Link>
                        <Link to='/'> Facebook</Link>
                        <Link to='/'> X</Link>
                        <Link to='/'> Tiktok</Link>
                        <Link to='/'> Youtube</Link>
                    </div>
                </div>
            </div>
            

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            MENU App <i className="fas fa-utensils"></i>
                        </Link>
                    </div>
                    <small className="website-rigths">
                        MENU App ©️ 2023
                    </small>
                    <div className="social-icons">
                    <Link to='/' target='_blank' aria-label="Facebook" className="social-icon-link facebook">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to='/' target='_blank' aria-label="Instagram" className="social-icon-link instagram">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to='/' target='_blank' aria-label="Youtube" className="social-icon-link youtube">
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link to='/' target='_blank' aria-label="x" className="social-icon-link x">
                        <i className="fab fa-x"></i>
                    </Link>
                    <Link to='/' target='_blank' aria-label="tiktok" className="social-icon-link tiktok">
                        <i className="fab fa-tiktok"></i>
                    </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
