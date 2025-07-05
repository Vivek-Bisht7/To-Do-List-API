const express = require('express');
const router = express.Router();

const {userRegistration , register} = require('../controllers/user_controllers');

router.get('/register',register);
router.post('/register',userRegistration);

module.exports = router;