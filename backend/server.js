import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

import handleRegister from './controllers/register.js';
import handleSignin from './controllers/signin.js';
import addBike from './controllers/addBike.js';
import handleBooking from './controllers/booking.js';
import handlegetbike from './controllers/getbike.js';

const port = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "1mb" }));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://22051037:sumedh@cluster0.ljhqyzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.log("MongoDB connection error: ", e));

const UserSchema = mongoose.Schema({
    email: String,
    phone: Number,
    name: String,
    password: String,
    image: String,
    isadmin: Boolean
});

const BikeSchema = mongoose.Schema({
    model: String,
    image: String,
    cost: Number
});

const BookingsSchema = mongoose.Schema({
    bikeid: mongoose.Schema.Types.ObjectId,
    username: String,
    mobile: Number,
    from: String,
    to: String,
    date: String,
    instructions: String,
    totalPrice: Number
});

const User = mongoose.model("users", UserSchema);
const Bike = mongoose.model("bikes", BikeSchema);
const Booking = mongoose.model("bookings", BookingsSchema);

app.get("/", (req, res) => {
    res.send("Running");
});

app.post("/register", (req, res) => {
    handleRegister(req, res, User, bcrypt);
});

app.post("/signin", (req, res) => {
    handleSignin(req, res, User, bcrypt);
});

app.post("/book", (req, res) => {
    handleBooking(req, res, Booking, Bike);
});

app.post("/addbike", (req, res) => {
    addBike(req, res, Bike);
});

app.post("/getbike", (req, res) => {
    handlegetbike(req, res, Bike, Booking);
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
