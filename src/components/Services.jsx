import React,{useState} from 'react'
import '../css/Services.css'

import white_brush from "../Images/Services Resources/white_brush.png";
import white_chaticon from "../Images/Services Resources/white_chaticon.png";
import white_magnifying from "../Images/Services Resources/white_magnifying_glass.svg";
import white_tablet from "../Images/Services Resources/white_tablet.svg";
import white_rejection from "../Images/Services Resources/white_rejecticon.svg";

import red_brush from "../Images/Services Resources/red_brush.png";
import red_chaticon from "../Images/Services Resources/red_chaticon.png"
import red_rejection from "../Images/Services Resources/red_rejection.png"
import red_tablet from "../Images/Services Resources/red_tablet.png"
import red_magnifying_glass from "../Images/Services Resources/red_magnifying_glass.png"

import display1 from "../Images/Services Resources/Display1.png";
import display2 from "../Images/Services Resources/Display2.png"
import display3 from "../Images/Services Resources/Display3.png"
import display4 from "../Images/Services Resources/Display4.png"
import display5 from "../Images/Services Resources/Display5.png"

export default function Services() {
  const[btnimg,changebtnimg]=useState({
    brush:red_brush,
    chaticon:white_chaticon,
    magnifying_glass:white_magnifying,
    rejection:white_rejection,
    tablet:white_tablet
  });
  const[imgdata,changeimg]=useState(display1);

  const img_set = ['brush','chaticon','magnifying_glass','rejection','tablet'];

  const Sel=(num)=>{
    let element = document.getElementsByClassName('dbtn');
    let imgelement = document.getElementsByClassName('service_display')[0].firstChild.style;

    for (let index = 0; index < element.length; index++) {
      element[index].style.background = "white";
      element[index].lastChild.style.color = "#000";
      element[index].firstChild.style.background = "#222";
    }

    element[num].style.background = "rgba(212, 23, 23, 0.75)";
    element[num].lastChild.style.color = "whitesmoke";
    element[num].firstChild.style.background = "whitesmoke";

    imgelement.position = 'relative';

    switch (num) {
      case 0:
        changebtnimg({...btnimg,[img_set[0]]:red_brush,['chaticon']:white_chaticon,['magnifying_glass']:white_magnifying,['rejection']:white_rejection,['tablet']:white_tablet});
        imgelement.right = "7vw";
        imgelement.top = "7vh";
        changeimg(display1);
        break;

      case 1:
        changebtnimg({...btnimg,[img_set[img_set.length-1]]:red_tablet,['chaticon']:white_chaticon,['magnifying_glass']:white_magnifying,['rejection']:white_rejection,['brush']:white_brush});
        imgelement.right = "-5vw";
        imgelement.top = "7vh";
        changeimg(display2);
        break;

      case 2:
        changebtnimg({...btnimg,['rejection']:red_rejection,['chaticon']:white_chaticon,['magnifying_glass']:white_magnifying,['brush']:white_brush,['tablet']:white_tablet});
        imgelement.right = "-5vw";
        imgelement.top = "7vh";
        changeimg(display3);
        break;

      case 3:
        changebtnimg({...btnimg,['magnifying_glass']:red_magnifying_glass,['chaticon']:white_chaticon,['brush']:white_brush,['rejection']:white_rejection,['tablet']:white_tablet});
        imgelement.right = "0vw";
        imgelement.top = "0vh";
        changeimg(display4);
        break;

      case 4:
        changebtnimg({...btnimg,[img_set[1]]:red_chaticon});
        imgelement.right = "-5vw";
        imgelement.top = "7vh";
        changeimg(display5);
        break;
    }
  }
  return (
    <div className='services_component'>
      <div className="service_panel">
        <div className="service_subpanel1">
          <h1>Services</h1>
          <p>Expert Services That Define Our Excellence, From creative design to technical solutions, our services define industry excellence.</p>
        </div>
        <div className="service_subpanel2">
          <button>Let's Talk</button>
        </div>
      </div>
      <p id='servicemobile_desc'>Expert Services That Define Our Excellence, From creative design to technical solutions, our services define industry excellence.</p>

      <div className="divbtn">
        <div className="dbtn" onClick={()=>{Sel(0)}} onMouseOver={()=>{Sel(0)}}>
          <div className="blackcircle"><img src={btnimg.brush} alt="UI/UX" /></div>
          <h3>UI/UX Desigining</h3>
        </div>
        <div className="dbtn" onClick={()=>{Sel(1)}} onMouseOver={()=>{Sel(1)}}>
          <div className="blackcircle"><img src={btnimg.tablet} alt="Full Stack" /></div>
          <h3>Full Stack Development</h3>
        </div>
        <div className="dbtn" onClick={()=>{Sel(2)}} onMouseOver={()=>{Sel(2)}}>
          <div className="blackcircle"><img src={btnimg.rejection} alt="No/Low Code" /></div>
          <h3>No/Low-Code Development</h3>
        </div>
        <div className="dbtn" onClick={()=>{Sel(3)}} onMouseOver={()=>{Sel(3)}}>
          <div className="blackcircle"><img src={btnimg.magnifying_glass} alt="SEO" /></div>
          <h3>SEO Optimization</h3>
        </div>
        <div className="dbtn" onClick={()=>{Sel(4)}} onMouseOver={()=>{Sel(4)}}>
          <div className="blackcircle"><img src={btnimg.chaticon} alt="Chatbots" /></div>
          <h3>Chatbot Development</h3>
        </div>
      </div>

      <div className="service_display">
        <img src={imgdata} alt="UI/UX" />
      </div>
    </div>
  )
}
