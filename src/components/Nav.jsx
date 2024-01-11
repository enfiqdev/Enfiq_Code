import React, { useState } from 'react';
import '../css/Nav.css';
import logo from '../Images/Nav Resources/logo.svg';
import send from '../Images/Nav Resources/send.svg';
import { Link } from 'react-scroll';

const Nav = () => {
    const [flag,setFlag] = useState(false);

    const onClickMenu = ()=>{
        setFlag(!flag);
    }

    return (
        <>
            <div className='navbar' id='Nav'>
                <div className='nav-center'>
                    <div className='left-nav'>
                        <img src={logo} className='logo' alt='Enfiq'/>
                        <a className='enfiq-name' href='/'>enfiq</a>
                    </div>
                    <div className='mid-nav'>
                        <ul className='nav-ul'><li className='nav-li'><Link className='nav-link' to='About' smooth={true} offset={0} duration={800}>About</Link></li></ul>
                        <ul className='nav-ul'><li className='nav-li'><Link className='nav-link' to='Services' smooth={true} offset={0} duration={500}>Services</Link></li></ul>
                        <ul className='nav-ul'><li className='nav-li'><Link className='nav-link' to='Project' smooth={true} offset={0} duration={500}>Portfolio</Link></li></ul>
                    </div>
                    <div className='right-nav'>
                        <a href='https://cal.com/enfiq/' className='lets-talk'>Let's Talk <img src={send} className='send-arrow' /></a>
                        <div className={!flag?'menu':'menu-open'} onClick={onClickMenu}>
                            <div id='bar1' className='bar'></div>
                            <div id='bar2' className='bar'></div>
                            <div id='bar3' className='bar'></div>
                        </div>
                    </div>
                    <div className={flag?'mobile-nav':'mobile-nav-closed'}>
                        <div className='mobile-mid-nav'>
                            <ul className='mobile-nav-ul nav-ul'><li className='nav-li'><Link className='nav-link' to='About' smooth={true} offset={0} duration={800}>About</Link></li></ul>
                            <ul className='mobile-nav-ul nav-ul'><li className='nav-li'><Link className='nav-link' to='Services' smooth={true} offset={0} duration={500}>Services</Link></li></ul>
                            <ul className='mobile-nav-ul nav-ul'><li className='nav-li'><Link className='nav-link' to='Project' smooth={true} offset={0} duration={500}>Portfolio</Link></li></ul>
                        </div>
                        <div className='mobile-right-nav'>
                            <a href='https://cal.com/enfiq/' className='mobile-lets-talk'>Let's Talk <img src={send} className='send-arrow' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Nav;