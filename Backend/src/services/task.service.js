const taskModel = require("../models/TaskModel");
const mongoose = require("mongoose")
<<<<<<< HEAD
const aiService = require("./ai.service")
=======
>>>>>>> 0b1c4618935ef59f0752780fdea8da538a673f4d

const createTask = async (data, ManagerId) => {

    let aiData = null ;


    if(data.description){
        aiData = await aiService.generateTaskSummary(data.description);
    }
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

<<<<<<< HEAD
    return await taskModel.find({ assignedTo: userId }).sort({ deadline: 1 })
=======
    return await taskModel.find({ assignedTo: userId }).sort({deadline :1})
>>>>>>> 0b1c4618935ef59f0752780fdea8da538a673f4d

}


<<<<<<< HEAD
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
=======
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
>>>>>>> 0b1c4618935ef59f0752780fdea8da538a673f4d



}










module.exports = { createTask, getTaskByUser, UpdateEmpTask }