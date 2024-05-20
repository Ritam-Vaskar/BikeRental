import React, { useState } from 'react';
import { LOGIN_API } from '../api';

const Login = ({ onClose, toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      console.log("fill all details");
    }else {
      fetch(LOGIN_API , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: username, password: password})
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(data => {
        if(data == "Done"){
          console.log("logged in");
        }
      })
      .catch(e => console.log("Wrong password"));

      setUsername('');
      setPassword('');
    }

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