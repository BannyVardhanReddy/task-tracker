const Task = require("../models/taskModel");

exports.addTask = async (req, res) => {
  try {
    const { description } = req.body;
    
    const newTask = new Task({
      description: description,
    });

    await newTask.save();

    res.status(201).json({
      message: "Successfully added the task",
      task : newTask
    });
  } catch (error) {
    res.status(500).json({
      message: "Not able to add the task",
      error: error.message,
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      message: "Successfully got all tasks",
      tasks: tasks,
    });

  } catch (error) {
    res.status(500).json({
      message: "Not able to get Tasks",
      error: error.message,
    });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    // const {id} = req.body;
    const task = await Task.findById(req.params.id);

    if(!task){
        return res.status(404).json({
            message: "Task not found",
        })
    }

    res.status(200).json({
        message: "Got the task succesfully",
        task : task
    });

  } catch (error) {
    res.status(500).json({
      message: "Not able to get Tasks",
      error: error.message,
    });
  }
};

exports.deleteTaskById = async (req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task){
            return res.status(404).json({
                message: "Task not found"
            })
        }

        res.status(200).json({
            message: "Successfully deleted the task",
            task : task
        });
    }catch(error){
        res.status(500).json({
            message:"Unable to delete the task",
            error: error.message
        });
    }
};

exports.updateTaskById = async (req,res)=>{
    try{
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true,
            }
        );

        if(!task){
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Updated successfully",
            task : task
        })
    }catch(error){
        res.status(500).json({
            message : "Unable to find the task",
            error: error.message
        });
    }
};