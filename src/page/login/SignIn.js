import * as React from "react";
import './Login.css';

import { Link } from 'react-router-dom';

export default function SignIn({ callBack }) {
  const [email, setEmail] = React.useState("");
  const [passport, setPassport] = React.useState("");

  const handleClick = () => {
    callBack(1);
  }

  const handleEmail = (e) => {
    console.log(e)
    setEmail(e);
  }
  
  const handlePassport = (e)=> {
    setPassport(e);
  }

  const handleSignIn = () => {
    console.log(email);
    console.log(passport);
  }
 
  return (
     <div className="signup-container">
      <div className="form-section">
        <h2>Get Started Now</h2>
        <form>
          <div className="input-group">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" value={email} onChange={e => handleEmail(e.target.value)} />

          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" value={passport} onChange={e => handlePassport(e.target.value)}/>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the <a href="#">terms & policy</a></label>
          </div>
          <button type="submit" className="signup-button" onClick={() => handleSignIn()}>SignIn</button>
        </form> 
        <div className="social-login">
          <p>Or sign up with</p>
          <div className="social-buttons">
            <button className="google">Google</button>
            <button className="apple">Apple</button>
          </div>
        </div>
        <p className="signin-link" onClick={() => handleClick()}>Already have an account? <a href="#">Sign In</a></p>
      </div>
      <div className="image-section">
        <img src="cover.jpg" alt="Photo studio" />
      </div>
    </div>
  );
}
