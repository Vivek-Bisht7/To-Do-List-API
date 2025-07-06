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

const loginShow = (req,res)=>{
    res.render('login');
}

const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Either email or password is incorrect"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
            if(isMatch){
                console.log("User logged in successfully");
                res.redirect('/task');
            }
            else{
                return res.status(400).json({message:"Either email or password is incorrect"});
            }
        
    }
    catch(err){
        console.log("error while making user login");
        res.status(500).json({success:false,message:"error while making user login  " + err.message});
    }
}


module.exports = {userRegistration , register ,loginShow,login};