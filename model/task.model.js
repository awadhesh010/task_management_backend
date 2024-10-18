const {model, Schema} = require("mongoose");

const taskSchema = new Schema({
    title : String,
    description : String,
    status : String,
    priority : String,
    dueDate : Date
})

const taskModel = model("task", taskSchema);
module.exports = taskModel