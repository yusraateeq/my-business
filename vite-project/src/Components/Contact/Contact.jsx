import React from 'react'
import './Contact.css'
import message_icon from '../../assets/message.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="https://formspree.io/f/mrbgbypk" method='POST'>
            <label>your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            
            <label>your Email</label>
            <input type="email" name="email" id="" placeholder='Enter your email' required/>

            <label>your Email</label>
            <textarea name="message" id="" rows={6} placeholder='enter your message' required></textarea>
            <button type='submit' className='button btn'>Submit now</button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
