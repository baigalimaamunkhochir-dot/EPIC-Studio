import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <section className="footer" id="footer">

      <div className="box-container">

        <div className="box">
          <h3>quick links</h3>
          <a href="#"> home</a>
          <a href="#"> about</a>
          <a href="#"> products</a>
          <a href="#"> review</a>
          <a href="#"> contact</a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="#"> my account</a>
          <a href="#"> my order</a>
          <a href="#"> my favorite</a>
        </div>

        <div className="box">
          <h3>locations</h3>
          <a href="#"> USA</a>
          <a href="#"> poland</a>
          <a href="#"> france</a>
          <a href="#"> korea</a>
          <a href="#"> japan</a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#"> +48-668-402-316</a>
          <a href="#"> epicstudio@gmail.com</a>
          <a href="#"> radom, poland - 26600</a>
          <img src="footer.png" alt="" />
        </div>

      </div>

      <div className="credit"> @copyright  <span>2025 Epic Studio </span> | all rights reserved </div>

    </section>
  );
}
