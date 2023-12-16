import React from 'react';
import '../css/Hero.css';
import hero1 from '../Images/Hero Resources/hero1.png';
import hero2 from '../Images/Hero Resources/hero2.png';
import box from '../Images/Hero Resources/box.png';
import arrowBlack from '../Images/Hero Resources/Arrow-Black.svg';
import arrowRed from '../Images/Hero Resources/Arrow-Red.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    AOS.init({
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)      
        offset: 210, // offset (in px) from the original trigger point
        delay: 100, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        // mirror: false, // whether elements should animate out while scrolling past them
        // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
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
                            <a href='#portfolio' className='view-work'>View Work</a>
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