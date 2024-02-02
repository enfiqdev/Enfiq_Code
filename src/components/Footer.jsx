import React from 'react';
import '../css/Footer.css';
import logo from '../Images/Nav Resources/logo.svg';
import twitter from '../Images/Footer Resources/twitter.png';
import insta from '../Images/Footer Resources/insta.png';
import linkedin from '../Images/Footer Resources/linkedin.png';
import { Link } from 'react-scroll';

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
                                        <img src={logo} className='footer-logo-img' alt='Enfiq' />
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
                                            <ul className='footer-ul'><li className='footer-li'><Link className='footer-link' to='About' smooth={true} offset={0} duration={800}>About</Link></li></ul>
                                            <ul className='footer-ul'><li className='footer-li'><Link className='footer-link' to='Services' smooth={true} offset={0} duration={500}>Services</Link></li></ul>
                                            <ul className='footer-ul'><li className='footer-li'><Link className='footer-link' to='Project' smooth={true} offset={0} duration={500}>Portfolio</Link></li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='top-right'>
                                <div className='top-right-1'>
                                    <div className='social-div'>
                                        <a className='social-link' href="https://twitter.com/EnfiqOfficial?t=IWze5GVAN4_gpPxT7Tw08Q"><img src={twitter} className='social-icon' /></a>
                                        <a className='social-link' href="https://www.instagram.com/enfiqofficial/?utm_source=qr&r=nametag"><img src={insta} className='social-icon' /></a>
                                        <a className='social-link' href="https://www.linkedin.com/company/enfiq/"><img src={linkedin} className='social-icon' /></a>
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