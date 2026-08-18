const mongoose = require('mongoose');


const ReportIssueSchema = new mongoose.Schema(
    {
        vehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true
        },

        reportedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        issueType: {
            type: String,
            enum: [ "brake", "engine", "tyre", "battery",  "electrical", "oil-leak", "accident-damage", "other" ],
            required: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            enum: ["pending", "in-progress", "resolved"],
            default: "pending"
        },

        reportedAt: {
            type: Date,
            default: Date.now
        },

        resolvedAt: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

const ReportIssueModel = mongoose.model("ReportIssue", ReportIssueSchema );

module.exports = ReportIssueModel;