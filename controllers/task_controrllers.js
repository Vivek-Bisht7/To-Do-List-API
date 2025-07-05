const Task = require('../models/task_model');

const taskCreate = async (req,res)=>{
   try{
        const task = new Task(req.body);
        await task.save();
        console.log("Task added successfully");
        res.redirect('/task');
   }
   catch(err){
        console.log("Error while adding task.." + err.message);
        res.status(500).json({success:false , message:"Error while adding task" , error : err.message});
   }
}

const show = (req,res)=>{
    res.render('create');
}

const readtasks = async (req,res)=>{
     const tasks = await Task.find();
     res.render('index' ,{tasks});
}

const taskDelete = async(req,res)=>{
     try{
          const deleteTask = await Task.findByIdAndDelete(req.params.id);
          console.log("Successfully deleted task..");
          res.redirect("/task");
     }
     catch(error){
          console.log("Unable to delete task.." + error.message);
     }
}

const update = async (req,res)=>{
     const task = await Task.findById(req.params.id);
     res.render('update',{task});
}

const taskUpdate = async(req,res)=>{
     try{
          await Task.findByIdAndUpdate(req.params.id,req.body);
          res.redirect('/task');
          console.log("Task updated successfully");
     }
     catch(err){
          console.log('Error while updating' + err.message);
     }
}

module.exports = {taskCreate , show , readtasks , taskDelete , taskUpdate ,update};