const taskModel = require("../models/TaskModel");
const mongoose = require("mongoose")

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

    return await taskModel.find({ assignedTo: userId }).sort({deadline :1})

}


const UpdateEmpTask = async (taskId, userId, status ) => {

    const task = await taskModel.findById(taskId)

    if (!task) throw new Error("No task found");

    //  to string is used to check in all consicuences like if it is string  
    if (task.assignedTo.toString() !== userId) {
        throw new Error("Not allowed");
    }

    task.status = status;
    await task.save();

    return task;



}










module.exports = { createTask, getTaskByUser, UpdateEmpTask }