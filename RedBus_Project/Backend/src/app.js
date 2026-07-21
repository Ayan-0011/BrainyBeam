const express = require('express');
const connectDB = require('./db/db');
const busModel = require('./Model/budModel');
const trainModel = require('./Model/TrainModel');
const bookingModel = require('./Model/bookingModel');
const cors = require('cors');


const app = express()
connectDB()
app.use(express.json(),cors())


app.post("/create-bus", async (req, res) => {

    const data = req.body;
    const bus = await busModel.create(data);

    res.status(201).json({
        message: "Bus Created successfully..",
        bus
    });

});

app.get("/bus", async (req, res) => {

    const bus = await busModel.find();
    res.status(200).json({
        message: "bus data fetching successfully...",
        bus
    })
})

app.get("/bus/:id", async (req, res) => {
    const bus = await busModel.findById(req.params.id);

    res.json({
        success: true,
        bus,
    });
});


app.get("/search-bus", async (req, res) => {

    try {
        const { source, destination } = req.query;
        const buses = await busModel.find({
            from: { $regex: source, $options: "i" },
            to: { $regex: destination, $options: "i" }
        });

        res.status(200).json({
            buses
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }

});

app.post("/booking", async (req, res) => {
    
        const booking = await bookingModel.create(req.body);

        res.status(201).json({
            message: "Booking Created Successfully",
            booking
        });
});

app.get('/my-booking', async(req, res)=>{

    const booking = await bookingModel.find();
    res.status(200).json({
        message:"Booking data fetching sucessfully...",
        booking
    })
})


// app.post('/create-train', async (req, res) => {
//     const data = req.body

//     const train = await trainModel.create(data)
//     res.status(201).json({
//         messgae: "Train create successfully...",
//         train
//     })
// })



module.exports = app