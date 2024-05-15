import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/login";
import SignUp from "../login/signup"; // Make sure to import SignUp component if it's used here.

const NavBar = ({ clicked }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [login , setlogin] = useState(true);

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
  };

  const handleClose = () => {
    setLoginOpen(false);
  };

  const toggleForm = () => {
    setlogin(!login);
  };

  return (
    <header>
      <div className="user">
        <img src={process.env.PUBLIC_URL + "/image/royal-enfield-select-model-rebel-black-1668160539769.jpg"} alt=""/>
        <h3 className="name">BIKIIT</h3>
        <p>Rent Bike As You Like</p>
        <button className="btn" onClick={toggleLogin}><i class="fa-solid fa-user"></i>   Login</button>
        {isLoginOpen && ( login ? <Login onClose={handleClose} toggleForm={toggleForm} /> : <SignUp onClose={handleClose} toggleForm={toggleForm} /> )} {/* Correct conditional rendering */}
      </div>
      <NavLink className="navbar" onClick={clicked}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/service'>Services</Link>
            <Link to='/contacts'>Contact</Link>
          </li>
        </ul>
      </NavLink>
    </header>
  );
};

export default NavBar;
