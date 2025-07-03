const express = require('express');
const app = express();
const path = require('path');
const dbConnection = require('./config/task_connection');
const task = require('./models/task_model');
const taskRoutes = require('./routes/task_routes');

dbConnection("mongodb://127.0.0.1:27017/db");

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/task' , taskRoutes);



app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})