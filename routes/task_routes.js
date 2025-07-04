const express = require('express');
const router = express.Router();
const {taskCreate , show , readtasks} = require('../controllers/task_controrllers');

router.get('/',readtasks);
router.get('/create', show);
router.post('/create',taskCreate);

module.exports = router;