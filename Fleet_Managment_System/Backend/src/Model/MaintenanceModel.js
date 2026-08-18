const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema(
    {
        vehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true
        },

        serviceDate: {
            type: Date,
            required: true
        },

        serviceType: {
            type: String,
            enum: ["oil-change", "normal-service", "brake-service", "tyre-service", "engine-service", "other"],
            required: true
        },

        cost: {
            type: Number,
            required: true,
            min: 0
        },

        nextServiceDueDate: {
            type: Date,
            required: true
        },

        loggedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const MaintenanceModel = mongoose.model("Maintenance", maintenanceSchema);


module.exports = MaintenanceModel