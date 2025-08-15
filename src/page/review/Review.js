import React from 'react';
import './Review.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Review() {
  return (
    <section className="review" id="review">
      <h1 className="heading">customer's<span> review</span></h1>

      <div className="box-container">

        <div className="box">
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            Epic Studio is honestly the best thing I’ve experienced this year. As someone who’s a bit camera shy when other people are around, this self-photo setup gave me total freedom to relax and be myself. The space was clean, beautifully lit, and really intuitive to use. I took my time trying different angles and poses, and the photos turned out stunning — like something straight out of a professional portfolio. It’s amazing how empowering it feels to take your own pictures and have full creative control. I’ve already told all my friends and booked my second session!
          </p>
          <div className="user">
            <img src="user1.webp" alt="Alex Deo" />
            <div className="user-info">
              <h3>alex deo</h3>
              <span>Creative Artist</span>
            </div>
          </div>
          <span className="fas fa-quote-right"></span>
        </div>

        <div className="box">
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            I needed updated photos for my website and LinkedIn, but I didn’t want to go through the hassle of hiring a photographer. A friend recommended Epic Studio and I’m so glad I listened. The whole setup was seamless. I loved being able to adjust the lighting and preview shots in real-time. The quality of the images exceeded my expectations. One thing that could make it even better would be a dedicated area or mirror for outfit changes, but even without that, it was an outstanding experience. If you want to look good and feel confident — this is the place.
          </p>
          <div className="user">
            <img src="user2.jpeg" alt="Rina Kim" />
            <div className="user-info">
              <h3>Rina Kim</h3>
              <span>Startup Founder</span>
            </div>
          </div>
          <span className="fas fa-quote-right"></span>
        </div>

        <div className="box">
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            As someone who constantly needs content for social media, I was blown away by Epic Studio. I’ve used self-timer apps before, but nothing compares to the environment this studio offers. The backdrop was dreamy, the lighting was perfect, and I could take unlimited photos until I felt satisfied. What I loved most was the privacy — it really helped me let loose and try out creative ideas without feeling judged. It’s like having a professional studio all to yourself. Whether you're a blogger, a couple, or just someone who wants high-quality solo portraits, this place is a must-visit!
          </p>
          <div className="user">
            <img src="user3.webp" alt="Emma Johnson" />
            <div className="user-info">
              <h3>Emma Johnson</h3>
              <span>Travel & Lifestyle Blogger</span>
            </div>
          </div>
          <span className="fas fa-quote-right"></span>
        </div>

      </div>
    </section>
  );
}
