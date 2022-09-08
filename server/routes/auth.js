const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
require("dotenv").config();
const jst = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS).toString()        
    });

    try{
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    }catch(err){
        res.status(500).json(err);
    }

})

//LOGIN

router.post("/login", async (req, res) => {
    
    try{
        const username = await User.findOne({
            username: req.body.username
        });
        if(!username){
            res.status(401).json("User or password wrong");
        }
        const hashedPassword = CryptoJs.AES.decrypt(username.password, process.env.PASS);
        const dc_password = hashedPassword.toString(CryptoJs.enc.Utf8);
        if(dc_password != req.body.password){
            res.status(401).json("User or password wrong");
        }

        const accessToken = jst.sign({
            id: username._id,
            isAdmin: username.isAdmin
        }, process.env.JST_KEY, {expiresIn: "4d"});

        const {password, ...others} = username._doc;
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

})

module.exports = router