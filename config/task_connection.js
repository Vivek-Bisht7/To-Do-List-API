const mongoose = require('mongoose');

const dbConnection = async (url)=>{
    try{
        await mongoose.connect(url);
        console.log("Database connected successfully");
    }
    catch(err){
        console.error("Error in connecting database" + err.message);
        process.exit(1);
    }
}

module.exports = dbConnection;