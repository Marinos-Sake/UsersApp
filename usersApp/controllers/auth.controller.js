const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const authService = require('../services/auth.service')

exports.login = async (req, resp) => {
    console.log("Login user:", req.body)

    const username = req.body.username;
    const password = req.body.password;

    try {
        const result = await User.findOne({username: username})

        if (result && result.username === username && result.password === password) {
            const token = authService.generateAccessToken(result)
            resp.status(200).json({status: true, data: token})
        } else {
            resp.status(404).json({status: false, data: "User not logged in"})
        }
    } catch (err) {
        console.log("Problem in logging", err)
        resp.status(400).json({status: false, data: err})
    }
}