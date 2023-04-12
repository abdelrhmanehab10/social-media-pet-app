const { login } = require("../controllers/user.js");
const app = require("express").Router();

app.post("/login", login);
