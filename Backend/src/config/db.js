const mongoose = require("mongoose");

const connectDb = async () => {
    
try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to Db")
} catch (error) {
    console.error("Db error",error.message);
    process.exit(1);
}

}

module.exports = connectDb ;