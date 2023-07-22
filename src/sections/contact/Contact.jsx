import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>gmail</h5>
            <a href="mailto:rsvrohiths98@gmail.com" target='_blank'>Send a Message</a>
          </article>
          {/* next contact */}
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon"/>
            <h4>whatsapp</h4>
            <h5>+91 1234567890</h5>
            <a href="https://wa.me/918078248275" target='_blank'>Send a Message</a>
          </article>

        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name"  required/>
          <input type="email" name="email" placeholder="Your Email"  required/>
          <textarea name="message"  rows="7" placeholder="your message" required></textarea>
          <button type="submit" className="btn btn-primary btn-sub">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact