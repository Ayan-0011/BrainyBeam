const mongoose = require("mongoose");
const BloodStockModel = require("../Model/BloodStock.model");

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const parseGroup = (v) => (typeof v === "string" ? v.trim().toUpperCase() : "");
const isValidUnits = (v) => Number.isInteger(v) && v >= 0;

// CREATE
const createStock = async (req, res) => {
    try {
        const bloodGroup = parseGroup(req.body.bloodGroup);
        const units = Number(req.body.units ?? 0);

        if (!BLOOD_GROUPS.includes(bloodGroup)) {
            return res.status(400).json({ message: "Select a valid blood group" });
        }
        if (!isValidUnits(units)) {
            return res.status(400).json({ message: "Units must be a whole number, 0 or more" });
        }

        if (await BloodStockModel.findOne({ bloodGroup })) {
            return res.status(400).json({ message: `${bloodGroup} stock already exists. Use update instead` });
        }

        const stock = await BloodStockModel.create({
            bloodGroup,
            units,
            updatedBy: req.user._id
        });

        return res.status(201).json({
            message: "Blood stock added",
            stock
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                message: "This blood group stock already exists"
            });
        }
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

// READ ALL
const getAllStock = async (req, res) => {
    try {
        const stock = await BloodStockModel.find().sort({ bloodGroup: 1 });
        return res.status(200).json({
            count: stock.length, stock
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

// READ ONE
const getStockById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid stock id" });
        }

        const stock = await BloodStockModel.findById(id);

        if (!stock) {
            return res.status(404).json({ message: "Blood stock not found" });
        }

        return res.status(200).json({ stock });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// UPDATE
const updateStock = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid stock id" });
        }

        const stock = await BloodStockModel.findById(id);

        if (!stock) {
            return res.status(404).json({ message: "Blood stock not found" });
        }

        if (req.body.bloodGroup !== undefined) {
            const bloodGroup = parseGroup(req.body.bloodGroup);

            if (!BLOOD_GROUPS.includes(bloodGroup)) {
                return res.status(400).json({ message: "Select a valid blood group" });
            }
            if (bloodGroup !== stock.bloodGroup && (await BloodStockModel.findOne({ bloodGroup }))) {
                return res.status(400).json({ message: `${bloodGroup} stock already exists` });
            }
            stock.bloodGroup = bloodGroup;
        }

        if (req.body.units !== undefined) {
            const units = Number(req.body.units);

            if (!isValidUnits(units)) {
                return res.status(400).json({ message: "Units must be a whole number, 0 or more" });
            }
            stock.units = units;
        }

        stock.updatedBy = req.user._id;
        await stock.save();

        return res.status(200).json({ message: "Blood stock updated", stock });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "This blood group stock already exists" });
        }
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// DELETE
const deleteStock = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid stock id" });
        }

        const stock = await BloodStockModel.findByIdAndDelete(id);

        if (!stock) {
            return res.status(404).json({ message: "Blood stock not found" });
        }

        return res.status(200).json({ message: "Blood stock deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = { createStock, getAllStock, getStockById, updateStock, deleteStock };
