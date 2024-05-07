import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [data ,setData] = useState({date:"" ,from:"", to:""});

    function handleChange(e, field){
        let newData = { ...data };
        newData[field] = e.target.value
        setData(newData);
    }

    function handleClick(){
        const newData = { ...data }; 
        if (newData.date === "") {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, "0"); 
            const dd = String(today.getDate()).padStart(2, "0");
            newData.date = `${yyyy}-${mm}-${dd}`;
        }
        if (newData.from === "") {
            newData.from = "12:00";
        }
        if (newData.to === "") {
            newData.to = "12:00";
        }
        setData(newData);
        navigate("/service", { state: newData });
    }

    return(
        <section className="home" id="home">
            <h3>WELCOME !!</h3>
            <h1>
            BOOK <span>Your Bike</span>
            </h1>
            <div className="row">
            <input type="date" className="btn" onChange={(e) => handleChange(e,"date")} />
            <div className="time">
                <input type="time" className="btn" onChange={(e) => handleChange(e,"from")}/>
                <i
                className="fa-solid fa-arrow-right fa-2xl"
                style={{ color: "#e83912" }}
                />
                <input type="time" className="btn" onChange={(e) => handleChange(e,"to")}/>
            </div>
            <button className="search" onClick={() => handleClick()}>Search Now !!</button>
            </div>
        </section>
    );
}

export default Home;