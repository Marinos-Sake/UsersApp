const express = require('express')

const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/', userController.findALL);
router.get('/:username', userController.findOne)
router.post('/', userController.create)
router.patch('/:username', userController.update)
module.exports = router;