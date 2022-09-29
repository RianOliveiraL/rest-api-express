require("dotenv").config();
require("./database/database").connect();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const UserModel = require("./models/user");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user', routes);

module.exports = app;