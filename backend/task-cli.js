#!/usr/bin/env mode

const {
    addTask,
    deleteTask,
    // listTask,
    listTasks
} = require('./taskManager.js');

const [
    ,
    ,
    command,
    ...args
] = process.argv;

switch(command){
    case "add" : addTask(args.join(" "));
                 break;

    case "delete" : deleteTask(args[0]);
                    break;
    case "list" : listTasks(args[0]);
                    break;
    default : console.log(
        `
            Commands:
            
            - node task-cli add "Task"
            - node task-cli delete Id
            - node task-cli list
        `
    );
}

