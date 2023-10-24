import React, { useState } from "react";
import "../cssfile/myclass.css"
import { Modal, Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";




  
export default function Myclass(){
   
    const [data,setdata]=useState([{id:1,batch:"A1",course:"cse",strength:2},{id:2,batch:"A2",course:"cse",strength:2}]);
    console.log("data:", data);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClass, setNewClass] = useState({
    batch: "",
    course: "",
    strength: 0,
  });

  const directpage = () => {

  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass({
      ...newClass,
      [name]: name === "strength" ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setdata([...data, { ...newClass }]);
    closeModal();
  };
  const deleteclass=(id)=>{
    console.log("Delete row with ID:", id); 
    const updatedData = data.filter((row) => row.id !== id);
    setdata(updatedData);

  }
    
    return (
        <>
  <div className=" navbar rounded-none flex flex-row space-x-20 justify-center mx-auto">
          <a className="text-xl font-normal hover:text-purple-500" href="/home">
            Home
          </a>
          <a className="text-xl font-normal hover:text-purple-500" href="/myclass">
            myClass
          </a>
          <a className="text-xl font-normal hover:text-purple-500" href="/about">
            About
          </a>
          <a className="text-xl font-normal hover:text-purple-500" href="/result">
            Myresult
          </a>
          </div>
  <div className="container w-fit ">
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
        {(data).map((row) => {
         
          return(
          <tr key={row.id} >
          <td>{row.batch}</td>
          <td>{row.course}</td>
          <td>{row.strength}</td>
          <td className="flex h-full  flex-row space-x-0  items-center">
            
          <Link className="flex w-full" to={`/upload?course=${row.course}&batch=${row.batch}&strength=${row.strength}`}><button onClick={directpage}  className="w-32  add-details hover:bg-blue-200">Add Photos</button></Link>
        
          <span  className="text-black text-xl hover:font-bold hover:cursor-pointer" onClick={()=>deleteclass(row.id)}>
          ✖
          </span>
          </td>
          </tr>)

        })}
        
        
      </tbody>
    </table>
  </div>
  {/* <button className="add-class-button">
    Add Class<span className="plus-sign">+</span>
  </button> */}
  <button className="add-class-button" onClick={openModal}>
        Add Class<span className="plus-sign">+</span>
      </button>
      {/* Modal for adding a new class */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h2
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Add Class
                  </h2>
                  <div className="mt-2">
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="batch"
                      >
                        Batch
                      </label>
                      <input
                        type="text"
                        name="batch"
                        id="batch"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={newClass.batch}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="course"
                      >
                        Course
                      </label>
                      <input
                        type="text"
                        name="course"
                        id="course"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={newClass.course}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="strength"
                      >
                        Strength
                      </label>
                      <input
                        type="number"
                        name="strength"
                        id="strength"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={newClass.strength}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    
   </>

    );
}