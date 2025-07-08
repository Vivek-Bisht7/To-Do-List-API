const express = require('express');
const router = express.Router();
const {taskCreate , show , readtasks,taskDelete,taskUpdate,update} = require('../controllers/task_controrllers');
const authMiddleware = require('../middleware/auth_middleware');

router.get('/',authMiddleware,readtasks);
router.get('/create', authMiddleware, show);
router.post('/create',authMiddleware ,taskCreate);
router.get('/delete/:id' ,authMiddleware, taskDelete);
router.post('/update/:id',authMiddleware,taskUpdate);
router.get('/update/:id',authMiddleware, update);

module.exports = router;