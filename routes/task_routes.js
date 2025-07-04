const express = require('express');
const router = express.Router();
const {taskCreate , show , readtasks,taskDelete,taskUpdate} = require('../controllers/task_controrllers');

router.get('/',readtasks);
router.get('/create', show);
router.post('/create',taskCreate);
router.get('/delete/:id' , taskDelete);
router.get('/update/:id',taskUpdate);

module.exports = router;