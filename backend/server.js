import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

import handleRegister from './controllers/register.js';
import handleSignin from './controllers/signin.js';
import addBike from './controllers/addBike.js';
import handleBooking from './controllers/booking.js';



const port = 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json({limit: "10mb"}));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://sumedh:sumedh@cluster0.fronqdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{dbName:"text"})
.then(() => console.log("connected"))
.catch((e) => console.log(e));


const UserScema = mongoose.Schema({
    email:String,
    phone:Number,
    name:String,
    password:String,
    image:String
})

const BikeScema = mongoose.Schema({
    bikeid:Number,
    Model:String,
    colour:String,
    image:String,
    cost:Number,
    Booked_from:String,
    Booked_to:String
})

const BookingsScema = mongoose.Schema({
    bikeid:Number,
    username:String,
    Booked_from:String,
    Booked_to:String
})

const user = mongoose.model("users",UserScema);
const bike = mongoose.model("bikes",BikeScema);
const bookings = mongoose.model("bookings", BookingsScema);

app.get("/", (req, res) => {res.send("Running")});
app.post("/register", (req, res) => { handleRegister(req, res, user, bcrypt ) });
app.post("/signin", (req,res) => { handleSignin(req, res, user, bcrypt) });
app.post("/book", (req,res) => { handleBooking(req, res, bookings, bike) });
app.post("/addbike", (req,res) => { addBike(req, res, bike) });

app.listen(port, ()=> {
    console.log('app is running on port ',{port});
})
