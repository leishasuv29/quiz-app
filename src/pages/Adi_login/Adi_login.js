import React from "react";
import "./Adi.css";
import { Link } from 'react-router-dom';

function Adi_Login() {
  return (
    <>
      <div className="main">
        {/* Header Section */}
        <div className="header">
          <div>Aptitude Portal</div>
          <Link to="/stu_login"><button>Student login</button></Link>
        </div>

        {/* Main Content */}
        <div className="container">
          <div className="login-container">
            <h2>Admin Login</h2>
            <form action="#">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adi_Login;