const FuelModel = require('../Model/FuelModel');
const DriverModel = require('../Model/DriverModel')
const VehicleModel = require('../Model/VehicleModel');
const TripModel = require('../Model/TripModel');

const createFuellog = async (req, res) => {
    try {
        const {
            tripId,
            litersFilled,
            cost,
            odometerReading
        } = req.body;

        if (
            !tripId ||
            !litersFilled ||
            !cost ||
            !odometerReading
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const driver = await DriverModel.findOne({ user: req.user.id });
        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found."
            });
        }

        const trip = await TripModel.findById(tripId);
        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found."
            });
        }

        if (trip.assignedDriver.toString() !== driver._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized."
            });
        }

        if (trip.tripStatus !== "delivered") {
            return res.status(400).json({
                success: false,
                message: "Fuel can only be added after delivery."
            });
        }

        const existingFuel = await FuelModel.findOne({ trip: trip._id });

        if (existingFuel) {
            return res.status(400).json({
                success: false,
                message: "Fuel log already exists for this trip."
            });
        }

        // Create Fuel Log
        const fuel = await FuelModel.create({
            trip: trip._id,
            driver: driver._id,
            vehicle: trip.assignedVehicle,
            litersFilled,
            cost,
            odometerReading
        });

        return res.status(201).json({
            success: true,
            message: "Fuel log created successfully.",
            fuel
        });


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getFuellog = async (req, res) => {
    try {
        const Fuellog = await FuelModel.find().populate({
            path: "driver",
            populate: {
                path: "user",
                select: "name profileImage"
            }
        }).populate({
            path: "vehicle",
            select: "registrationNumber vehicleImage"
        }).populate({
            path: "trip",
            select: "fromLocation toLocation"
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "Fuel log data fetching successfull",
            Fuellog
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getsigleFuellog = async (req, res) => {
    try {

        const { tripId } = req.params;
        //console.log("Trip ID from URL:", tripId);
        const fuelLogs = await FuelModel.find({
            trip: tripId
        })
            .populate({
                path: "driver",
                populate: {
                    path: "user",
                    select: "name"
                }
            })
            .populate({
                path: "vehicle",
                select: "registrationNumber"
            })
            .populate({
                path: "trip",
                select: "fromLocation toLocation"
            });

        //console.log("Fuel Logs:", fuelLogs);

        if (fuelLogs.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No fuel details found for this trip."
            });
        }
        return res.status(200).json({
            success: true,
            message: "Fuel logs fetched successfully.",
            fuelLogs
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { createFuellog, getFuellog, getsigleFuellog };