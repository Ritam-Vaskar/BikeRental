import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Service = () => {
  const location = useLocation();
  const time = location.state || {};
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const initialData = [
      { model: "xyz1", cost: 123, img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a065392b6bc6cd6ef57_scooty.png", isBooked: false },
      { model: "xyz2", cost: 123, img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a05cb6df16918640141_bike.png", isBooked: false },
      { model: "xyz3", cost: 123, img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a065392b6bc6cd6ef57_scooty.png", isBooked: false },
      { model: "xyz4", cost: 123, img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a05cb6df16918640141_bike.png", isBooked: true },
      { model: "xyz5", cost: 123, img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a065392b6bc6cd6ef57_scooty.png", isBooked: false }
    ];
    const filteredData = initialData.filter((item) => !item.isBooked);
    setData(filteredData);
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
