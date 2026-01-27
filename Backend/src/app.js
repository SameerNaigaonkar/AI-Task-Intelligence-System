require("dotenv").config();
const express = require("express");
const connectDb = require("../src/config/db");
const cors = require("cors");
const authroutes = require("./routes/auth.routes")
const taskroutes = require("./routes/task.routes");

require("dotenv").config();

const app = express();

(async () => {
  await connectDb();        // ✅ wait for DB
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
})();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
   res.send("AI Task Intelligence API running");
})


app.use("/auth",authroutes);
app.use("/task",taskroutes);
app.use("/updatedTask",taskroutes);


module.exports = app;