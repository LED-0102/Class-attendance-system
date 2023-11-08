import React from "react";
import "../cssfile/login.css"

export default function Login(){
  return(
      <>
  <div id = "back2">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
<link rel="stylesheet" href="./login.css" />
<nav className="navMenu">
  <a href="/home">Home</a>
  
  <a href="/about">About</a>
  
</nav>
<div className="form">
  <div className="title">Welcome</div>
  <div className="input-container ic1">
    <input id="course" className="input" type="text" placeholder=" " />
    <div className="cut cut-long" />
    <label htmlFor="course" className="placeholder">
      Course code
    </label>
  </div>
  <div className="input-container ic2">
    <input id="email" className="input" type="text" placeholder=" " />
    <div className="cut cut-short" />
    <label htmlFor="email" className="placeholder">
      Email
    </label>
  </div>
  <div className="input-container ic2">
    <input id="password" className="input" type="text" placeholder=" " />
    <div className="cut" />
    <label htmlFor="password" className="placeholder">
      Password
    </label>
  </div>
  <button type="text" className="submit">
    submit
  </button>
  <button type="button" className="signup">
          <a href="/signup">Sign Up
  </a>          </button>
</div>
</div>
</>

  );
}
