import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    

  return (
    <div>
      <header>

        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler" className="fas fa-bars"></label>

        <a href="/" className="logo"> Epic<span>.</span></a>

        <nav className="navbar">
          <a href="/">home</a>
          <a href="/about">about</a>
          <a href="/product">products</a> 
          <a href="/review">review</a>
          <a href="/contact">contact</a>
        </nav>
         
       <div className="icons">
        <a href="/" className="fas fa-heart"></a>
        <a href="/" className="fas fa-shopping-cart"></a>
        <Link to="/login" className="fas fa-user"></Link>
      </div>
      
      </header> 
    </div>
  );
}


