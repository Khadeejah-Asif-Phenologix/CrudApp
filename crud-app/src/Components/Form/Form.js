import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [Name , setName] = useState('');
  const [Email, setEmail] = useState('');

  const header = {"Access-Control-Allow-Origin":"*"};
  const history = useNavigate();

  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log('clicked');

      if (Name === "" || Email ==="")
      {
        alert("Please fill the required fields");
        return;
      }

      axios.post('https://673df2580118dbfe86097ea0.mockapi.io/crud-app/crud-app',{
          name : Name,
          email: Email,
          header
      })
      .then(()=>{
        history("/read");
      })
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Create - Crud Page</h1>
        <div className="form-group">
          <label>Username</label>
          <input
            type= "text"
            name="text"
            required
            placeholder="Enter your UserName"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button onClick={handleSubmit}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
