const router = require('express').Router();
const {verifyToken, verifyAuthorization} = require("./verifyToken");
const CryptoJs = require("crypto-js");
require("dotenv").config();
const User = require("../models/User");

router.put("/:id", verifyAuthorization, async (req, res) => {
    if(req.body.password){
        req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.PASS).toString();
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router