const mongoose = require("mongoose");

//   TxX8hiq80e2OVeLI

const connectDB = (url) => {
  console.log("Connecting to DB");
  return mongoose.connect(url, {});
};

module.exports = connectDB;
