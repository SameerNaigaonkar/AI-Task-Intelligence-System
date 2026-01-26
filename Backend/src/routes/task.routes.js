const express= require("express");
const router = express.Router();

const taskController = require("../controllers/task.controller");

const {allowRoles,Protect} = require("../middlewares/auth.middleware")


// manager creates task by this route 

router.post("/",Protect ,allowRoles("MANAGER"),taskController.createTask);
router.get("/my",Protect,taskController.getUserTask);

module.exports = router ;