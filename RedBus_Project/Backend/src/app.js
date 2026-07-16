const express = require('express');
const connectDB = require('./db/db');
const busModel = require('./Model/budModel');
const trainModel = require('./Model/TrainModel');
const cors = require('cors');


const app = express()
connectDB()
app.use(express.json(),cors())


app.post("/create-bus", async (req, res) => {

    const data = req.body;

    const seats = [];

    for (let i = 1; i <= data.totalSeats; i++) {

        seats.push({
            seatNumber: `S${i}`,
            status: "available"
        });

    }

    data.seatLayout = seats;

    const bus = await busModel.create(data);

    res.status(201).json({
        message: "Bus Created",
        bus
    });

});

app.get("/bus", async(req, res)=>{

     const bus = await busModel.find();
     res.status(200).json({
        message:"bus data fetching successfully...",
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


app.post('/create-train', async(req, res)=>{
     const data = req.body

     const train = await trainModel.create(data)
     res.status(201).json({
        messgae:"Train create successfully...",
        train
     })
})










module.exports = app