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

    deadline: Date,




}, { timestamps: true },

)


module.exports = mongoose.model("task",taskModel);


