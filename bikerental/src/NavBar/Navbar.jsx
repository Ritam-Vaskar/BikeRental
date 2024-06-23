import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/login";
import SignUp from "../login/signup";
import { Context } from "../context";
import { toast } from "react-toastify";

const NavBar = ({ clicked }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [loggedin, setloggedin] = useContext(Context);

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
  };

  const handleClose = () => {
    setLoginOpen(false);
  };

  const toggleForm = () => {
    setLoginPage(!loginPage);
  };

  const handleLogout = () => {
    setloggedin({ isLoggedIn: false, isAdmin: false, account: {} });
    toast.success("Logged out successfully");
    console.log("logged out");
  };

  return (
    <header>
      <div className="user">
        <img src={process.env.PUBLIC_URL + "/image/royal-enfield-select-model-rebel-black-1668160539769.jpg"} alt=""/>
        <h3 className="name">BIKIIT</h3>
        <p>Rent Bike As You Like</p>
        {!loggedin.isLoggedIn 
          ? <button className="btn" onClick={toggleLogin}><i className="fa-solid fa-user"></i> Login</button>
          : (
            <>
              <button className="btn"><i className="fa-solid fa-user"></i> {loggedin.account.name}</button>
              <button className="btn" onClick={handleLogout}><i className="fa-solid fa-sign-out-alt"></i> Logout</button>
            </>
          )
        }
        {isLoginOpen && (loginPage ? <Login onClose={handleClose} toggleForm={toggleForm} /> : <SignUp onClose={handleClose} toggleForm={toggleForm} />)}
      </div>
      <NavLink className="navbar" onClick={clicked}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/service'>Services</Link>
            <Link to='/contacts'>Contact</Link>
            {loggedin.isAdmin ? <Link to='/admin'>Admin page</Link> : null}
          </li>
        </ul>
      </NavLink>
    </header>
  );
};

export default NavBar;
