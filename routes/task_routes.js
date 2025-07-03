const express = require('express');
const router = express.Router();
const {taskCreate , show} = require('../controllers/task_controrllers');


router.get('/', show);
router.post('/create',taskCreate);

module.exports = router;