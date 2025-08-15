import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <h1 className="heading"><span> contact </span> us</h1>

      <div className="row">

        <form action="">
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="number" className="box" />
          <textarea className="box" placeholder="message" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" className="btn" />
        </form>

        <div className="image">
          <iframe
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '1rem' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.2043295361654!2d21.134909615797368!3d51.39501912493273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47185e6d601c19ed%3A0x161d705249e8032b!2sJacka%20Malczewskiego%2020A%2C%2026-610%20Radom%2C%20Poland!5e0!3m2!1sen!2spl!4v1683703607204!5m2!1sen!2spl"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
