import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <style>
        {`
          .contact-container {
            background-color: #0D1B2A; /* Dark blue background */
            min-height: 100vh;
            padding: 60px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .contact-wrapper {
            display: flex;
            flex-direction: row;
            background-color:  #ffffff; /* White background for the form and info */
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            max-width: 1000px;
            width: 100%;
            overflow: hidden;
          }

          .contact-info {
            background-color: #0D1B2A;
            color: #ffffff;
            padding: 40px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .contact-info h2 {
            margin-bottom: 20px;
            font-size: 2rem;
          }

          .contact-info p {
            margin: 10px 0;
            font-size: 1rem;
            display: flex;
            align-items: center;
          }

          .contact-info p svg {
            margin-right: 10px;
          }

          .social-links {
            margin-top: 20px;
            display: flex;
            gap: 15px;
          }

          .social-links a {
            color: #ffffff;
            font-size: 1.5rem;
            text-decoration: none;
            transition: color 0.3s;
          }

          .social-links a:hover {
            color: #1DA1F2; /* Twitter blue as hover effect */
          }

          .contact-form {
            flex: 1;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .contact-form h2 {
            margin-bottom: 20px;
            color: #0D1B2A;
            font-size: 2rem;
            text-align: center;
          }

          .contact-form label {
            margin-bottom: 5px;
            color: #0D1B2A;
            font-weight: 600;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
            resize: vertical;
          }

          .contact-form button {
            background-color: #0D1B2A;
            color: #ffffff;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .contact-form button:hover {
            background-color: #1B263B;
          }

          @media (max-width: 768px) {
            .contact-wrapper {
              flex-direction: column;
            }

            .contact-info,
            .contact-form {
              padding: 20px;
            }
          }
        `}
      </style>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><FaPhoneAlt /> +92 300 1234567</p>
          <p><FaEnvelope /> example@gmail.com</p>
          <p><FaGlobe /> www.example.com</p>
          <p><FaLinkedin /> <a href="https://www.linkedin.com/in/yourprofile" style={{ color: '#ffffff', textDecoration: 'underline' }}>yourprofile</a></p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
