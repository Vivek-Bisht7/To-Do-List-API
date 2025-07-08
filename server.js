const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const dbConnection = require('./config/task_connection');
const taskRoutes = require('./routes/task_routes');
const userRoutes = require('./routes/user_routes');
require('dotenv').config()

dbConnection("mongodb://127.0.0.1:27017/db");

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/task' , taskRoutes);
app.use('/' , userRoutes);


app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})