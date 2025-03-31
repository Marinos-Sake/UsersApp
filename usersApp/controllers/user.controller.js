const User = require('../models/user.model')
const userService = require('../services/user.services')

exports.findALL = async(req, resp) => {
    console.log("Find all users from collection users")

    try {
        // const result = await User.find();
        const result = await userService.findAll();
        resp.status(200).json({status: true, data: result});

    } catch(err) {
        console.log("Problem in reading users", err)
        
        resp.status(404).json({status: false, data: err})
    }
}

exports.findOne = async(req, resp)=> {
    console.log("Find user with specific username")

    let username = req.params.username;

    try {

        // const result = await User.findOne({username: username})
        const result = await userService.findOne(username);

        if (result) {
            resp.status(200).json({status: true, data: result})
        } else {
            resp.status(404).json({status: false, data: "User not exists"})
        }

    } catch(err) {

        console.log("Problem in finding user", err)

        resp.status(400).json({status: false, data: err})

    }
}

exports.create = async(req, resp) => {
    console.log("Create User");


    let data = req.body;

    const newUser = new User({
        username: data.username,
        password: data.password,
        name: data.name,
        surname: data.surname,
        email: data.email,
        address: {
            area: data.address.area,
            road: data.address.road
        }
    });

    try {
        const result = await newUser.save();

        resp.status(200).json({status:true, data: result});
    } catch (err) {
        console.log("Problem in creating", err);
        resp.status(400).json({status: false, data: err});
    }
}

exports.update = async(req, resp) => {
    const username =  req.body.username;

    console.log("User is updated", username)

    const updateUser = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        address: {
            area: req.body.area,
            road: req.body.road
        }

    }

    try {
        const result = await User.findOneAndUpdate({username: username}, updateUser, {new: true})
        resp.status(200).json({status: true, data: result});
    } catch (err) {
        console.log("Problem in updating user", err)
        resp.status(400).json({status: false, data: err})
    }
}