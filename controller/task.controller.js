const taskModel = require("../model/task.model.js")

const createTask = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        
        const postRes = await taskModel(data).save();
        res.status(200).json(postRes);
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getTask = async (req, res) => {
    try {
        const status = req.params.status
        const getRes = await taskModel.find({status : status})
        res.status(200).json(getRes);
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllTask = async (req, res) => {
    try {
        const getRes = await taskModel.find()
        res.status(200).json(getRes);
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const editTask = async (req, res) => {
    try {
        const id = req.body._id;        
        const data = req.body;
        const editRes = await taskModel.findByIdAndUpdate(id, data);
        res.status(200).json(editRes);
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        
        const deleteRes = await taskModel.findByIdAndDelete(id);
        res.status(200).json(deleteRes);
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


module.exports = { createTask, getTask, editTask, deleteTask, getAllTask }