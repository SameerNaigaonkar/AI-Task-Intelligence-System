const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerUser = async ({ name, password, email, role }) => {
  const userExists = await userModel.findOne({ email });
  if (userExists) throw new Error("user already exists")

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
    role
  })

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role
  }

}


const loginUser = async ({ email, password }) => {

  const user = await userModel.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Creadentials");

  const token = jwt.sign({
    id: user._id,
    role: user.role
  }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

  return {
    token,
    user: {
      id: user._id,
      role: user.role,
      name: user.name,
      email: user.email
    }
  }

}




module.exports = {
  registerUser, loginUser
}