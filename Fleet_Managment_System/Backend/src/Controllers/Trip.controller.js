const TripModel = require('../Model/TripModel');
const DriverModel = require('../Model/DriverModel');
const VehicleModel = require('../Model/VehicleModel');
const { ConnectionStates } = require('mongoose');


const createTrip = async (req, res) => {

    try {
        const {
            fromLocation,
            toLocation,
            cargoDescription,
            cargoWeight,
            assignedDriver,
            assignedVehicle,
            scheduledDeparture
        } = req.body

        if (
            !fromLocation ||
            !toLocation ||
            !cargoDescription ||
            !cargoWeight ||
            !assignedDriver ||
            !assignedVehicle ||
            !scheduledDeparture
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        //driver cheking 

        const driver = await DriverModel.findById(assignedDriver);

        console.log(driver)
        console.log(assignedDriver)
        if (!driver) {
            return res.status(400).json({
                success: false,
                message: "driver not found"
            })
        }

        if (driver.availability !== 'available') {
            return res.status(400).json({
                success: false,
                message: "Driver is not avilibale"
            })
        }

        //vehicle cheking 
        const vehicle = await VehicleModel.findById(assignedVehicle);
        if (!vehicle) {
            return res.status(400).json({
                success: false,
                message: "vehicle not found"
            })
        }

        if (vehicle.status !== 'Available') {
            return res.status(400).json({
                success: false,
                message: "vehicle is not avilibale"
            })
        }
        if (cargoWeight > vehicle.capacity) {
            return res.status(400).json({
                success: false,
                message: "Cargo weight exceeds vehicle capacity."
            })
        }

        //create trip 

        const trip = await TripModel.create({
            fromLocation,
            toLocation,
            cargoDescription,
            cargoWeight,
            assignedDriver,
            assignedVehicle,
            scheduledDeparture,

            tripStatus: "scheduled",

            statusHistory: [
                {
                    status: "scheduled"
                }
            ]
        });

        driver.availability = "on-trip",
            await driver.save();

        vehicle.status = "in-use"
        await vehicle.save();

        return res.status(201).json({
            success: true,
            message: "Trip create Sucessfullyy",
            data: trip
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}


const getTrips = async (req, res) => {

    try {
        const trip = await TripModel.find().populate({
            path: "assignedDriver",
            populate: {
                path: "user",
                select: "name"
            }
        }).populate({
            path: "assignedVehicle",
            select: "registrationNumber"
        }).sort({ createdAt: -1 });


        const trips = trip.map(trip => ({
            _id: trip._id,
            fromLocation: trip.fromLocation,
            toLocation: trip.toLocation,
            cargoDescription: trip.cargoDescription,
            cargoWeight: trip.cargoWeight,
            scheduledDeparture: trip.scheduledDeparture,
            tripStatus: trip.tripStatus,
            driverName: trip.assignedDriver?.user?.name,
            vehicleNumber: trip.assignedVehicle?.registrationNumber
        }));


        res.status(200).json({
            success: true,
            message: "Fetching Trip Data Sucessfull",
            trips
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


const getSingleTrip = async (req, res) => {
    try {

        const { id } = req.params;
        const trip = await TripModel.findById(id).populate({
            path: "assignedDriver",
            populate: {
                path: "user",
                select: "name"
            }
        }).populate({
            path: "assignedVehicle",
            select: "registrationNumber"
        });

        if (!trip) {
            res.status(400).json({
                sucess: false,
                message: "Trip not Found"
            })
        }

        const Singaletrip = {
            _id: trip._id,
            fromLocation: trip.fromLocation,
            toLocation: trip.toLocation,
            cargoDescription: trip.cargoDescription,
            cargoWeight: trip.cargoWeight,
            scheduledDeparture: trip.scheduledDeparture,
            tripStatus: trip.tripStatus,
            driverName: trip.assignedDriver?.user?.name,
            vehicleNumber: trip.assignedVehicle?.registrationNumber
        };
        res.status(200).json({
            success: true,
            message: "Single Trip Data Load Successfull",
            Singaletrip
        })

    } catch (error) {
        res.status(400).json({
            succcess: false,
            messsage: error.message
        })
    }
}

const myTrips = async (req, res) => {
    try {

        const driver = await DriverModel.findOne({ user: req.user._id });
        //console.log("Driver ID:", driver._id);
        const trips = await TripModel.find({
            assignedDriver: driver._id
        }).populate({
            path: "assignedVehicle",
            select: "registrationNumber"
        });
        // console.log("Trips:", trips);
    } catch (error) {
        res.status(400).json({
            succes: false,
            message: error.message
        })
    }
}

const updateTripStatus = async (req, res) => {
    try {

        const { id } = req.params;
        const { tripStatus } = req.body;
        const trip = await TripModel.findById(id);

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found."
            });
        }

        const driver = await DriverModel.findOne({ user: req.user._id });
        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found."
            });
        }

        if (trip.assignedDriver.toString() !== driver._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this trip."
            });
        }

        const validFlow = {
            "scheduled": "in-transit",
            "in-transit": "delivered",
            "delivered": "closed"
        };

        if (validFlow[trip.tripStatus] !== tripStatus) {
            return res.status(400).json({
                success: false,
                message: "Invalid status transition."
            });
        }

        trip.tripStatus = tripStatus;

        trip.statusHistory.push({
            status: tripStatus
        });

        await trip.save();

        driver.availability = "available";
        await driver.save();

        const vehicle = await VehicleModel.findById(trip.assignedVehicle);
        vehicle.status ="Available";
        await vehicle.save();

        return res.status(200).json({
            success: true,
            message: "Trip status updated successfully.",
            trip
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = { createTrip, getTrips, getSingleTrip, myTrips, updateTripStatus };