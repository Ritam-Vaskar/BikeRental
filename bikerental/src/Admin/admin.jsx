import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {convertToTime,total} from "../Booking/Booking" ;

const Admin = () => {
  const location = useLocation();
  const time = location.state || {};
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const initialData = [
      {
        model: "xyz1",
        cost: 123,
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a065392b6bc6cd6ef57_scooty.png",
        isBooked: false,
        quantity: 0,
      },
      {
        model: "xyz2",
        cost: 123,
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a05cb6df16918640141_bike.png",
        isBooked: false,
        quantity: 0,
      },
      {
        model: "xyz3",
        cost: 123,
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a065392b6bc6cd6ef57_scooty.png",
        isBooked: false,
        quantity: 0,
      },
      {
        model: "xyz4",
        cost: 123,
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a05cb6df16918640141_bike.png",
        isBooked: true,
        quantity: 0,
      },
      {
        model: "xyz5",
        cost: 123,
        img: "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a065392b6bc6cd6ef57_scooty.png",
        isBooked: false,
        quantity: 0,
      },
    ];
    const filteredData = initialData.filter((item) => !item.isBooked);
    setData(filteredData);
  }, []);

  //quantity box

  const incNum = (index) => {
    const newData = [...data];
    newData[index].quantity += 1;
    setData(newData);
  };

  const decNum = (index) => {
    const newData = [...data];
    if (newData[index].quantity > 0) {
      newData[index].quantity -= 1;
    }
    setData(newData);
  };

  function handleClick(model) {
    if (Object.keys(time).length === 0) {
      navigate("/");
    } else {
      navigate("/book", { state: { ...time, model } });
    }
  }

  return (
    <div>
      <div className="fe-h1">
        <h1 className="Our">Serviceman</h1>
        <h1>Page</h1>
      </div>
      <h3 className="subHead">Existing Bikes:-</h3>
      <div className="box-container">
        {data.map((item, index) => (
          <div className="box" key={item.model}>
            <img src={item.img} width="300px" alt={`Bike: ${item.model}`} />
            <h3>{item.model}</h3>
            <p>Rs. {item.cost}/- per Hour</p>
            <div className="quantity">
              <button className="btn" onClick={() => decNum(index)}>-</button>
              <h4>{item.quantity}</h4>
              <button className="btn" onClick={() => incNum(index)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* new bike add section */}

      <h3 className="subHead">Add New Bikes:-</h3>
      <section className="newBike" id="newBike">
          <div className="newBike">
            <div className="info">
              <div className="box-container">
                <div className="box" id="addBike">
                  <img
                    src={
                      "https://uploads-ssl.webflow.com/66465997f6b4de049dc435bf/66465a065392b6bc6cd6ef57_scooty.png"
                    }
                    width="300px"
                  />
                  <div className="book-btn">
                    <input type="file" id="file" />
                    <label htmlFor="file" className="btn">
                      Upload Image <i className="fa-solid fa-upload"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form>
            <input type="text" placeholder="Model Name" className="box" />
            <input type="text" placeholder="Price per hour" className="box" />
            <input type="text" placeholder="Condition" className="box" />

            <button type="submit" className="btn">
              Add Bike <i className="fa-solid fa-plus"></i>
            </button>
          </form>
      </section>

      {/* order recieved section */}
      <section>
      <h3 className="subHead">Recieved Orders:-</h3>
      <div className="content" id="book-cont">
                    <div className="box-container">

                        <div className="box">
                            {/* <img src={data.model.img} height="200px" /> */}
                            
                    
                            <div className="booking-details">
                                <h2>Bike Booking Details</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Order Id</th>
                                            <th>#050</th>
                                        </tr>
                                        <tr>
                                            <td>Booking Date</td>
                                            <td>{data.date}</td>
                                        </tr>
                                        
                                        <tr>
                                            <td>Customer Name</td>
                                            <td>Name from account details</td>
                                        </tr>
                                        <tr>
                                            <td>Customer Number</td>
                                            <td>Number from account details</td>
                                        </tr>
                                        <tr>
                                            <td>Alternative Number</td>
                                            <td>Number from details while booking</td>
                                        </tr>
                                        <tr>
                                            <td>Pickup Time</td>
                                            <td>{data.from}</td>
                                        </tr>
                                        <tr>
                                            <td>Return time</td>
                                            <td>{data.to}</td>
                                        </tr>
                                        <tr>
                                            <td>Instruction</td>
                                            <td>Number from details while booking</td>
                                        </tr>
                                        <tr>
                                            <td>Total Price</td>
                                            <td>Rs. </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    
                            <button className="btn">View License</button>
                        </div>
                    </div>
                </div>
      

      </section>              
    </div>
  );
};

export default Admin;
