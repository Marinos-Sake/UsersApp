const User = require('../models/user.model');

exports.findAll = async(req, resp) => {
    console.log("Find from all user's the products")

    try {
        const result = await User.find({}, {username:1, products:1, _id:0})
        resp.status(200).json({status: true, data: result})
    } catch (err) {
        console.log("Problem in finding from all users the products")
        resp.status(400).json({status: false, data: err})
    }
}

exports.findOne = async(req, resp) => {
    console.log("Find products for specific user")

    const username = req.params.username

    try {
        const result = await User.findOne({username: username}, {username: 1, products:1, _id:1})
        resp.status(200).json({status: true, data: result});
    } catch (err) {
        console.log("Problem in finding user's products", err);
        resp.status(400).json({status: false, data: err})
    }
}