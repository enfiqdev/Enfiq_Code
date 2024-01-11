import React,{useState} from 'react'
import '../css/Call.css'

export default function Call() {

  return (
    <div className='callpanel'>
        <div className="callhead">
            <h2>Schedule a call</h2>
            <p>Ready to transform your digital presence? Let's build together and elevate your business</p>
            <div className="grades">
              <div className="gradecontent">
                <h2>1.67x</h2>
                <p>Impressive Performance</p>
                <p>Another way to grow fast</p>
              </div>
              <div className="gradecontent">
                <h2>29%</h2>
                <p>Customer Retention</p>
                <p>On your website</p>
              </div>
              <div className="gradecontent">
                <h2>19%</h2>
                <p>Extra Growth Revenue</p>
                <p>From your sales</p>
              </div>
            </div>
            <div className="call_line"></div>
            <div className='call_inputs'>
                <form action="https://submit-form.com/d5w151K9c">
                    <input type="text" name="email" placeholder='Enter your Email' />
                    <button type='submit'>Get in Touch</button>
                </form>
            </div>
        </div>
    </div>
  )
}
