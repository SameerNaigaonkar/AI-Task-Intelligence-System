const authService = require("../services/auth.service");


const userRegister = async (req, res) => {

    // ///console.log("????",req.body)
    try {
        const user = await authService.registerUser(req.body)
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        /// console.log(">>>>",error)
        res.status(400).json({
            success: false,
            message: error.message
        });

    }

}

const login = async (req, res) => {
    // console.log("::::",req.body)

    try {
      const user =   await authService.loginUser(req.body)
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message

        })

    }

}






module.exports = {
    userRegister,
    login
}