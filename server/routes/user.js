const router = require('express').Router();
const {verifyToken, verifyAuthorization, verifyAdmin} = require("./verifyToken");
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

router.delete("/:id", async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Deleted")

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others)

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", async (req, res) => {

    const query = req.query.new;

    try{
        const users = query ? await User.find().sort({_id: -1}).limit(1) : await User.find(req.params.id);
        res.status(200).json(users)

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/stats", verifyAdmin , async (req, res) => {

    const date = new Date();
    const pastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try{
        const data = await User.aggregate([
            {$match: {
                createdAt: {$gte: pastYear}
            }},
            {
                $project: {
                    month: {$month: "createdAt"},

                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1},
                }
            },
        ]);
        res.status(200).json(data)

    }catch(err){
        res.status(500).json(err)
    }

})

module.exports = router