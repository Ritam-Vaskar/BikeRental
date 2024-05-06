import React, { useEffect, useState } from "react";

const Service = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const initialData = [
      { model: "xyz", cost: 123, img: "/bikerental/public/image/bike.png" },
      { model: "xyz", cost: 123, img: "/bikerental/public/image/bike.png" },
      { model: "xyz", cost: 123, img: "/bikerental/public/image/bike.png" },
      { model: "xyz", cost: 123, img: "/bikerental/public/image/bike.png" },
      { model: "xyz", cost: 123, img: "/bikerental/public/image/bike.png" }
    ];
    setData(initialData);
  }, []); 

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
            <a href="/HTML_V1/bookdetails/book.html">
              <button className="btn">Book Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
