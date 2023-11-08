import React from "react";
import "../cssfile/signup.css"

export default function Signup(){
  return(
      <>
  <div id = "back2">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>signup</title>
<div className="form">
  <div className="title">Sign Up</div>
  <div className="input-container ic1">
    <input id="name" className="input" type="text" placeholder=" " />
    <div className="cut cut-short" />
    <label htmlFor="name" className="placeholder">
      Name
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
  <button type="button" className="login">
          <a href="/login">  Log In</a>
          </button>
</div>
</div>
</>

  );
}
