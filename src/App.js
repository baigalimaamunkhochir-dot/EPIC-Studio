import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './page/header/Header';
import Home from './page/home/Home';
import Login from "./page/login/Login";
import About from './page/about/About';
import Product from './page/product/Product';
import Review from './page/review/Review';
import Contact from './page/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/review' element={<Review />} />
          <Route path='/contact' element={<Contact />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
