const addBike = (req, res, bike_db) => {
    const { bikeid, model, colour, image, cost } = req.body;
    if( !bikeid || !model || !colour || !image || !cost){
        return res.status(400).json("Invalid entries");
    }

    bike_db.create({
        bikeid:bikeid,
        Model:model,
        colour:colour,
        image:image,
        cost:cost,
        Booked_from:"",
        Booked_to:""
    })
    .then(() => res.status(200).json("Created"))
    .catch((e) => res.status(400).json(e));


}

export default addBike;