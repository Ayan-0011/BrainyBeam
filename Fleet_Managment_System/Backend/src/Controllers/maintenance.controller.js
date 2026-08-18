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

        Vehicle.status = "Under-Maintenance";
        await Vehicle.save();

        res.status(201).json({
            succces: true,
            message: "Maintenance Logged Successfull...",
            Maintenance
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createMaintenance };


