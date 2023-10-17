import React from 'react';
import "../cssfile/about.css"
import img from "../images/WhatsApp Image 2023-10-17 at 12.05.57 AM.jpeg"
function Aboutme() {

return (<>
<>
  
  <div className="navbar">
  <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/myclass">myClass</a>
    <a href="/result">Result</a>
  </div>
  <div className="info-box">
    <div className="info">
      <img className="image" src={img} alt="Image 1" width={100} />
      <div>
        <h3>220001001</h3>
        <p>Aadish Jain</p>
      </div>
    </div>
    <div className="info">
      <img className="image" src={img} alt="Image 2" width={100} />
      <div>
        <h3>220001002</h3>
        <p>Abhinav gangil</p>
      </div>
    </div>
    <div className="info">
      <img className="image" src={img} alt="Image 3" width={100} />
      <div>
        <h3>220001000</h3>
        <p>smurf cat</p>
      </div>
    </div>
  </div>
</>

</>)}

export default Aboutme;
