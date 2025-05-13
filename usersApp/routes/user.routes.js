const express = require('express')

const router = express.Router();

const userController = require('../controllers/user.controller');
const { verifyAccessToken } = require('../services/auth.service');
const verifyToken = require('../middlewares/auth.middleware').verifyToken
const verifyRoles = require('../middlewares/auth.middleware').verifyRoles

router.get('/', verifyToken, userController.findALL);
router.get('/:username', verifyToken, userController.findOne)
router.post('/', verifyToken, verifyRoles("ADMIN"), userController.create)
router.patch('/:username', verifyToken, verifyRoles("ADMIN"), userController.update)
router.delete('/:username', verifyToken, verifyRoles("ADMIN"), userController.deleteByUsername)
router.delete('/:username/email/:email', verifyToken, verifyRoles("ADMIN"), userController.deleteByEmail)
router.patch('/:username/password', verifyToken, userController.updateOnlyPassword)

router.get('/check_duplicate_email/:email', userController.checkDuplicateEmail);
module.exports = router;