import "../cssfile/result.css"
export default function Result(){
    return (
        <>
  <div className="navbar">
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/myclass">myClass</a>
    <a href="/result">Result</a>
  </div>
  <div className="result">Result</div>
  <div className="container">
    <table className="styled-table">
      <thead>
        <tr>
          <th>Roll Number</th>
          <th>Attendance</th>
          <th>Serial Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Roll 1</td>
          <td>Present</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Roll 2</td>
          <td>Absent</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Roll 3</td>
          <td>Present</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Roll 4</td>
          <td>Absent</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Roll 5</td>
          <td>Present</td>
        </tr>
      </tbody>
    </table>
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <img src="unnamed.png" alt="Image 1" />
        </div>
        <div className="slide">
          <img src="unnamed.png" alt="Image 2" />
        </div>
        <div className="slide">
          <img src="unnamed.png" alt="Image 3" />
        </div>
      </div>
    </div>
    <button className="prev-btn">Previous</button>
    <button className="next-btn">Next</button>
  </div>
</>

    )

}