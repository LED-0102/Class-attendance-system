import React from "react";
import "../cssfile/login.css"
export default function Login(){
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <div className="navbar">
  <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/myclass">myClass</a>
    <a href="/result">Result</a>
  </div>
  <div className="signin-box">
    <h1 className="signin-heading">Sign In</h1>
    <div className="input-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
    </div>
    <div className="input-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
    </div>
    <div className="remember-me">
      <input type="checkbox" id="remember" /> Remember me
    </div>
    <button className="sign-in-button">Sign-In</button>
  </div>
</>

    );
}