import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Service = () => {
  const location = useLocation();
  const time = location.state || {};
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const initialData = [
      { model: "xyz1", cost: 123, img: "/bikerental/public/image/bike.png" },
      { model: "xyz2", cost: 123, img: "/bikerental/public/image/bike.png" },
      { model: "xyz3", cost: 123, img: "/bikerental/public/image/bike.png" },
      { model: "xyz4", cost: 123, img: "/bikerental/public/image/bike.png" },
      { model: "xyz5", cost: 123, img: "/bikerental/public/image/bike.png" }
    ];
    setData(initialData);
  }, []); 

  function handleClick(cost) {
    if(Object.keys(time).length == 0){
      navigate("/");
    } else{
      navigate("/book",{state: { ...time, cost} })
    }
  };




  return (
    <div>
      <div className="fe-h1">
        <h1 className="Our">Book</h1>
        <h1>Now</h1>
      </div>
      <div className="box-container">
        {data.map((item) => (
          <div className="box" key={item.model}>
            <img src={item.img} width="300px" alt={`Bike: ${item.model}`} />
            <h3>{item.model}</h3>
            <p>Rs. {item.cost}/- per Hour</p>
            <button className="btn" onClick={() => handleClick(item.cost)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
