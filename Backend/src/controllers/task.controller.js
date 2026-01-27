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




const updatedTask = async (req,res) => {

    console.log("jndajknadna",req.params)

    try {
        const task = await taskService.UpdateEmpTask(
            req.params.id, 
            req.user.id,
            req.body.status
        );
        console.log("task",task);
        
        res.status(200).json({
            success:true ,
            task
        })
        
    } catch (error) {
        res.status(403).json({
            success:false,
            message :error.message
        })
        
    }
    
}




module.exports = { createTask, getUserTask,updatedTask }