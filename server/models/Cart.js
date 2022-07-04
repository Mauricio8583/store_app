const mongoose = require("mongoose");

const CartData = new mongoose.Schema(

    {
        userID: {type: String, required: true},
        products: [
            {
                productID: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }

            }
        ]
        
    },
    {timestamps: true}

);

module.exports = mongoose.model("Cart", CartData)