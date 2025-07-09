const {body , validationResult} = require('express-validator');

const validateTask = [
    body('task').notEmpty().withMessage("Task title is required"),
    body('desc').optional().isString().withMessage("Description must be String"),
];

const handleValidation = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {validateTask,handleValidation};