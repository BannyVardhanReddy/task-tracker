const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const taskRoutes = require('./routes/taskRouter');

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Mongo DB cloud connected successfully')
    })
    .catch((err)=>{
        console.log('Mongo DB connection failed',err);
    })
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend Server is running");
})

app.use("/tasks",taskRoutes);

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})