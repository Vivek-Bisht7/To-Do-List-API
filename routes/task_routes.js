const express = require('express');
const router = express.Router();
const {taskCreate , show , readtasks,taskDelete,taskUpdate,update} = require('../controllers/task_controrllers');

router.get('/',readtasks);
router.get('/create', show);
router.post('/create',taskCreate);
router.get('/delete/:id' , taskDelete);
router.post('/update/:id',taskUpdate);
router.get('/update/:id', update);

module.exports = router;