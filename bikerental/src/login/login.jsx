import React, { useState } from 'react';
import SignUp from "./signup";

const Login = ({ onClose, toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic
    console.log('Username:', username);
    console.log('Password:', password);
    // For demonstration purposes, let's just clear the fields after logging in
    setUsername('');
    setPassword('');
  };

  return (
    <div className="overlay">
      <div className="login-container">
        <div className="form-container">
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div className="signUpBtn">
          <button className='btn' onClick={handleLogin}>Login</button>
          <button className='btn' onClick={onClose}>Close</button>
          </div>
          <p>Don't have an account? <a className='login-a' onClick={toggleForm}>Sign up</a></p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
