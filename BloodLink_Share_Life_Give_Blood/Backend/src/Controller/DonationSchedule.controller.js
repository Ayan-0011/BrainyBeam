const mongoose = require('mongoose');

const DonationScheduleModel = require('../Model/DonationSchedule.model');

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
        })

        return res.status(201).json({
            message:"Donation scheduled",
            schedule
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = { createSchedule }



