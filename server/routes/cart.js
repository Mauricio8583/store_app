const router = require('express').Router();
const {verifyToken, verifyAuthorization, verifyAdmin} = require("./verifyToken");
const CryptoJs = require("crypto-js");
require("dotenv").config();
const Cart = require("../models/Cart");


router.post("/", verifyToken , async (req, res) => {
    
    const newCart = new Cart(req.body);

    try{
        await newCart.save();
        res.status(200).json("Product is available!!")

    }catch(err){
        res.status(500).json(err)
    }
})



router.put("/:id", verifyAuthorization , async (req, res) => {
    
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete("/:id", verifyAuthorization , async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart Deleted")

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/find/:id", verifyAuthorization ,async (req, res) => {
    try{
        const cart = await Cart.findOne({
            userID: req.params.id
        });
        res.status(200).json(cart)

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", verifyAdmin, async (req, res) => {
    try{

        const carts = await Cart.find();
        res.status(200).json(carts)

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router