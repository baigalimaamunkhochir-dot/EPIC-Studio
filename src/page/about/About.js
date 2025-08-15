import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>About</span> Us</h1>
      <div className="row">
        <div className="image-container">
          <img src="about.webp" alt="about us image" />
          <h3>Leading Self Studio</h3>
        </div>
        <div className="content">
          <h3>why choose us?</h3>
          <p>At Epic Studio, we believe great portraits start with comfort and creative freedom. That’s why we’ve designed a space where you can take full control of your own shoot — no photographer, no pressure. Our private, beautifully lit booths are equipped with studio-quality lighting and easy-to-use systems, so you can pose, explore, and create at your own pace.</p>
          <p>Trusted by individuals, couples, and creatives across the city, Epic Studio makes self-portraiture simple — and unforgettable.</p>
          <a href="#" className="btn">learn more</a>
        </div>
      </div>
    </section>
  );
}
