import React from 'react';
import './Home.css';
import About from '../about/About';
import Icon from '../icon/Icon';
import Product from '../product/Product';
import Review from '../review/Review';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

export default function Home() {
   
    return (
        <>
            <section className="home" id="home"> 
                <div className="content">
                    <h3>capture yourself</h3>
                    <span>authentic & beautiful portraits</span>
                    <p>Step into the spotlight and create timeless portraits in a space made for self-expression. No photographer, just you — confident, creative, and completely in control.</p>
                    <a href="#" className="btn">book now </a>
                </div>
            </section>
            <About />
            <Icon />
            <Product />
            <Review />
            <Contact />
            <Footer />
        </>
    );
}
