const BloodRequestModel = require("../Model/BloodRequest.model");

const createBloodRequest = async (req, res) => {
    try {
        const { patientName, bloodGroup, units, urgency, hospital, contact } = req.body;
        const normalizedPatientName = typeof patientName === "string" ? patientName.trim() : "";
        const normalizedHospital = typeof hospital === "string" ? hospital.trim() : "";
        const normalizedBloodGroup = typeof bloodGroup === "string" ? bloodGroup.trim().toUpperCase() : "";
        const normalizedUrgency = typeof urgency === "string" ? urgency.trim() : "";
        const normalizedContact = typeof contact === "string" ? contact.trim() : "";
        const parsedUnits = Number(units);
        const errors = {};

        if (!normalizedPatientName) errors.patientName = "Patient name is required";
        if (!["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].includes(normalizedBloodGroup)) {
            errors.bloodGroup = "Select a valid blood group";
        }
        if (!Number.isInteger(parsedUnits) || parsedUnits < 1) {
            errors.units = "Units must be a positive whole number";
        }
        if (!["Normal", "Urgent", "Critical"].includes(normalizedUrgency)) {
            errors.urgency = "Select a valid urgency level";
        }
        if (!normalizedHospital) errors.hospital = "Hospital name is required";
        if (!/^\d{10}$/.test(normalizedContact)) {
            errors.contact = "Enter a valid 10-digit contact number";
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ message: "Please provide valid request details", errors });
        }

        const bloodRequest = await BloodRequestModel.create({
            patient: req.user._id,
            patientName: normalizedPatientName,
            bloodGroup: normalizedBloodGroup,
            units: parsedUnits,
            urgency: normalizedUrgency,
            hospital: normalizedHospital,
            contact: normalizedContact
        });

        return res.status(201).json({
            message: "Blood request submitted successfully",
            request: bloodRequest
        });
    } catch (error) {
        console.error("Failed to create blood request:", error);
        return res.status(500).json({ message: "Unable to submit blood request" });
    }
};

module.exports = { createBloodRequest };