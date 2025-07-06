const express = require('express');
const router = express.Router();

const {userRegistration , register , loginShow,login} = require('../controllers/user_controllers');

router.get('/register',register);
router.post('/register',userRegistration);
router.get('/login',loginShow);
router.post('/login',login);

module.exports = router;