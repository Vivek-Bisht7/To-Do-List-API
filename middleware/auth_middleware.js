const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const token = req.cookies.token;

    if(!token) return res.redirect();

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = {id:decoded.id};
        next();
    }
    catch(err){
        return res.status(403).send("Invalid token please log in again");
    }
};

module.exports = authMiddleware;