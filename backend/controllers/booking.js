const handleBooking = async (req, res, booking_db, bike_db) => {
    const { from, to, bikeid, username } = req.body
    if(!from || !to || !bikeid || !username){
        return res.status(400).json("Invalid entries");
    }

    let result = await bike_db.updateOne({bikeid:bikeid}, {$set: {Booked_from: from,Booked_to: to}})
    if(result.modifiedCount == 0){
        return res.status(400).json("Some error occured");
    }

    booking_db.create({
        bikeid:bikeid,
        userid:username,
        Booked_from:from,
        Booked_to:to
    })
    .then(() => res.status(200).json("Booked"))
    .catch((e) => res.status(400).json(e));

}

export default handleBooking; 