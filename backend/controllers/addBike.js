const addBike = (req, res, bike_db) => {
    const { model, image, cost } = req.body;
    if(!model || !image || !cost){
        return res.status(400).json("Invalid entries");
    }

    bike_db.create({
        Model:model,
        image:image,
        cost:cost,
        from:"",
        to:"",
        date:""
    })
    .then(() => res.status(200).json("Created"))
    .catch((e) => res.status(400).json(e));


}

export default addBike;