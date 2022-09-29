const User = require('../models/user');
const mongoose = require('mongoose');

// create user controller

async function createUser(req, res, next) {
    try {
        const newUser = new User({...req.body});

        newUser.save().then(() => {
            console.log(newUser);
            //res.send("New User created successfully!");
            //res.json(newUser);
            res.json({
                message: "New user created successfully!",
                user: newUser
            });
        }).catch((err) => {
            res.status(500).send("Internal Server Error!");
            next();
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error2!");
        next();
    }
}

// get all useers controller

async function getUsers(req, res, next) {
    try {
        User.find().then((users) => {
            if (users) {
                return res.json(users);
            } else {
                return res.status(404).send('User not found');
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).send('Internal server error');
            next();
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
        next();
    }
}

// get a user by id controller

async function getUser(req, res, next) {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).send("Id required");
        }
        User.findById(id).then((user) => {
            if (user) {
                console.log(user);
                return res.json(user);
            } else {
                res.status(404).send('User not found');
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).send('Internal server error1');
            next();
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error2');
        next();
    }
}

// delete one user by id controller

async function deleteUser(req, res, next)  {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).send('Id required');
        }

        User.findByIdAndDelete(id).then((user) => {
            if (user) {
                console.log(user);
                // return res.json('user Account deleted successfully');
                res.json({
                    message: 'user Account deleted successfully',
                    user: user
                });
            } else {
                res.status(404).send('user account not found')
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).send('Internal server error1');
            next();
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error2');
        next();
    }
}

// update user by id controller

async function updateUser(req, res, next) {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).send('Id required');
        }
        User.findByIdAndUpdate(
            id,
            {$set: {
                    'email': req.body.email,
                    'password': req.body.password,
                    'profilePic': req.body.profilePic,
                    'age': req.body.age,
                    'contactNumber': req.body.contactNumber,
                    'address': req.body.address,
                    'firstName': req.body.firstName,
                    'lastName': req.body.lastName
            }},
            {new: true},
            function(err, user) {
                if(err) {
                    console.log(err);
                    res.json({error: err});
                    next();
                } else {
                    console.log(user);
                    res.json({
                        message: 'user Account updated Sucessfully',
                        user: user
                    });
                    next();
                }
            });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal server error2')
        next();
    }
}

module.exports = {createUser: createUser, getUsers: getUsers, getUser: getUser, deleteUser: deleteUser, updateUser: updateUser}