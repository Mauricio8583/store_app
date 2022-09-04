const router = require('express').Router();
const {verifyToken, verifyAuthorization, verifyAdmin} = require("./verifyToken");
const CryptoJs = require("crypto-js");
require("dotenv").config();
const Order = require("../models/Order");


router.post("/", async (req, res) => {
    
    const newOrder = new Order(req.body);

    try{
        await newOrder.save();
        res.status(200).json("Order is available!!")

    }catch(err){
        res.status(500).json(err)
    }
})



router.put("/:id", verifyAdmin , async (req, res) => {
    
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete("/:id", verifyAdmin , async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order Deleted")

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/find/:id", verifyAuthorization ,async (req, res) => {
    try{
        const order = await Order.find({
            userID: req.params.id
        });
        res.status(200).json(order)

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", async (req, res) => {
    try{

        const orders = await Order.find();
        res.status(200).json(orders)

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/income", verifyAdmin, async (req, res) => {
    const date = new Date();
    const pastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(pastMonth.getMonth() - 1));

    try{
        const income = await Order.aggregate([
            {$match: {
                createdAt: {$gte: previousMonth}
            }},
            {
                $project: {
                    month: {$month: "createdAt"},
                    sales: "$amount"

                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
            
        ]);
        res.status(200).json(income)

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router