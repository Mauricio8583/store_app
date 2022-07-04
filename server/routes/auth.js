const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
require("dotenv").config();

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS).toString()        
    });

    try{
        const saveUser = await newUser.save();
        res.status(200).json("User Created");
    }catch(err){
        res.status(500).json(err);
    }

})

module.exports = router