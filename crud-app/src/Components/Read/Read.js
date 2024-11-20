import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Read = () => {
  const [Data, setData]= useState([]);
  
  function getData() 
  {
    axios.get('https://673df2580118dbfe86097ea0.mockapi.io/crud-app/crud-app')
    .then(response =>{
      console.log(response.data);
      setData(response.data);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  const setLocalStorage = (Id, Name, Email) =>
    {
      localStorage.setItem("Id",Id);
      localStorage.setItem("Name",Name);
      localStorage.setItem("Email",Email);
    }

  function handleDelete(id){
    axios.delete(`https://673df2580118dbfe86097ea0.mockapi.io/crud-app/crud-app/${id}`)
    .then(()=>{
      getData();
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>
  {
    getData();
  },[Data])
  
  return (
    <>
    <div className='d-flex justify-content-center bg-danger text-white p-3'>
    <h2>Read - CRUD Page</h2>
    </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {Data.map((eachData)=>{
          return(
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to='/update'>
                    <button className='btn btn-success' onClick={()=>setLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>handleDelete(eachData.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          )
        })}
      </table> 
      <div className='logout-button align-self-end m-5'>
        <Link to='/'><button className='btn btn-dark'>LogOut</button></Link>
      </div>
    </>
  )
}

export default Read
