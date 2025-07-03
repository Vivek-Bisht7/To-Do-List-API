const Task = require('../models/task_model');

const taskCreate = async (req,res)=>{
   try{
        const task = new Task(req.body);
        await task.save();
        console.log("Task added successfully");
        res.status(201).json({success:true,message:"Task added successfully",task});
   }
   catch(err){
        console.log("Error while adding task.." + err.message);
        res.status(500).json({success:false , message:"Error while adding task" , error : err.message});
   }
}

const show = (req,res)=>{
    res.render('index');
}

module.exports = {taskCreate , show};