import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Message from './Message';
import './Contact.css';

function Contact() {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us using the form below.</p>
        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" placeholder="Full Name" name="user_name" required />
            <input type="email" placeholder="Email" name="user_email" required />
            <textarea name="message" placeholder="Write your message" rows="10" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          {success && <Message />}
        </div>
      </div>
    </div>
  );
}

export default Contact;
