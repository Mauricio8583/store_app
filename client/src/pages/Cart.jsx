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
                         Price
                    </PriceDetail>
                  </Product>
               </Info>
               <Summary>
                  Summary
               </Summary>
            </Bottom>
          </Wrapper>
        <Footer />
    </Container>
  )
}
