import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout'
import { useSelector } from 'react-redux'
import { Annoucement } from '../components/Annoucement'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { mobile } from '../responsive'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../request'
import { useNavigate } from 'react-router-dom'


const key = process.env.REACT_APP_STRIPE

const Container = styled.div`


`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })};

`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};

`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" ? "white" : "black"};

`

const TopTexts = styled.div`
    ${mobile({ display: "none" })};

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`

const Info = styled.div`
    flex: 3;

`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};

`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;

`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const Image = styled.img`
    width: 200px;
    
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const ProductName = styled.span`


`

const ProductId = styled.span`


`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};

`

const ProductSize = styled.span`


`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;

`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })};

`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}; 

`

const HrStyle = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;

`

const SummaryTitle = styled.h1`
    font-weight: 200;

`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span`


`

const SummaryItemPrice = styled.span`


`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: darkgreen;
    color: white;
    font-weight: 600;
    cursor: pointer;

`

export const Cart = () => {
   const cart = useSelector(state => state.cart);
   const [stripeToken, setStripeToken] = useState(null);
   const navigate = useNavigate();

   const onToken = (token) => {
    setStripeToken(token)
   }

   useEffect(() => {
    const request = async () => {
        try{
            const res = await userRequest.post("checkout/payment", {
                tokenID: stripeToken.id,
                amount: cart.total * 100
                
            });
            navigate("/success", {state:{stripeData: res.data, products: cart}})
        }catch(err){
            
        }
    }
    if(stripeToken && cart.total>=1){
        request()
    }

   }, [stripeToken, cart.total, navigate])

  return (
    <Container>
        <Annoucement />
        <Navbar />
          <Wrapper>
            <Title>Cart</Title>
            <Top>
               <TopButton>Continue</TopButton>
               <TopTexts>
                   <TopText>Shopping cart (2)</TopText>
                   <TopText>Your Whishlist (0)</TopText>
               </TopTexts>
               <TopButton type='filled' >Checkout Now</TopButton>
            </Top>
            <Bottom>
               <Info>
                  {cart.products?.map((product) => (
                    <Product>
                    <ProductDetail>
                        <Image src={product.img} />
                        <Details>
                            <ProductName><b>Product</b>: {product.title}</ProductName>
                            <ProductId><b>ID</b>: {product._id}</ProductId>
                            <ProductColor color={product.color}></ProductColor>
                            <ProductSize><b>Size</b>: {product.size}</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                         <ProductAmountContainer>
                            <Add />
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove />
                         </ProductAmountContainer>
                     <ProductPrice>
                        $ {product.price * product.quantity}
                    </ProductPrice>
                    </PriceDetail>
                 </Product>
                  ))}
                 <HrStyle />
                 
               </Info>
               <Summary>
                  <SummaryTitle>Order</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 2.98</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Discount</SummaryItemText>
                    <SummaryItemPrice>$ 2</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <StripeCheckout 
                  name='Store Shop'
                  image='https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/06/github.jpg'
                  billingAddress
                  shippingAddress
                  description={`Your total is $ ${cart.total}`} 
                  amount={cart.total * 100} 
                  token={onToken} 
                  stripeKey={key} >

                   <Button>CHECKOUT NOW</Button>
                    
                  </StripeCheckout>
               </Summary>
             </Bottom>
          </Wrapper>
        <Footer />
    </Container>
  )
}
