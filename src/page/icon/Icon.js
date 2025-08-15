import React from 'react';
import './Icon.css';

export default function Icon() {
  return (
    <section className="icons-container">
      <div className="icons">
        <img src="icon1.png" alt="" />
        <div className="info">
          <h3>offer & gift</h3>
          <span>on all orders</span>
        </div>
      </div>
      <div className="icons">
        <img src="icon3.png" alt="" />
        <div className="info">
          <h3>quick booking</h3>
          <span>instant online access</span>
        </div>
      </div>
      <div className="icons">
        <img src="icon4.png" alt="" />
        <div className="info">
          <h3>Download photos</h3>
          <span>on all orders</span>
        </div>
      </div>
      <div className="icons">
        <img src="icon2.png" alt="" />
        <div className="info">
          <h3>secure payment</h3>
          <span>protected by pay</span>
        </div>
      </div>
    </section>
  );
}
