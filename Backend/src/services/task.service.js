const taskModel = require("../models/TaskModel");
const mongoose = require("mongoose")
const aiService = ("./")

const createTask = async (data, ManagerId) => {

    const task = await taskModel.create({

        title: data.title,
        description: data.description,
        assignedTo: data.assignedTo,
        assignedBy: new mongoose.Types.ObjectId(ManagerId),
        deadline: data.deadline,
    })

    return task;



};


const getTaskByUser = async (userId) => {

    return await taskModel.find({ assignedTo: userId }).sort({ deadline: 1 })

}


const UpdateEmpTask = async (taskId, userId, status) => {
    console.log("taskId",taskId)

    const updatedtask = await taskModel.findById(taskId)

    if (!updatedtask) throw new Error("No task found");

    //  to string is used to check in all consicuences like if it is string  
    if (updatedtask.assignedTo.toString() !== userId) {

        throw new Error("Not allowed");

    }

    updatedtask.status = status;
    await updatedtask.save();

    return updatedtask;



}










module.exports = { createTask, getTaskByUser, UpdateEmpTask }