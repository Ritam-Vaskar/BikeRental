// SignUp.js
import React, { useState } from 'react';

const SignUp = ({onClose,  toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Mobile:', mobile);
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
            <label>Email:</label>
            <input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label>Mobile:</label>
            <input 
              type="text" 
              value={mobile} 
              onChange={(e) => setMobile(e.target.value)} 
            />
          </div>
          <div>
            <label>Your Name:</label>
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
          <div className="book-btn">
          <input type="file" id="file" />
          <label htmlFor="file" className="btn">Upload License <i className="fa-solid fa-upload"></i></label>
          </div>
          <button className='btn' onClick={handleSignUp}>Sign Up</button>
          <button className='btn' onClick={onClose}>Close</button>
          </div>
          
          <p>Already have an account? <span className='login-a' onClick={toggleForm}>Login</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
