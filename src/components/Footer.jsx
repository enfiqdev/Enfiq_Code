import React from 'react';
import '../css/Footer.css';
import logo from '../Images/Nav Resources/logo.svg';
import twitter from '../Images/Footer Resources/twitter.png';
import insta from '../Images/Footer Resources/insta.png';
import linkedin from '../Images/Footer Resources/linkedin.png';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-center'>
                    <div className='footer-container'>
                        <div className='footer-container-top'>
                            <div className='top-left'>
                                <div className='top-left-1'>
                                    <div className='footer-logo'>
                                        <img src={logo} className='logo' alt='Enfiq' />
                                        <a className='enfiq-name-footer' href='/'>enfiq</a>
                                    </div>
                                    <p className='footer-content'>
                                        We're always eager to hear your vision. Share your thoughts, and let's kickstart your digital journey!
                                    </p>
                                </div>
                                <div className='top-left-2'>
                                    <div>
                                        <p className='footer-company'>Company</p>
                                        <div className='footer-nav'>
                                            <ul className='footer-ul'><li className='footer-li'><a className='footer-link' href='#about'>About</a></li></ul>
                                            <ul className='footer-ul'><li className='footer-li'><a className='footer-link' href='#services'>Services</a></li></ul>
                                            <ul className='footer-ul'><li className='footer-li'><a className='footer-link' href='#portfolio'>Portfolio</a></li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='top-right'>
                                <div className='top-right-1'>
                                    <div className='social-div'>
                                        <a className='social-link'><img src={twitter} className='social-icon' /></a>
                                        <a className='social-link'><img src={insta} className='social-icon' /></a>
                                        <a className='social-link'><img src={linkedin} className='social-icon' /></a>
                                    </div>
                                </div>
                                <div className='top-right-2'>
                                    <div className='email-div'>
                                        <p className='mail-us'>Mail Us</p>
                                        <p className='email'>info@enfiq.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer-container-bottom'>
                            <p className='footer-copyright'>© Copyright 2023, All Rights Reserved by <span className='span-enfiq'>EnfiQ</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Footer;