import React,{useState,useEffect} from 'react'
import '../css/Services.css'

import white_brush from "../Images/Services Resources/white_brush.png";
import white_chaticon from "../Images/Services Resources/white_chaticon.png";
import white_magnifying from "../Images/Services Resources/white_magnifying_glass.png";
import white_tablet from "../Images/Services Resources/white_tablet.png";
import white_rejection from "../Images/Services Resources/white_rejecticon.png";

import red_brush from "../Images/Services Resources/red_brush.png";
import red_chaticon from "../Images/Services Resources/red_chaticon.png"
import red_rejection from "../Images/Services Resources/red_rejection.png"
import red_tablet from "../Images/Services Resources/red_tablet.png"
import red_magnifying_glass from "../Images/Services Resources/red_magnifying_glass.png"

import display1 from "../Images/Services Resources/Display 11.png";
import display2 from "../Images/Services Resources/Display 12.png"
import display3 from "../Images/Services Resources/Display 13.png"
import display4 from "../Images/Services Resources/Display 14.png"
import display5 from "../Images/Services Resources/Display 15.png"
import arrow from "../Images/Nav Resources/send.svg";

export default function Services() {
  const[btnimg,changebtnimg]=useState({
    brush:red_brush,
    chaticon:white_chaticon,
    magnifying_glass:white_magnifying,
    rejection:white_rejection,
    tablet:white_tablet
  });

  useEffect(()=>{
    Select(0);
  },[])

  const[imgdata,changeimg]=useState(display1);
  const red_icons = [red_brush,red_tablet,red_rejection,red_magnifying_glass,red_chaticon];
  const img_set = ['brush','tablet','rejection','magnifying_glass','chaticon'];
  const displays = [display1, display2, display3, display4, display5];
  let element = document.getElementsByClassName('dbtn');
  
  const Select = (num) =>{
    let order=[white_brush,white_tablet,white_rejection,white_magnifying,white_chaticon]
    order[num]=red_icons[num];

    changebtnimg({...btnimg,[`${img_set[0]}`]:order[0],[`${img_set[1]}`]:order[1],[`${img_set[2]}`]:order[2],[`${img_set[3]}`]:order[3],[`${img_set[4]}`]:order[4]});
    changeimg(displays[num]);

    for (let index = 0; index < element.length; index++) {
      element[index].style.backgroundColor = 'white';
      element[index].children[1].style.color="#000";
      if (index==num) {
        element[index].style.backgroundColor = 'rgba(212, 23, 23, 0.75)';
        element[index].children[1].style.color="white";
      }
    }
  }

  return (
    <div className='services_component' id='Services'>
      <div className="service_panel">
        <div className="service_subpanel1">
          <h1>Services</h1>
          <p>Expert Services That Define Our Excellence, From creative design to technical solutions, our services define industry excellence.</p>
        </div>
        <div className="service_subpanel2">
        <a href='https://cal.com/enfiq/' className='lets-talk-black'>Let's Talk <img src={arrow} className='send-arrow' /></a>
        </div>
      </div>
      <p id='servicemobile_desc'>Expert Services That Define Our Excellence, From creative design to technical solutions, our services define industry excellence.</p>
      <div className="service_divalign">
        <div className="divbtn">
          <div className="dbtn" onClick={()=>{Select(0)}} onMouseOver={()=>{Select(0)}}>
            <img src={btnimg.brush} alt="UI/UX" id='whitecircle' className="blackcircle"/>
            <h3>UI/UX Desigining</h3>
          </div>
          <div className="dbtn" onClick={()=>{Select(1)}} onMouseOver={()=>{Select(1)}}>
            <img src={btnimg.tablet} alt="Full Stack" className="blackcircle"/>  
            <h3 id='adjust'>Full Stack Development</h3>
          </div>
          <div className="dbtn" onClick={()=>{Select(2)}} onMouseOver={()=>{Select(2)}}>
            <img src={btnimg.rejection} alt="No/Low Code" className="blackcircle"/>  
            <h3 id='adjust'>No/Low-Code Development</h3>
          </div>
        </div>
        <div className="section2">
          <div className="dbtn" onClick={()=>{Select(3)}} onMouseOver={()=>{Select(3)}}>
            <img src={btnimg.magnifying_glass} alt="SEO" className="blackcircle"/>  
            <h3>SEO Optimization</h3>
          </div>
          <div className="dbtn" onClick={()=>{Select(4)}} onMouseOver={()=>{Select(4)}}>
            <img src={btnimg.chaticon} alt="Chatbot" className="blackcircle"/>  
            <h3 id='adjust'>Chatbot Development</h3>
          </div>
        </div>
      </div>

      <img src={imgdata} alt="UI/UX" className="service_display" />
      <div className="boxing"></div>
    </div>
  )
}
