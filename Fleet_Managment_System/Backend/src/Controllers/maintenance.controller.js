const MaintenanceModel = require('../Model/MaintenanceModel');
const VehicleModel = require('../Model/VehicleModel');


const createMaintenance = async (req, res) => {
    // console.log("Current User:", req.user);
    // console.log("Current User ID:", req.user._id);
    try {
        const { vehicle, serviceDate, serviceType, cost, nextServiceDueDate } = req.body;

        if (!vehicle || !serviceDate || !serviceType || !cost || !nextServiceDueDate) {
            res.status(400).json({ message: "All field is require" });
        }

        const Vehicle = await VehicleModel.findById(vehicle);

        if (!Vehicle) {
            res.status(400).json({ message: "Vehicle is not found" });
        }

        const Maintenance = await MaintenanceModel.create({
            vehicle,
            serviceDate,
            serviceType,
            cost,
            nextServiceDueDate,
            loggedBy: req.user._id
        });

        vehicle.serviceDueDate = nextServiceDueDate ;
        Vehicle.status = "Available";
        
        await Vehicle.save();
        console.log(Vehicle);

        res.status(201).json({
            succces: true,
            message: "Add Maintenance Record Successfull...",
            Maintenance
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getMaintenance = async (req, res) => {
    try {
        const maintenance = await MaintenanceModel.find();

        if (!maintenance) {
            res.status(400).json({
                success: false,
                message: "Maintenance Record not Found"
            })
        }

        res.status(200).json({ success: true, message: "Maintenance Record load successfull", maintenance })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSingleMaintenance = async (req, res) => {
    try {
        const { id } = req.params;
        const maintenance = await MaintenanceModel.findById(id);

        if (!maintenance) {
            res.status(400).json({
                success: false,
                message: "Maintenance Record not availibale"
            })
        }

        res.status(200).json({
            success: true,
            message: "Single Maintenace Record loaded successfull",
            maintenance
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createMaintenance, getMaintenance, getSingleMaintenance };


