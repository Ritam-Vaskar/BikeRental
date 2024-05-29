import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GETBIKE_API } from "../api";

const AdminBooking = () => {
    const [data, setData] = useState([]);
    const [Opened, setOpened] = useState(false);
    const [time ,setTime] = useState({date:"" ,from:"", to:""});

    function getCurrentDate(separator='-'){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let hour = newDate.getHours();
        let min = newDate.getMinutes();

        let combined_date = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        let combined_time = `${hour}:${min}`
        return {date: combined_date , from: combined_time , to: combined_time}
    }

    useEffect(() => {
        fetch(GETBIKE_API, {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({time:getCurrentDate()})
          })
          .then(res => res.json())
          .then(res => {
            setData(res);
        })
    }, []);
        

    function handleChange(e, field){
        let newtime = { ...time };
        newtime[field] = e.target.value
        setTime(newtime);
    }


    const Overlay = (index) => {
        return(
            <div className="overlay">
                <div className="login-container">
                    <div className="form-container">
                        <input type="date" value={time.date} className="btn" onChange={(e) => handleChange(e,"date")} />
                            <div className="time">
                                <input type="time" value={time.from} className="btn" onChange={(e) => handleChange(e,"from")}/>
                                <i
                                className="fa-solid fa-arrow-right fa-2xl"
                                style={{ color: "#e83912" }}
                                />
                                <input type="time" value={time.to} className="btn" onChange={(e) => handleChange(e,"to")}/>
                            </div>
                        <div className="signUpBtn">
                            <button className='btn'>Book</button>
                            <button className='btn' onClick={() => setOpened(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return(
      <>
        <div className="fe-h1">
            <h1 className="Our">Serviceman</h1>
            <h1>Page</h1>
        </div>
        <h3 className="subHead">Existing Bikes:-</h3>
        <div className="box-container">
            {data.map((item, index) => (
            <div className="box" key={item.model}>
                <img src={item.image} width="300px" alt={`Bike: ${item.model}`} />
                <h3>{item.Model}</h3>
                <p>Rs. {item.cost}/- per Hour</p>
                {item.__v
                ? <button className="btn" style={{color: "#111"}} onClick={() => toast.warning("Alredy booked")}>Booked</button> 
                :<button className="btn" onClick={() => setOpened(true)}>Offline Book</button>
                }      
            </div>
            ))}
        </div>
        {Opened? <Overlay /> : <></>}
      </>  
    );

}

export default AdminBooking;