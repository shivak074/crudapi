const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
