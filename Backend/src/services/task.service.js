const taskModel = require("../models/TaskModel");
const mongoose  = require("mongoose")

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

    return await taskModel.find({ assignedTo: userId })
    //    .sort({deadline :1})

}










module.exports = { createTask,getTaskByUser }