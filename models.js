const mongoose = require("mongoose");

const EmployeeForm = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Needed"],
  },
  empid: {
    type: String,
    require: [true, "Must need"],
  },
  depart: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    require: [true, "Must need"],
  },
  desig: {
    type: String,
    require: [true, "Must need"],
  },
  sal: {
    type: String,
    require: [true, "Must need"],
  },
});

module.exports = mongoose.model("EmployeeForm", EmployeeForm);
