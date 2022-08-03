const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const user = require('./routes/user');
const auth = require("./routes/auth");
const product = require("./routes/product");
const orders = require("./routes/order");
const cart = require("./routes/cart");


const app = express();

const port = process.env.PORT;
const db_connection = process.env.CONNECTION;

mongoose.connect(db_connection).then(() =>
    console.log("DB Connection sucessfull!")
).catch((err) => {
    console.log(err)
});

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/users", user);
app.use("/api/auth", auth);
app.use("/api/products", product);
app.use("/api/orders", orders);
app.use("/api/carts", cart);

app.listen(port, () => {
    console.log(`Listining in ${port}`)
});