import React, { useEffect, useState } from 'react';
import '../Form/Form.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Update = () => 
{
  const[Id, setId] = useState(0);
  const [Name , setName] = useState('');
  const [Email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
  },[])

  const isValidEmail = (email)=> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUpdate  = (e) =>{
    e.preventDefault();

    if (!isValidEmail(Email)) {
      alert("Please enter a valid email address!");
      return;
    } 

    if (Name === "" || Email ==="")
    {
      alert("Please fill the required fields");
      return;
    }

    axios.put(`https://673df2580118dbfe86097ea0.mockapi.io/crud-app/crud-app/${Id}`,{
        name : Name,
        email : Email
    })
    .then(()=>{
        navigate('/read');
    })
    console.log("Id....", Id);
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Update - Crud Page</h1>
        <div className="form-group">
          <label>Username</label>
          <input
            type= "text"
            name="text"
            value={Name}
            placeholder="Enter your UserName"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={Email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button onClick={handleUpdate}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
