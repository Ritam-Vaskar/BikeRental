import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context";
import { toast } from "react-toastify";
import { BOOKING_API } from "../api";

const Booking = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const [loggedin] = useContext(Context);
  const [altNumber, setAltNumber] = useState("");
  const [instructions, setInstructions] = useState("");

  function convertToTime(str) {
    const time = new Date();
    const [hours, minutes] = str.split(':').map(Number);
    time.setHours(hours, minutes, 0);
    return time;
  }

  function total() {
    let to = convertToTime(data.to);
    let from = convertToTime(data.from);
    let time;
    if (from > to) {
      time = from - to;
    } else {
      time = to - from;
    }
    time = Math.round(time / 60000);
    let final_cost = data.model.cost * (time / 60);
    return Math.ceil(final_cost);
  }

  function handleSubmit() {
    if (!loggedin.isLoggedIn) {
      return toast.warning("Please log in first");
    }
    if (!altNumber) {
      return toast.error("Please enter an alternative number");
    }
    toast.promise(
      fetch(BOOKING_API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: data.from,
          to: data.to,
          date: data.date,
          bikeid: data.model._id,
          username: loggedin.account.name,
          number: altNumber,
          instructions: instructions,
          totalPrice: total()
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(() => navigate("/"))
      .catch(err => toast.error("Some error occurred")),
      {
        pending: 'Booking ...',
        success: 'Successfully Booked',
        error: 'Some error occurred'
      }
    );
  }

  return (
    <section className="contact" id="contact">
      <h1 className="heading"><span>Booking</span> details</h1>

      <div className="row">
        <div className="content" id="book-cont">
          <div className="box-container">
            <div className="box">
              <img src={data.model.image} height="150px" alt="Bike" />

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
          <input
            type="tel"
            placeholder="Mobile No.(if any other)"
            className="box"
            value={altNumber}
            onChange={(e) => setAltNumber(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            className="box"
            placeholder="Instruction"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />

          <div className="bookPageBtn">
            <button
              onClick={() => navigate("/service", { state: { to: data.to, from: data.from, date: data.date } })}
              className="btn"
            >
              <i className="fa-solid fa-circle-left"></i> Back to Service
            </button>
            <button
              type="submit"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Confirm Booking <i className="fa-solid fa-circle-check"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Booking;
