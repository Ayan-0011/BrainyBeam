const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      required: [true, "Registration number is required"],
      unique: true
    },

    brand: {
      type: String,
      required: [true, "Brand is required"],
    },

    type: {
      type: String,
      enum: ["Truck", "Van", "Bus", "Mini Truck"],
      required: [true, "Vehicle type is required"],
    },

    fuelType: {
      type: String,
      enum: ["Diesel", "Petrol", "CNG", "Electric"],
      required: [true, "Fuel type is required"],
    },

    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: 1,
    },

    status: {
      type: String,
      enum: ["Available", "in-use"],
      default: "Available",
    },

    insuranceExpiry: {
      type: Date,
      required: [true, "Insurance expiry date is required"],
    },

    PermitExpiry: {
      type: Date,
      required: [true, "PermitExpiry expiry date is required"],
    },

    serviceDueDate: {
      type: Date,
      required: [true, "Service due date is required"],
    },
    vehicleImage: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/3097/3097144.png",
    },
  },
  { timestamps: true }
);

const VehicleModel = mongoose.model("Vehicle", vehicleSchema);


module.exports = VehicleModel