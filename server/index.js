const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT;
const db_connection = process.env.CONNECTION;

mongoose.connect(db_connection).then(() =>
    console.log("DB Connection sucessfull!")
).catch((err) => {
    console.log(err)
});

app.listen(port, () => {
    console.log(`Listining in ${port}`)
});