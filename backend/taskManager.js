const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname,"tasks.json");

function initializeTask(){
    if(!fs.existsSync(FILE)){
        fs.writeFileSync(FILE,"[]");
    }
}

function readTasks(){
    initializeTask();

    return JSON.parse(fs.readFileSync(FILE));
}

function writeTasks(tasks){
    fs.writeFileSync(
        FILE,
        JSON.stringify(tasks,null,2)
    );
}

function addTask(description){
    const tasks = readTasks();

    const task = {
        id : tasks.length>0 ? tasks[tasks.length-1].id+1 : 1,
        description,
    }

    tasks.push(task);

    writeTasks(tasks);

    console.log("Successfully added a task!");
}

function deleteTask(id){

    let tasks = readTasks();
    
    tasks = tasks.filter((task)=>{
        return task.id !== Number(id);
    });

    writeTasks(tasks);

    console.log("Deleted successfully!");
}

function listTasks(){
    const tasks = readTasks();


    if(!tasks.length){
        console.log("No Tasks Found");
        return;
    }

    console.table(tasks);
}

module.exports = {
    addTask,
    deleteTask,
    listTasks
};

