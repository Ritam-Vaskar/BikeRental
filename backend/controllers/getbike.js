const handlegetbike = async (req, res, bike, booking) => {
    const { time } = req.body
    if(!time){
        return res.status(400).json("time not provided");
    }
    const result = await bike.aggregate([
        {
          '$lookup': {
            'from': 'bookings', 
            'localField': '_id', 
            'foreignField': 'bikeid', 
            'as': 'booking'
          }
        }, {
          '$unwind': {
            'path': '$booking', 
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$match': {
            '$and': [
              {
                'booking.date': {
                  '$eq': time.date
                }
              }, {
                '$or': [
                  {
                    '$and': [
                      {
                        'booking.from': {
                          '$gte': time.from
                        }
                      }, {
                        'booking.to': {
                          '$lt': time.to
                        }
                      }
                    ]
                  }, {
                    '$and': [
                      {
                        'booking.from': {
                          '$lte': time.from
                        }
                      }, {
                        'booking.from': {
                          '$lt': time.to
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
    ]).exec()

    const booked = []
    result.map((item) => {
        booked.push(String(item._id))
    })

    let remaning_bikes = await bike.find().exec()
    const modifiedBikes =  await remaning_bikes.map(v => {
        v.__v = booked.includes(String(v._id));
        return v;
    });   

    res.status(200).json(modifiedBikes);
}

export default handlegetbike;