import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { userRequest } from '../request';

function Success() {
   const location = useLocation();

   const data = location.state.stripeData;
   const cart = location.state.products;

   
   const currentUser = useSelector((state) => state.user.currentUser);
   const [orderId, setOrderId] = useState(null);
   
   useEffect(() => {
    const createOrder = async () => {
      try{
        const res = await userRequest.post("/orders", {
          userID: currentUser._id,
          products: cart.products.map((item) => ({
            productID: item._id,
            quantity: item._quantity
          })),
          amount: cart.total,
          address: data.billing_details.address
        });
        setOrderId(res.data._id);

      }catch(err){
        console.log(err)
      }
    }
    data && createOrder();
   }, [cart, data, currentUser])

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {orderId ? `Order has been created successfuly. Your order number is ${orderId}` : `Successfull. Your order is beign prepared...`}
      
      <button style={{padding: "10px", marginTop: "20px"}}>Go to Home page</button>
      

    </div>
  )
}

export default Success