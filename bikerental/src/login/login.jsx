import React, { useContext, useState } from 'react';
import { LOGIN_API } from '../api';
import { Context } from '../context';

const Login = ({ onClose, toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedin, setloggedin] = useContext(Context);

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
        if(data.isadmin){
          setloggedin({isLoggedIn:true, isAdmin:true})
          console.log("logged in as admin");
        }else{
          setloggedin({isLoggedIn:true, isAdmin:false})
          console.log("logged in as user");
        }
      })
      .catch(e => console.log("Wrong password"))
      .finally(() => onClose());

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
