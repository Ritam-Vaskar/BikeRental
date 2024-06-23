import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ADDBIKE_API, GET_BOOKINGS_API } from "../api"; 
import { handleUploadImage } from "../fuction";
import AdminBooking from "./adminbooking";
import { Context } from "../context";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [image, setImage] = useState("");
  const [model, setModel] = useState("");
  const [cost, setCost] = useState("");
  const [loggedin, setloggedin] = useContext(Context);

  useEffect(() => {
    fetch(GET_BOOKINGS_API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch bookings");
      })
      .then((data) => setBookings(data))
      .catch((err) => toast.error(err.message));
  }, []);

  const handleSubmit = () => {
    if (!model || !image || !cost) {
      return toast.error("Fill all details");
    }
    toast.promise(
      fetch(ADDBIKE_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model: model, image: image, cost: cost }),
      }).finally(() => {
        setImage("");
        setCost("");
        setModel("");
      }),
      {
        pending: "Adding bike",
        success: "Successfully added",
        error: "Some error occurred",
      }
    );
  };

  if (!loggedin.isAdmin) {
    return <div style={{ padding: "30px" }}>You are not an admin</div>;
  } else {
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
                  <img src={image} width="300px" />
                  <div className="book-btn">
                    <input
                      type="file"
                      id="file"
                      onChange={(e) =>
                        handleUploadImage(e).then((res_image) =>
                          setImage(res_image)
                        )
                      }
                    />
                    <label htmlFor="file" className="btn">
                      Upload Image <i className="fa-solid fa-upload"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form>
            <input
              type="text"
              placeholder="Model Name"
              className="box"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              type="text"
              placeholder="Price per hour"
              className="box"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />

            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Add Bike <i className="fa-solid fa-plus"></i>
            </button>
          </form>
        </section>

        {/* order received section */}
        <section>
          <h3 className="subHead">Received Orders:-</h3>
          <div className="content" id="book-cont">
            <div className="box-container">
              {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <div key={index} className="box">
                    <div className="booking-details">
                      <h2>Bike Booking Details</h2>
                      <table>
                        <tbody>
                          <tr>
                            <th>Order Id</th>
                            <td>{booking._id}</td>
                          </tr>
                          <tr>
                            <td>Booking Date</td>
                            <td>{booking.date}</td>
                          </tr>
                          <tr>
                            <td>Customer Name</td>
                            <td>{booking.username}</td>
                          </tr>
                          <tr>
                            <td>Customer Number</td>
                            <td>{booking.mobile}</td>
                          </tr>
                          <tr>
                            <td>Alternative Number</td>
                            <td>{booking.altNumber}</td>
                          </tr>
                          <tr>
                            <td>Pickup Time</td>
                            <td>{booking.from}</td>
                          </tr>
                          <tr>
                            <td>Return Time</td>
                            <td>{booking.to}</td>
                          </tr>
                          <tr>
                            <td>Instruction</td>
                            <td>{booking.instructions}</td>
                          </tr>
                          <tr>
                            <td>Total Price</td>
                            <td>Rs. {booking.totalPrice}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn">View License</button>
                  </div>
                ))
              ) : (
                <p>No bookings received.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Admin;
