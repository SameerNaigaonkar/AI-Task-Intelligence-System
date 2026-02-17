const mongoose = require("mongoose");


const taskModel = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    description: String,

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },

    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },

    status: {
        type: String,
        enum: ["PENDING", "IN_PROGRESS", "DONE"],
        default: "PENDING",

    },

    aiSummary: String,
    aiEffort: String,
    aiRisk: String,


    deadline: Date,




}, { timestamps: true },

)


module.exports = mongoose.model("Task", taskModel);


