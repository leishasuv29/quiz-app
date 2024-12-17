import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const regPressed = async () => {
    try {
      const response = await axios.post(
        'https://dummyapicsi.onrender.com/api/register',
        { username: userName, password: password }
      );
      console.log('Registration successful:', response);
      setMessage(response.data.message);
    } catch (err) {
      console.error('Error Registering user:', err);
      setError('Failed to register. Please try again!');
    }
  };

  return (
    <div>
      <h1>QUIZ APP</h1>
      <div className="Register">
        <div className="username">
          <input
            value={userName}
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="password">
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="rbutton">
        <Link to = "/" >
        <button onClick={regPressed} type="button">
            Register
          </button>
          </Link>
        </div>
        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}
      </div>
    </div>
  );
}

export default Register;
