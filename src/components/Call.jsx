import React,{useState} from 'react'
import '../css/Call.css'

export default function Call() {

  return (
    <div className='callpanel'>
        <div className="callhead">
            <h2>Schedule a call</h2>
            <p>Ready to transform your digital presence? Let's build together and elevate your business</p>
            <div className="call_line"></div>
            <div className='call_inputs'>
                <form action="https://submit-form.com/d5w151K9c">
                    <input type="text" name="email" placeholder='Enter your Email' />
                    <button type='submit'>Book a Call</button>
                </form>
            </div>
        </div>
    </div>
  )
}
