// SignUp.js
import React, { useState } from 'react';

const SignUp = ({onClose,  toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // For demonstration purposes, let's just clear the fields after signing up
    setUsername('');
    setPassword('');
  };

  return (
    <div className="overlay">
      <div className="login-container">
        <div className="form-container">
          <h2>Sign Up</h2>
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
          <button className='btn' onClick={handleSignUp}>Sign Up</button>
          <p>Already have an account? <span className='login-a' onClick={toggleForm}>Login</span></p>
          <button className='btn' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
