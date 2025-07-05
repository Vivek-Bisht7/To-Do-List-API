const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task : String,
    desc : String,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
});

module.exports = mongoose.model("Task" , taskSchema);