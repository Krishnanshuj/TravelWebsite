import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './RadhikaTravels.css';
import { FaWhatsapp, FaArrowUp, FaPaperPlane } from 'react-icons/fa';
import contactImage from './assets/contactImage.png';

const Touch = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mgzgd5l',
      'template_crxulnu',
      form.current,
      '-yOCsjUwsekkZOrAV'
    ).then(
      (result) => {
        console.log(result.text);
        setFormStatus('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setFormStatus('Something went wrong. Please try again.');
      }
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="touch-section">
      <div className="touch-container">
        <div className="touch-image-wrapper">
          <img src={contactImage} alt="Contact" className="touch-image" />
        </div>

        <div className="touch-form-wrapper">
          <h2 className="touch-title">Get In Touch</h2>
          <form ref={form} onSubmit={sendEmail} className="touch-form">
            <div className="form-row">
              <input type="text" name="user_name" placeholder="Your Name" className="form-input" required />
              <input type="email" name="user_email" placeholder="Your Email" className="form-input" required />
            </div>
            <input type="text" name="subject" placeholder="Your Subject" className="form-input" required />
            <textarea name="message" rows="4" placeholder="Write Your Message" className="form-textarea" required></textarea>
            <button type="submit" className="form-button">
              SEND MESSAGE <FaPaperPlane />
            </button>
            {formStatus && <p style={{ marginTop: '10px', color: '#28a745' }}>{formStatus}</p>}
          </form>
        </div>
      </div>

      <a
        href="https://wa.me/919451038570"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp className="icon" />
      </a>

      <button onClick={scrollToTop} className="scroll-top-button">
        <FaArrowUp className="icon" />
      </button>
    </section>
  );
};

export default Touch;
