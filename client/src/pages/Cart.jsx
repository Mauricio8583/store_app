import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Annoucement } from '../components/Annoucement'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

const Container = styled.div`


`

const Wrapper = styled.div`
    padding: 20px;

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

`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200; 

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
                  <Product>
                    <ProductDetail>
                        <Image src='https://static.netshoes.com.br/produtos/shoulder-bag-nike-heritage-crossbody/26/2IC-3602-026/2IC-3602-026_zoom1.jpg?ts=1625684481' />
                        <Details>
                            <ProductName><b>Product</b>: Expensive Bag</ProductName>
                            <ProductId><b>ID</b>: 12343433</ProductId>
                            <ProductColor color="black"></ProductColor>
                            <ProductSize><b>Size</b>: M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                         <ProductAmountContainer>
                            <Add />
                            <ProductAmount>1</ProductAmount>
                            <Remove />
                         </ProductAmountContainer>
                     <ProductPrice>
                        $ 30
                    </ProductPrice>
                    </PriceDetail>
                 </Product>
                 <HrStyle />
                 <Product>
                    <ProductDetail>
                        <Image src='https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg' />
                        <Details>
                            <ProductName><b>Product</b>: Yellow T-Shirt</ProductName>
                            <ProductId><b>ID</b>: 12343433</ProductId>
                            <ProductColor color="Yellow"></ProductColor>
                            <ProductSize><b>Size</b>: M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                         <ProductAmountContainer>
                            <Add />
                            <ProductAmount>1</ProductAmount>
                            <Remove />
                         </ProductAmountContainer>
                     <ProductPrice>
                        $ 15
                    </ProductPrice>
                    </PriceDetail>
                 </Product>
               </Info>
               <Summary>
                  <SummaryTitle>Order</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 35</SummaryItemPrice>
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
                    <SummaryItemPrice>$ 30.02</SummaryItemPrice>
                  </SummaryItem>
                  <Button>Checkout Now</Button>
               </Summary>
             </Bottom>
          </Wrapper>
        <Footer />
    </Container>
  )
}
