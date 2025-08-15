import React from 'react';
import './Product.css';

export default function Product() {
  return (
    <section className="product" id="product">

      <h1 className="heading">latest<span> shoots</span></h1>

      <div className="box-container">

          <div className="box">
              <span className="discount">-10%</span>
              <div className="image">
                  <img src="img1.png" alt="Friends & Group" />
                  <div className="icons">
                      <a href="#" className="fas fa-heart"></a>
                      <a href="#" className="cart-btn">add to cart</a>
                      <a href="#" className="fas fa-share"></a>
                  </div>
              </div>
              <div className="content">
                  <h3>friends & group </h3>
                  <div className="price">$30.99<span>$45.99</span> </div>
              </div>
          </div>
          
          <div className="box">
              <span className="discount">-10%</span>
              <div className="image">
                  <img src="img2.png" alt="Portrait" />
                  <div className="icons">
                      <a href="#" className="fas fa-heart"></a>
                      <a href="#" className="cart-btn">add to cart</a>
                      <a href="#" className="fas fa-share"></a>
                  </div>
              </div>
              <div className="content">
                  <h3>portrait</h3>
                  <div className="price">$25.99<span>$30.99</span> </div>
              </div>
          </div>

          <div className="box">
              <span className="discount">-10%</span>
              <div className="image">
                  <img src="img3.png" alt="Campaign Shoot" />
                  <div className="icons">
                      <a href="#" className="fas fa-heart"></a>
                      <a href="#" className="cart-btn">add to cart</a>
                      <a href="#" className="fas fa-share"></a>
                  </div>
              </div>
              <div className="content">
                  <h3>Campaign Shoot</h3>
                  <div className="price">$50.99<span>$60.99</span> </div>
              </div> 
          </div>
      </div>
    </section>
  );
}
