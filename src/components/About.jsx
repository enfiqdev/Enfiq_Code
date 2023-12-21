import React,{useEffect, useRef} from 'react'
import '../css/About.css';
import img1 from '../Images/poster.jpg';
import img2 from '../Images/vs.jpg';
import img3 from '../Images/mongo.jpg';
import img4 from '../Images/figma.jpg'
import img5 from '../Images/Frame1.png';
import img6 from '../Images/Frame 1171276129 (1).png';
import img7 from '../Images/Frame 1171276129 (2).png';


const About = () => {

    const logosRef = useRef(null);
    useEffect(() => {
        const copy = logosRef.current.cloneNode(true);
        logosRef.current.parentNode.appendChild(copy);
      }, []);
      
  return (
    <>

    <div className="about-sec">
      <div className="aboutUs">
        <h2 className="about-heading">We work together, as a seamless remote team</h2>
        <p className="about-pragh">
          At EnfiQ, we seamlessly blend creative design with technical expertise, setting new industry benchmarks through our commitment to excellence.
        </p>
        <div className="lists">
          <ul>
            <li>Pioneering expert services that define industry excellence</li>
            <li>Fostering seamless collaboration within our global remote team</li>
          </ul>
        </div>
        <button className="join-btn">Join our team</button>
        <div className="frame1">
          <img className="poster-img" src={img1} alt="" />
        </div>
      </div>
      <div className="tools">
        <div className="logos">
          <div className="logos-slide" ref={logosRef}>
            <img src={img2} alt="Visual Studio" />
            <img src={img3} alt="MongoDB" />
            <img src={img4} alt="Figma" />
            <img src={img2} alt="Visual Studio" />
            <img src={img3} alt="MongoDB" />
            <img src={img4} alt="Figma" />
          </div>
        </div>
      </div>

      <div className="tag-sec">
      <h2 className="tag-line">You Think it, we Built it.</h2>
      <button className="talk-btn">Let's Talk</button>
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
          Code mastery, from full-stack to low/no-code, building high-performing
          websites
        </p>
      </div>

      <div className="services-sec">
        <img className="services-img" src={img7} alt="design" />
        <p className="services-img" id="Unleash">
          Launch with precision, turning ideas into impactful digital solutions.
        </p>
      </div>
    </div>


    </div>
      
    </>
  )
}

export default About
