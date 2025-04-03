const express = require('express')

const router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/', userController.findALL);
router.get('/:username', userController.findOne)
router.post('/',authMiddleware.verifyToken, userController.create)
router.patch('/:username', userController.update)
router.delete('/:username', userController.deleteByUsername)
router.delete('/:username/email/:email', userController.deleteByEmail)
module.exports = router;