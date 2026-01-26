const taskService = require("../services/task.service");

const createTask = async (req, res) => {

    try {
        const task = await taskService.createTask(req.body, req.user._id);
        res.status(201).json({
            success: true,
            task
        })

    } catch (error) {
        console.log("????",error)
        res.status(401).json({
            success: false,
            message: error.message
        })
    }

}

const getUserTask = async (req, res) => {
    
      

    try {
        const Usertask = await taskService.getTaskByUser(req.user.id);
        res.status(201).json({
            success: true,
            Usertask
        })

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }

}





module.exports = { createTask, getUserTask }