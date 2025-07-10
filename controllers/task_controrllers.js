const Task = require('../models/task_model');

const taskCreate = async (req,res)=>{
   try{
        const {task,desc} = req.body;

        const newTask = new Task({task,desc,user:req.user.id});
        await newTask.save();
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
     const userId = req.user.id;
     const tasks = await Task.find({user:userId});

     const page = parseInt(req.query.page) || 1;
     const limit = parseInt(req.query.limit) || 10;
     const startIndex = (page-1)*limit;
     const total = tasks.length;
     const endIndex = page * limit;
    
     const paginate_tasks = tasks.slice(startIndex, endIndex);

     res.render('index' ,{paginate_tasks , currentPage:page,totalPages : Math.ceil(total/limit),limit});
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