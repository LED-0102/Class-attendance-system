import React,{useState,useEffect} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import axios from "axios"
import "../cssfile/upload.css"
import { ChangeEvent, useRef } from "react";
import { ClipLoader } from 'react-spinners';

const LoadingCircle = () => {
  return (
    <div className="flex justify-center text-white bg-black rounded-xl w-48 position-absolute   items-center t-0 l-0">
      loading..
      <div className="border-t-4 border-blue-500 border-solid rounded-full w-8 h-8 animate-spin" />
    </div>
  );
};
function Rendertable({data,name}){
  if(data.length !== 0){
    data = data.present
  }
  return (
    <Table aria-label="Example static collection table">
    <TableHeader>
      <TableColumn>NAME</TableColumn>
      <TableColumn>ROLL NUMBER</TableColumn>
      <TableColumn>ATTENDANCE</TableColumn>
    </TableHeader>
    <TableBody>
    {(data).map((student, index) => (
          <TableRow  key={index}>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.rollnumber}</TableCell>
            <TableCell>{student.attendance==1 ? 'Present' : 'Absent'}</TableCell>
          </TableRow>
        ))}
      
    </TableBody>
  </Table>)}
export default function Upload(){
  const [isLoading, setIsLoading] = useState(false);
  const [date,setdate]=useState()
  const fileUploader = useRef();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [Allpresent,setAllPresent]=useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  
  



  
  function StagingArea({ data, name }) {
    return (
      <div className="rounded-md bg-purple-100">
        <div className="flex flex-col gap-2 border-2 sm:gap-2">
          {data.length === 0 ? (
            <p className="text-sm text-zinc-400 ">*Add files to display</p>
          ) : (
            data.map((item, index) => (
              <div key={index} className="flex flex-row gap-2 bg-purple-200 rounded-sm  items-center">
                <p className="w-48 text-sm">{item.name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
  
    function fileSubmit() {
      if(selectedFile.length===0){
        alert("Enter atleast one image");
        return;
      }
      if(date){
    setIsLoading(true);
    const formData = new FormData();

    selectedFile.forEach((file) => formData.append("files", file));
    setAllPresent([]);
    axios
      .post("http://127.0.0.1:8000/uploadfiles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        
        setAllPresent(response.data);
        console.log(Allpresent);
        setIsLoading(false);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });}
      else{
        alert("Enter a date");
      }
    }



    function toggleSidebar() {
      setSidebarVisible(!sidebarVisible);
    }
   
    return (<>
       
        <div className="navbar">
          
          <div className="toggle-button" onClick={toggleSidebar}>
            ☰
          </div>
          <a className="Home" href="/home">
            Home
          </a>
          <a className="Home" href="/myclass">
            myClass
          </a>
          <a className="About" href="/about">
            About
          </a>
          <a className="About" href="/result">
            Myresult
          </a>
        </div>
        {isLoading && <LoadingCircle />}
        <div className="container ">
          
          <div className="file-upload-container mt-[100px]  h-auto  ">
          <h2>Upload Your Files Here</h2> 
            <label onClick={() => fileUploader.current.click()} htmlFor="file-input" className="file-upload-label hover:font-bold">
              Click to Upload a File
            </label>
            <input
              className=""
              accept=".png, .jpg, .jpeg"
              hidden
              type="file"
              ref={fileUploader}
              onChange={(e) =>
                setSelectedFile([...selectedFile, e.target.files[0]])
              }/>
            <StagingArea data={selectedFile} name="file" />
            
            
            <button
              onClick={fileSubmit}
              className="mt-2 hover:bg-purple-900  bg-purple-800 text-white rounded-xl font-medium w-24">
              Submit
            </button>
              {/* <button  onPress={() => fileUploader.current.click()}></button> */}
            {/* <span className="file-upload-icon">+</span> */}
          </div>
          <section className="date-picker block">
            <label htmlFor="date-input">Choose a Date:</label>
            <input value={date} onChange={(e)=>{setdate(e.target.value); console.log(date)}} type="date" id="date-input" className="block" />
          </section>
          
        </div>
        <div className="bg-slate-300 mt-2  overflow-y-auto min-h-[350px]">
          <Rendertable data={Allpresent} name="present"/>
          </div>
        

          
          
          <div className={`sidebar ${sidebarVisible ? "show" : ""}`} id="sidebar">
          <span className="close-button" onClick={toggleSidebar}>
            ✖
          </span>
          <div className="date-picker">
            <label htmlFor="chosen-date">Choose a Date:</label>
            <input type="date" id="chosen-date" />
          </div>
          </div>
   
        
       
      </>
      )
}