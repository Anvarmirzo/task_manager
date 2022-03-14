const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({tasks});
	} catch (err) {
		res.status(500).json({message: err});
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({task});
	} catch (error) {
		res.status(400).send({error});
	}
};

const getTask = async (req, res) => {
	try {
		const {id} = req.params;
		const task = await Task.findById(id);
		if (!task) return res.status(404).json({message: 'Task not found'});

		res.status(200).json({task});

	} catch (e) {
		res.status(500).json({message: e});
	}
};

const deleteTask = async (req, res) => {
	try {
		const {id} = req.params;
		const task = await Task.findByIdAndDelete(id);
		if (!task) return res.status(404).json({message: 'Task not found'});
		res.status(200).json({task, status: 'success'});
	} catch (e) {
		res.status(500).json({message: e});
	}
};

const updateTask = async (req, res) => {
	try {
		const {id} = req.params;
		const task = await Task.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
		if (!task) return res.status(404).json({message: 'Task not found'});
		res.status(200).json({task});
	} catch (e) {
		res.status(500).json({message: e});
	}
};

module.exports = {
	getAllTasks, createTask, getTask, updateTask, deleteTask
};
