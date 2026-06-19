const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const taskRoutes = require('./routes/taskRouter');
const userRoutes = require('./routes/userRouter');

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

app.use("/api",userRoutes);
app.use("/tasks",taskRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})