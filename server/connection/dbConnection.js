const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/pet-app")
    .then(() => console.log("Connected Succesfully"))
    .catch((err) => console.log(err));
};

module.exports = dbConnection;
