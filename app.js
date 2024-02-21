const express = require("express");
const app = express();
const routes = require("./routes");
const connectDB = require("./ConnectDB");
const cors = require("cors");
const mysql = require("mysql");

app.use(express.json());
require("dotenv").config();
app.use(cors());
app.use("/api/v1", routes);
console.log(process.env);
const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port);
  } catch (err) {
    console.log(err);
  }
};
start();
