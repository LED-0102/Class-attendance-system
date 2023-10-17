import React from "react";
import "../cssfile/myclass.css"

// export default function Table2(prop) {
    
//     return (
//       <Table aria-label="Example static collection table">
//         <TableHeader>
//           <TableColumn>NAME</TableColumn>
//           <TableColumn>ROLL NUMBER</TableColumn>
//           <TableColumn>ATTENDANCE</TableColumn>
//         </TableHeader>
//         <TableBody>
//         {(prop.data1).map((student, index) => (
//               <TableRow  key={index}>
//                 <TableCell>{student.name}</TableCell>
//                 <TableCell>{student.rollnumber}</TableCell>
//                 <TableCell>{student.attendance==1 ? 'Present' : 'Absent'}</TableCell>
//               </TableRow>
//             ))}
          
//         </TableBody>
//       </Table>
//     );
//   }
  
export default function Myclass(){
    const directpage=()=>{


    }
    return (
        <>
  <div className="navbar">
  <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/myclass">myClass</a>
    <a href="/result">Result</a>
  </div>
  <div className="container">
    <table className="styled-table">
      <thead>
        <tr>
          <th>Batch</th>
          <th>Course</th>
          <th>Strength</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Batch 1</td>
          <td>Course A</td>
          <td>30</td>
          <td>
            <button onClick={directpage} className="add-details">Add Details</button>
          </td>
        </tr>
        <tr>
          <td>Batch 2</td>
          <td>Course B</td>
          <td>25</td>
          <td>
            <button className="add-details">Add Details</button>
          </td>
        </tr>
        <tr>
          <td>Batch 3</td>
          <td>Course C</td>
          <td>40</td>
          <td>
            <button className="add-details">Add Details</button>
          </td>
        </tr>
        <tr>
          <td>Batch 4</td>
          <td>Course D</td>
          <td>15</td>
          <td>
            <button className="add-details">Add Details</button>
          </td>
        </tr>
        <tr>
          <td>Batch 5</td>
          <td>Course E</td>
          <td>50</td>
          <td>
            <button className="add-details">Add Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button className="add-class-button">
    Add Class<span className="plus-sign">+</span>
  </button>
</>

    )
}