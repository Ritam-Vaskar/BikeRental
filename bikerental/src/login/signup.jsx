// SignUp.js
import React, { useState } from 'react';
import { REGISTER_API } from '../api';
import { toast } from 'react-toastify';
import { handleUploadImage } from '../fuction';

const SignUp = ({onClose,  toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [image, setImage] = useState('');

  const handleSignUp = () => {
    if (!email || !mobile || !username || !password || !image) {
      toast.error("Please fill all data");
    } else{
      toast.promise(
      fetch(REGISTER_API , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:email , phone: mobile, name: username, dl: image,  password: password})
      })
      .finally(() => {
        setUsername("");
        setPassword("");
        setImage("");
        setEmail("");
        setMobile("");
        onClose();
      }),{
        pending: 'Siging in ',
        success: 'Succesfull please log in',
        error: 'Some error occured'
      })
    }
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
          <input type="file" id="file" onChange={(e) => handleUploadImage(e).then(res => setImage(res))} />
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
