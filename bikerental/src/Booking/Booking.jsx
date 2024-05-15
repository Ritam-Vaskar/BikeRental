import React from "react";
import { Link, useLocation } from "react-router-dom";

const Booking = () => {
    const location = useLocation();
    const data = location.state;

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
        let final_cost = data.cost * (time/60); 
        return Math.ceil(final_cost);
    }

    return(
        <section className="contact" id="contact">
            <h1 className="heading"> <span>booking</span> details</h1>

            <div className="row">
                <div className="content" id="book-cont">
                    <div className="box-container">

                        <div className="box">
                            <img src="/HTML_V1/image/scooty.png" height="200px" />
                            
                    
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
                            <Link to='/service'className="btn"><i class="fa-solid fa-circle-left"></i> Back to Service</Link>
                            <button type="submit" className="btn">Confirm Booking <i className="fa-solid fa-circle-check"></i></button>
                        {/* </div> */}

                        
                    </div>
                </form>
            </div>
        </section>
    );

}

export default Booking;