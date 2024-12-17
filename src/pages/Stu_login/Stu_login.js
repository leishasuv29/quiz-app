import React, { useState } from 'react';
import "./Stu.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Stu_login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const logPressed = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(
        'https://dummyapicsi.onrender.com/api/questions',
        { email, password }
      );

      console.log('Login successful:', response);
      if (response.data.message) {
        navigate("/quiz"); 
      }
      setMessage(response.data.message);
    } catch (err) {
      console.error('Login error', err);
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="main">
      <div className="header">
        <div>Aptitude Portal</div>
        <button onClick={() => navigate("/adi_login")}>Admin login</button>
      </div>

      <div className="container">
        <div className="login-container">
          <h2>Student Login</h2>
          <form onSubmit={logPressed}>
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="submit" 
              className="login-btn"
              onClick={logPressed} 
            >
              Login
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Stu_login;
