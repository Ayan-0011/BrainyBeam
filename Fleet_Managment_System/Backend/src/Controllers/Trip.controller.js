const TripModel = require('../Model/TripModel');
const DriverModel = require('../Model/DriverModel');
const VehicleModel = require('../Model/VehicleModel');


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
                success:false,
                message:"Cargo weight exceeds vehicle capacity."
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


module.exports = { createTrip };