const express = require("express");
const routes = express.Router();
const { getAll, postOne } = require("./controllers");

routes.route("/tasks").get(getAll).post(postOne);

module.exports = routes;
