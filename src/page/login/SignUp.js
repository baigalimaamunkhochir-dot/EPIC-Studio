import * as React from "react";
import './Login.css';

import { Link } from 'react-router-dom';

export default function SignUp({ callBack }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

  const handleClick = () => {
    callBack(2);
  } 
   const handleName = (e) => {
    console.log(e)
    setName(e);
   }
     const handleEmail = (e) => {
        console.log(e)
    setEmail(e); 
     }

    const handlePassword = (e) => {
    setPassword(e);
    }

   const handleSignUp = (e) => {
  console.log("It's clicked");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
};


  return (
     <div className="signup-container">
      <div className="form-section">
        <h2>Get Started Now</h2>

        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" value={name} onChange={e => handleName(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" value={email} onChange={e => handleEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" value={password} onChange={e => handlePassword(e.target.value)}  />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the <a href="#">terms & policy</a></label>
          </div>
          <button type="submit">Signup</button>
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
