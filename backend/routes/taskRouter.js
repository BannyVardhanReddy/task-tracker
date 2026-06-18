const express = require('express');
const router = express.Router();

const {
    getTasks,
    getTaskById,
    addTask,
    deleteTaskById,
    updateTaskById
} = require('../controllers/taskController');

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.post("/",addTask);

router.delete("/:id",deleteTaskById);

router.put("/:id", updateTaskById);

module.exports = router;