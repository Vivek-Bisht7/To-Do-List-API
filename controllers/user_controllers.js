const User = require('../models/user_model');
const bcrypt = require('bcrypt');

const register = (req,res)=>{
     res.render('user_register');
}

const userRegistration = async (req,res)=>{
    const {username , email , password} = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new User({name:username,email,password:hashedPassword});
        await user.save();
        res.redirect('/login');
    }
    catch(err){
        console.log("Error while performing registraion" + err.message);
        res.status(500).json({success:false,message:"Error while performing registraion",error:err});
    }
}

module.exports = {userRegistration , register};