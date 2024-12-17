import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import image from "./image.png";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const logPressed = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://dummyapicsi.onrender.com/api/login",
        { email: email, password: password }
      );
      if (response.data.message) navigate("/quiz");
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="main">
   
      <div className="left-section">
        <h1>
          Aptitude <br /> Portal
        </h1>
        <p>Turn your exams into success stories</p>
        <div className="login-box">
          <label>Student Login :</label>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <button className="login-btn" onClick={logPressed}>
            Login
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>

   
      <div className="right-section">
        <img src={image} alt="Illustration" />
      </div>
    </div>
  );
}

export default Home;
