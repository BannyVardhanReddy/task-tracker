const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const taskRoutes = require('./routes/taskRouter');

mongoose
    .connect('mongodb://239x1a0538_db_user:Rde5UKgH2UfD5DNW@ac-it7xmgu-shard-00-00.wnrexim.mongodb.net:27017,ac-it7xmgu-shard-00-01.wnrexim.mongodb.net:27017,ac-it7xmgu-shard-00-02.wnrexim.mongodb.net:27017/?ssl=true&replicaSet=atlas-g8u0sh-shard-0&authSource=admin&appName=Cluster0')
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