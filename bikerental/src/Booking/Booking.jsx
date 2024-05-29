import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context";
import { toast } from "react-toastify";
import { BOOKING_API } from "../api";

const Booking = () => {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    const [loggedin] = useContext(Context);
    const [number, setnumber] = useState(0);

    function convertToTime(str){
        const time = new Date();
        const [hours, minutes] = str.split(':').map(Number);
        time.setHours(hours, minutes,0);
        return time;
    }
    
    function total(){
        let to = convertToTime(data.to);
        let from = convertToTime(data.from);
        let time;
        if(from>to){
            time = from - to;
        } else{
            time = to - from;
        }
        time = Math.round(time/60000);
        let final_cost = data.model.cost * (time/60); 
        return Math.ceil(final_cost);
    }

    function handleSubmit(){
        if(!loggedin.isLoggedIn){
            return toast.warning("Please loggin first");
        }
        toast.promise(
            fetch(BOOKING_API, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({from: data.from, to: data.to, date: data.date, bikeid: data.model._id, username:loggedin.account.name, number: number})}
            )
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(res);
            })
            .finally(() => navigate("/")),{
            pending: 'Booking ...',
            success: 'Successfull Booked',
            error: 'Some error occured'
        })
    }

    return(
        <section className="contact" id="contact">
            <h1 className="heading"> <span>booking</span> details</h1>

            <div className="row">
                <div className="content" id="book-cont">
                    <div className="box-container">

                        <div className="box">
                            <img src={data.model.image} height="150px" />
                            
                    
                            <div className="booking-details">
                                <h2>Bike Booking Details</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Attribute</th>
                                            <th>Value</th>
                                        </tr>
                                        <tr>
                                            <td>Booking Date</td>
                                            <td>{data.date}</td>
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
                                            <td>Total Price</td>
                                            <td>Rs. {total()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    
                            <button className="btn">View T&C</button>
                        </div>
                    </div>
                </div>
                
                <form>
                    <h2>Enter Your Details</h2>
                    {/* <input type="text" placeholder="Name" className="box" />
                    <input type="email" placeholder="Email" className="box" /> */}
                    <input type="tel" placeholder="Mobile No.(if any other)" className="box" />
                    <textarea name="" id="" cols="10" rows="5" className="box" placeholder="Instruction" />

                    <div className="bookPageBtn">
                        {/* <div className="book-btn"> */}
                            <button onClick={() => navigate("/service",{state:{to:data.to, from:data.from, date:data.date}})} className="btn"><i class="fa-solid fa-circle-left"></i> Back to Service</button>
                            <button type="submit" className="btn" onClick={(e) => { e.preventDefault(); handleSubmit() }}>Confirm Booking <i className="fa-solid fa-circle-check"></i></button>
                        {/* </div> */}

                        
                    </div>
                </form>
            </div>
        </section>
    );

}

export default Booking;