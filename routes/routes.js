const express = require('express');
const {createUser, getUsers, getUser, deleteUser, updateUser} = require("../controllers/user");

const router = express.Router();

router.post('/createUser', createUser);

router.get('/getUsers', getUsers);

router.get('/getUser/:id', getUser);

router.delete('/deleteUser/:id', deleteUser);

router.put('/updateUser/:id', updateUser);

module.exports = router ;