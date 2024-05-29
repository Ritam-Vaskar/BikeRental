import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ADDBIKE_API } from "../api";
import { handleUploadImage } from "../fuction";
import AdminBooking from "./adminbooking";
import { Context } from "../context";

const Admin = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [model, setModel] = useState("");
  const [cost, setCost] = useState("");
  const [loggedin, setloggedin] = useContext(Context);


  const handleSubmit = () => {
    if(!model || !image || !cost){
      return toast.error("Fill all details");
    }
    toast.promise(
      fetch(ADDBIKE_API , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({model:model, image:image, cost: cost})
      })
      .finally(() => {
        setImage("");
        setCost("");
        setModel("");
      }),{
        pending: 'Adding bike ',
        success: 'Succesfuly added',
        error: 'Some error occured'
      }
    )
  }

  if(!loggedin.isAdmin){
    return(
      <div style={{padding: "30px"}}> you are not admin </div>
    );
  }else{
    return (
      <div>
        <AdminBooking />
        
        {/* new bike add section */}
  
        <h3 className="subHead">Add New Bikes:-</h3>
        <section className="newBike" id="newBike">
            <div className="newBike">
              <div className="info">
                <div className="box-container">
                  <div className="box" id="addBike">
                    <img
                      src={image}
                      width="300px"
                    />
                    <div className="book-btn">
                      <input type="file" id="file" onChange={(e) => handleUploadImage(e).then(res_image => setImage(res_image))} />
                      <label htmlFor="file" className="btn">
                        Upload Image <i className="fa-solid fa-upload"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <form>
              <input type="text" placeholder="Model Name" className="box" value={model} onChange={(e) => setModel(e.target.value)}/>
              <input type="text" placeholder="Price per hour" className="box" value={cost} onChange={e => setCost(e.target.value)}/>
  
              <button className="btn" onClick={e => {e.preventDefault(); handleSubmit();}}>
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
  }
};

export default Admin;
