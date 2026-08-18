const ReportIssueModel = require('../Model/Report.issueModel');
const VehicleModel = require('../Model/VehicleModel');


const createReportIssue = async (req, res) => {
    try {

        const { vehicle, issueType, description } = req.body;

        if (!vehicle || !issueType || !description ) {
            res.status(400).json({ message: "All filed is require" });
        }

        const vehicledata = await VehicleModel.findById(vehicle);

        if (!vehicledata) {
            res.status(400).json({ message: "Vehicle is not found" });
        }

        const Reportissue = await ReportIssueModel.create({
            vehicle,
            reportedBy: req.user._id,
            issueType,
            description,
        })

        res.status(201).json({
            success: true,
            message: "Issue Reported Add successfully",
            Reportissue
        })


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = { createReportIssue }