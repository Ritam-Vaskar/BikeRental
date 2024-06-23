const handleBooking = async (req, res, booking_db, bike_db) => {
    const { from, to, date, bikeid, username, number, instructions, totalPrice } = req.body;
    if (!from || !to || !date || !bikeid || !username || !number || !totalPrice) {
        return res.status(400).json("Invalid entries");
    }

    let result = await bike_db.updateOne({ _id: bikeid }, { $set: { from: from, to: to, date: date } });
    if (result.matchedCount == 0) {
        return res.status(400).json("Bikeid not found");
    }

    booking_db.create({
        bikeid: bikeid,
        username: username,
        mobile: number,
        from: from,
        to: to,
        date: date,
        instructions: instructions,
        totalPrice: totalPrice
    })
    .then(() => res.status(200).json("Booked"))
    .catch(async (e) => {
        await bike_db.updateOne({ _id: bikeid }, { $set: { from: "", to: "", date: "" } });
        res.status(400).json(e);
    });
}

export default handleBooking;
