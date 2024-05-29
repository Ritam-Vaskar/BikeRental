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
import { ObjectId } from 'mongodb';



const port = 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json({limit: "1mb"}));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://22051037:sumedh@cluster0.ljhqyzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("connected"))
.catch((e) => console.log(e));


const UserScema = mongoose.Schema({
    email:String,
    phone:Number,
    name:String,
    password:String,
    image:String,
    isadmin:Boolean
})

const BikeScema = mongoose.Schema({
    Model:String,
    image:String,
    cost:Number,
})

const BookingsScema = mongoose.Schema({
    bikeid:ObjectId,
    username:String,
    mobile:Number,
    from:String,
    to:String,
    date:String
})

const user = mongoose.model("users",UserScema);
const bike = mongoose.model("bikes",BikeScema);
const bookings = mongoose.model("bookings", BookingsScema);

app.get("/", (req, res) => {res.send("Running")});
app.post("/register", (req, res) => { handleRegister(req, res, user, bcrypt ) });
app.post("/signin", (req,res) => { handleSignin(req, res, user, bcrypt) });
app.post("/book", (req,res) => { handleBooking(req, res, bookings, bike) });
app.post("/addbike", (req,res) => { addBike(req, res, bike) });
app.post("/getbike", (req,res) => { handlegetbike(req, res, bike, bookings) })

app.listen(port, ()=> {
    console.log('app is running on port ',{port});
})
