import React from 'react';
import '../css/Hero.css';
import hero1 from '../Images/Hero Resources/hero1.png';
import hero2 from '../Images/Hero Resources/hero2.png';
import box from '../Images/Hero Resources/box.png';
import arrowBlack from '../Images/Hero Resources/Arrow-Black.svg';
import arrowRed from '../Images/Hero Resources/Arrow-Red.svg';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    AOS.init({
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 220,
        delay: 100,
        duration: 1000,
        easing: 'ease',
        once: false,
    });

    return (
        <>
            <div className='hero-section'>
                <div className='hero-center'>
                    <div className='hero-top'>
                        <p className='hero-title'>Crafting Tomorrow's Digital Triumphs, Today.</p>
                        <p className='hero-content'>At EnfiQ, we go beyond the ordinary, transforming ideas into digital brilliance.</p>
                    </div>
                    <div className='hero-middle'>
                        <div>
                        <a href='https://cal.com/enfiq/' target='_blank' className='schedule-call'>Schedule a Call</a>
                        <Link href='#portfolio' className='view-work' to='Project' smooth={true} offset={0} duration={500}>View Work</Link>
                        </div>
                    </div>
                    <div className='hero-bottom'>
                        <div className='hero-left'>
                            <div className='hero-left-container'>
                                <p className='hero-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit.Horem ipsum dolor sit amet,Horem ipsum <img src={box} data-aos="slide-left" className='box' /></p>
                            </div>
                            <div className='elements1' data-aos="slide-right">
                                <div className='user1'>User 1</div>
                                <img src={arrowBlack} className='arrowBlack' />
                            </div>
                            <div className='elements2' data-aos="slide-left">
                                <div className='user2'>User 2</div>
                                <img src={arrowRed} className='arrowRed' />
                            </div>
                        </div>
                        <div className='hero-right'>
                            <div className='hero-right-container'>
                                <img className='hero-img1' data-aos="fade-up" src={hero1} />
                                <img className='hero-img2' data-aos="fade-up" src={hero2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Hero;
