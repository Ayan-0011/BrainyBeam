const VehicleModel = require('../Model/VehicleModel');

const createVehicle = async (req, res) => {
    try {
        const {
            registrationNumber,
            brand,
            type,
            fuelType,
            capacity,
            status,
            insuranceExpiry,
            PermitExpiry,
            serviceDueDate,
            vehicleImage
        } = req.body

        const existingvehicle = await VehicleModel.findOne({ registrationNumber });

        if (existingvehicle) {
            return res.status(400).json({
                message: "vehicle Already exists"
            });
        }

        const vehicle = await VehicleModel.create({
            registrationNumber,
            brand,
            type,
            fuelType,
            capacity,
            status,
            insuranceExpiry,
            PermitExpiry,
            serviceDueDate,
            vehicleImage
        });

        res.status(201).json({
            message: "Vehicle Created successfully",
            vehicle
        })


    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const getVehicle = async (req, res) => {

    const vehicle = await VehicleModel.find();
    res.status(200).json({
        message: "vehicle data Fetching successfully",
        vehicle
    });

}

const updateVehicle = async (req, res) => {

    try {
        const id = req.params.id;

        const vehicle = await VehicleModel.findById(id);

        if (!vehicle) {
            return res.status(404).json({
                message: "Vehicle not found"
            })
        }

        const updatedvehicle = await VehicleModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        res.status(200).json({
            message: "Vehicle Updated Succssfull",
            updatedvehicle
        });


    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const deleteVehicle = async (req, res) => {
    try {

        const id = req.params.id

        const vehicle = await VehicleModel.findById(id);

        if (!vehicle) {
            res.status(404).json({
                message: "Vehicle not found"
            });
        }

        await VehicleModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Vehicle Deleted successfull"
        })

    } catch (error) {
        res.status(500).json({
            mesaage: error.message
        })
    }
}


module.exports = { createVehicle, getVehicle, updateVehicle, deleteVehicle }