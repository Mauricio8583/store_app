const router = require('express').Router();
const {verifyToken, verifyAuthorization, verifyAdmin} = require("./verifyToken");
const CryptoJs = require("crypto-js");
require("dotenv").config();
const Product = require("../models/Product");


router.post("/", verifyAdmin , async (req, res) => {
    
    const newProduct = new Product(req.body);

    try{
        await newProduct.save();
        res.status(200).json("Product is available!!")

    }catch(err){
        res.status(500).json(err)
    }
})



router.put("/:id", verifyAdmin , async (req, res) => {
    
    try{
        const updatedProdutc = await Product.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedProdutc)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete("/:id", verifyAdmin , async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product Deleted")

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)

    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", async (req, res) => {

    const query = req.query.new;
    const category = req.query.category;

    try{
        let products;

        if(query){
            products = await Product.find().sort({createdAt: -1}).limit(5);
        }
        else if(category){
            products = await Product.find({categories: {
                $in: [category]
            },});
        }
        else{
           products = await Product.find();
        }

        res.status(200).json(products)

    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router