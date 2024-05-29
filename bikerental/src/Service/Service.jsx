import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GETBIKE_API } from "../api";

const Service = () => {
  const location = useLocation();
  const time = location.state || {};
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(GETBIKE_API, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({time:time})
    })
    .then(res => res.json())
    .then(res => {
      setData(res);
      console.log(res);
    })
  }, []); 

  function handleClick(model) {
    if(Object.keys(time).length === 0){
      navigate("/");
    } else{
      navigate("/book",{state: { ...time, model} })
    }
  };




  return (
    <div>
      <div className="fe-h1">
        <h1 className="Our">Book</h1>
        <h1>Now</h1>
      </div>
      <div className="box-container">
        {data.map((item,index) => (
            <div className="box" key={index}>
              <img src={item.image} width="300px" alt={`Bike: ${item.model}`} />
              <h3>{item.Model}</h3>
              <p>Rs. {item.cost}/- per Hour</p>
              {item.__v
              ?<button className="btn" style={{color: "#111"}} onClick={() => toast.warning("Alredy booked")}>Booked</button>
              :<button className="btn" onClick={() => handleClick(item)}>Book Now</button>}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
