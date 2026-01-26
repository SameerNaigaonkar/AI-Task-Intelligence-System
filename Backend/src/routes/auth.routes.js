const express = require("express");
const router = express.Router();

const authContoller = require("../controllers/auth.controller")



router.post("/register",authContoller.userRegister);
router.post("/login",authContoller.login);





module.exports = router;
