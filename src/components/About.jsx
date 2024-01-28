import React,{useEffect, useRef} from 'react'
import '../css/About.css';
import img1 from '../Images/poster.png';
import img2 from '../Images/vscode.png';
import img3 from '../Images/mongodb.png';
import img4 from '../Images/figma.png'
import img5 from '../Images/Frame1.png';
import img6 from '../Images/Frame 1171276129 (1).png';
import img7 from '../Images/Frame 1171276129 (2).png';
import img8 from '../Images/framer.png';
import img9 from '../Images/voice.png';
import img10 from '../Images/webflow.png';
import arrow from "../Images/Nav Resources/send.svg";



const About = () => {

    const logosRef = useRef(null);
    useEffect(() => {
        const copy = logosRef.current.cloneNode(true);
        logosRef.current.parentNode.appendChild(copy);
      }, []);
      
  return (
    <>

    <div className="about-container" id='About'>
      <div className="about-sec">
        <div className="para-section">
          <h1 className="about-heading">
            We work together, as a seamless remote team
          </h1>
          <p className="paraTag2">
            At Enfiq, we seamlessly blend creative design with technical
            expertise, setting new industry benchmarks through our commitment
            to excellence.
          </p>
          <ul className="lists">
            <li>Pioneering expert services that define industry excellence</li>
            <li>Fostering seamless collaboration within our global remote team</li>
          </ul>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvlHCvNMNkslMvjxKmMXQNqxCfGhccxmtqpdXWVchsmfxgNHqNZNfSNTGcBXbtpgbmwXFg" target='_blank'><button className="join-btn">team@enfiq.com</button></a>
        </div>

        <div className="image-sec">
          <img className="about-img" src={img1} alt="about-image" />
        </div>
      </div>

      <div className="tools">
        <div className="logos">
          <div className="logos-slide" ref={logosRef}>
          
            <img src={img2} alt="Visual Studio" />
            <img src={img3} alt="MongoDB" />
            <img src={img4} alt="Figma" />
            <img src={img8} alt="Framer" />
            <img src={img9} alt="Voiceflow" />
            <img src={img10} alt="Webflow" />
          
          </div>
        </div>
      </div>



      <div className="tag-sec">
          <h2 className="tag-line">You Think it, we Built it.</h2>
          <a href='https://cal.com/enfiq/' className='lets-talk-black talk-btn'>Let's Talk <img src={arrow} className='send-arrow' /></a>

        </div>



        <div className="services">
          <div className="services-sec">
            <img className="services-img" src={img5} alt="design" />
            <p className="services-img" id="Unleash">
              Unleash creativity in every pixel, ensuring visually stunning and
              user-centric designs.
            </p>
          </div>

          <div className="services-sec">
            <img className="services-img" src={img6} alt="design" />
            <p className="services-img" id="Unleash">
              Code mastery, from full-stack to low/no-code, building
              high-performing websites
            </p>
          </div>

          <div className="services-sec">
            <img className="services-img" src={img7} alt="design" />
            <p className="services-img" id="Unleash">
              Launch with precision, turning ideas into impactful digital
              solutions.
            </p>
          </div>
        </div>




    </div>
      
      
    </>
  )
}

export default About