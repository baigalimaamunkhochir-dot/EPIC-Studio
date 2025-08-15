import * as React from "react";
import './Login.css';
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import { Link } from 'react-router-dom';

export default function Login() {
  const [type, setType] = React.useState(1);

  const handleClick = (e) => {
    console.log("its clicked");
    setType(e);
  }  
 
  return (
     <>
     {type === 1 ? (
        <SignUp callBack={handleClick}/>
     )
     :
     (
        <SignIn callBack={handleClick}/>
     )
     }
     </>


  );
}
