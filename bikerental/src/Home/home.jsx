import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

    return(
        <>
        <div id="menu" className="fas fa-bars" />
        {/*home section*/}
        <section className="home" id="home">
            <h3>WELCOME !!</h3>
            <h1>
            BOOK <span>Your Bike</span>
            </h1>
            <div className="row">
            <input type="date" className="btn" />
            <div className="time">
                <input type="time" className="btn" />
                <i
                className="fa-solid fa-arrow-right fa-2xl"
                style={{ color: "#e83912" }}
                />
                <input type="time" className="btn" />
            </div>
            <a href="/BikeRental/service page/service.html" target="_blank">
                <button className="search" href="">
                Search Now !!
                </button>
            </a>
            </div>
        </section>
    </>
    );
}

export default Home;