import React, { useContext, useState } from 'react';
import { LOGIN_API } from '../api';
import { Context } from '../context';
import { toast } from 'react-toastify';

const Login = ({ onClose, toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedin, setloggedin] = useContext(Context);

  const handleLogin = () => {
    if (!username || !password) {
      toast.error("Please fill all data");
    } else {
      toast.promise(
        fetch(LOGIN_API, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: username, password: password })
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then(data => {
          setloggedin({ isLoggedIn: true, isAdmin: data.isadmin, account: { name: data.name, id: data.id } });
          console.log("logged in");
        })
        .finally(() => {
          setPassword('');
          setUsername('');
          onClose();
        }), {
          pending: 'Logging in',
          success: 'LogIn Successful',
          error: 'Invalid username or password'
        }
      );
    }
  };

  const handleLogout = () => {
    setloggedin({ isLoggedIn: false, isAdmin: false, account: {} });
    toast.success("Logged out successfully");
    console.log("logged out");
  };

  return (
    <div className="overlay">
      <div className="login-container">
        <div className="form-container">
          <h2>{loggedin.isLoggedIn ? 'Welcome, ' + loggedin.account.name : 'Login'}</h2>
          {loggedin.isLoggedIn ? (
            <>
              <p>You are logged in as {loggedin.account.name}.</p>
              <button className='btn' onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
