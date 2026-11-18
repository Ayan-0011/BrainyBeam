const mongoose = require("mongoose");
const DonationScheduleModel = require("../Model/DonationSchedule.model");

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const parseGroup = (v) => (typeof v === "string" ? v.trim().toUpperCase() : "");
const parseText = (v) => (typeof v === "string" ? v.trim() : "");


const parseFutureDate = (v) => {
    const d = new Date(v);
    if (!v || isNaN(d.getTime())) return { error: "Enter a valid donation date" };
    if (d <= new Date()) return { error: "Donation date must be in the future" };
    return { date: d };
};


const hasBookingOnSameDay = async (donorId, date, excludeId = null) => {
    const start = new Date(date); start.setHours(0, 0, 0, 0);
    const end = new Date(start); end.setDate(end.getDate() + 1);

    const filter = {
        donor: donorId,
        status: "scheduled",
        donationDate: { $gte: start, $lt: end }
    };
    if (excludeId) filter._id = { $ne: excludeId };

    return DonationScheduleModel.findOne(filter);
};

// CREATE
const createSchedule = async (req, res) => {
    try {
        const bloodGroup = parseGroup(req.body.bloodGroup);
        const location = parseText(req.body.location);
        const notes = parseText(req.body.notes);

        if (!BLOOD_GROUPS.includes(bloodGroup)) {
            return res.status(400).json({ message: "Select a valid blood group" });
        }
        if (!location) {
            return res.status(400).json({ message: "Location is required" });
        }

        const { date, error } = parseFutureDate(req.body.donationDate);
        if (error) return res.status(400).json({ message: error });

        if (await hasBookingOnSameDay(req.user._id, date)) {
            return res.status(400).json({ message: "You already have a donation scheduled on this day" });
        }

        const schedule = await DonationScheduleModel.create({
            donor: req.user._id,
            bloodGroup,
            donationDate: date,
            location,
            notes
        });

        return res.status(201).json({ message: "Donation scheduled", schedule });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// READ ALL (sirf apne) 
const getMySchedules = async (req, res) => {
    try {
        const filter = { donor: req.user._id };

        if (req.query.status) {
            if (!["scheduled", "completed", "cancelled"].includes(req.query.status)) {
                return res.status(400).json({ message: "Invalid status filter" });
            }
            filter.status = req.query.status;
        }

        const schedules = await DonationScheduleModel.find(filter).sort({ donationDate: 1 });

        return res.status(200).json({ count: schedules.length, schedules });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// READ ONE
const getScheduleById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid schedule id" });
        }

        // donor filter: koi doosre donor ka schedule nahi dekh sakta
        const schedule = await DonationScheduleModel.findOne({ _id: id, donor: req.user._id });

        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }

        return res.status(200).json({ schedule });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// UPDATE (sirf "scheduled" wala)
const updateSchedule = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid schedule id" });
        }

        const schedule = await DonationScheduleModel.findOne({ _id: id, donor: req.user._id });

        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }
        if (schedule.status !== "scheduled") {
            return res.status(400).json({ message: `Cannot update a ${schedule.status} schedule` });
        }

        if (req.body.bloodGroup !== undefined) {
            const bloodGroup = parseGroup(req.body.bloodGroup);
            if (!BLOOD_GROUPS.includes(bloodGroup)) {
                return res.status(400).json({ message: "Select a valid blood group" });
            }
            schedule.bloodGroup = bloodGroup;
        }

        if (req.body.location !== undefined) {
            const location = parseText(req.body.location);
            if (!location) {
                return res.status(400).json({ message: "Location cannot be empty" });
            }
            schedule.location = location;
        }

        if (req.body.notes !== undefined) {
            schedule.notes = parseText(req.body.notes);
        }

        if (req.body.donationDate !== undefined) {
            const { date, error } = parseFutureDate(req.body.donationDate);
            if (error) return res.status(400).json({ message: error });

            if (await hasBookingOnSameDay(req.user._id, date, schedule._id)) {
                return res.status(400).json({ message: "You already have a donation scheduled on this day" });
            }
            schedule.donationDate = date;
        }

        await schedule.save();

        return res.status(200).json({ message: "Schedule updated", schedule });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// CANCEL
const cancelSchedule = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid schedule id" });
        }

        const schedule = await DonationScheduleModel.findOne({ _id: id, donor: req.user._id });

        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }
        if (schedule.status !== "scheduled") {
            return res.status(400).json({ message: `Schedule is already ${schedule.status}` });
        }

        schedule.status = "cancelled";
        await schedule.save();

        return res.status(200).json({ message: "Schedule cancelled", schedule });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = { createSchedule, getMySchedules, getScheduleById, updateSchedule, cancelSchedule };