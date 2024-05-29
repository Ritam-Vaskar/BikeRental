import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/login";
import SignUp from "../login/signup"; // Make sure to import SignUp component if it's used here.
import { Context } from "../context";

const NavBar = ({ clicked }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [loginpage , setloginpage] = useState(true);
  const [loggedin, setloggedin] = useContext(Context);

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
  };

  const handleClose = () => {
    setLoginOpen(false);
  };

  const toggleForm = () => {
    setloginpage(!loginpage);
  };

  return (
    <header>
      <div className="user">
        <img src={process.env.PUBLIC_URL + "/image/royal-enfield-select-model-rebel-black-1668160539769.jpg"} alt=""/>
        <h3 className="name">BIKIIT</h3>
        <p>Rent Bike As You Like</p>
        {!loggedin.isLoggedIn 
        ? <button className="btn" onClick={toggleLogin}><i class="fa-solid fa-user"></i> Login</button>
        : <button className="btn"><i class="fa-solid fa-user"></i>  {loggedin.account.name}</button>}
        {isLoginOpen && ( loginpage ? <Login onClose={handleClose} toggleForm={toggleForm} /> : <SignUp onClose={handleClose} toggleForm={toggleForm} /> )}
      </div>
      <NavLink className="navbar" onClick={clicked}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/service'>Services</Link>
            <Link to='/contacts'>Contact</Link>
            {/* <Link to='/admin'>Admin page</Link> temp link */}
            {loggedin.isAdmin?<Link to='/admin'>Admin page</Link>: <></>}
          </li>
        </ul>
      </NavLink>
    </header>
  );
};

export default NavBar;
