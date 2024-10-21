const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Config/dbConnect");
const userRoutes = require("./controllers/userController");
const app = express();
const port = 3003;
connectDB();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/", userRoutes);
app.listen(port, () => {
  console.log("Server is running on Port :" + port);
});
