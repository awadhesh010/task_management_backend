const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
require('dotenv').config();
const app = express()
app.listen(8080);

const mongoose = require("mongoose")
mongoose.connect(process.env.DB_URL)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { createTask, getTask, editTask, deleteTask, getAllTask } = require("./controller/task.controller")
app.post("/tasks", createTask);
app.get("/tasks/", getAllTask);
app.get("/tasks/:status", getTask);

app.put("/tasks/edit", editTask);
app.delete("/tasks/delete/:id", deleteTask);