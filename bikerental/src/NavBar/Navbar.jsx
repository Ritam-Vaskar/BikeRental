import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <header>
            <div className="user">
                <img src={process.env.PUBLIC_URL + "/image/royal-enfield-select-model-rebel-black-1668160539769.jpg"} alt=""/>
                <h3 className="name">BIKIIT</h3>
                <p>Rent Bike As You Like</p>
            </div>
            <NavLink className="navbar">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/contacts'>Contact</Link>
                    </li>
                </ul>
            </NavLink>
        </header>

    );


}

export default NavBar;