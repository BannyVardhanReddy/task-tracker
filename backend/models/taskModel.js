const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Task", taskSchema);

// const fs = require('fs');
// const path = require('path');
// const { type } = require('os');
// const { timeStamp } = require('console');

// const FILE = path.join(__dirname,"tasks.json");

// function initializeTask(){
//     if(!fs.existsSync(FILE)){
//         fs.writeFileSync(FILE,"[]");
//     }
// }

// function readTasks(){
//     initializeTask();
//     try{
//     return JSON.parse(fs.readFileSync(FILE));
//     }catch(error){
//         return [];
//     }
// }

// function writeTasks(tasks){
//     fs.writeFileSync(
//         FILE,
//         JSON.stringify(tasks,null,2)
//     );
// }

// exports.getAllTasks = () => {
//     const tasks = readTasks();

//     return tasks;
// }

// exports.getTask = (id) => {
//     const tasks = readTasks();
//     const task = tasks.filter(task => {
//         return task.id === Number(id);
//     });

//     return task;
// }

// exports.addTask = (description)=>{
//     let tasks = readTasks();

//     const task = {
//         id: tasks.length>0 ? tasks[tasks.length-1].id+1 : 1,
//         description: description,
//     }

//     tasks.push(task);

//     writeTasks(tasks);

//     return task;
// }

// exports.deleteTask = (id)=>{
//     let tasks = readTasks();

//     tasks = tasks.filter(task => {
//         return task.id !== Number(id);
//     })

//     writeTasks(tasks);
// }

