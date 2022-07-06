import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
     width: 100%;
     height: 100vh;
     display: flex;
     position: relative;

`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;

`
const Wrapper = styled.div`
     height: 100%;

`
const Slide = styled.div`
     display: flex;
     align-items: center;
     width: 100vw;
     height: 100vh;

`
const ImgContainer = styled.div`
      flex: 1;
      height: 100%;
      margin-top: 40px;

`
const InfoContainer = styled.div`
      flex: 1;
      padding: 50px;

`
const Image = styled.img`
     height: 70%;

`
const Title = styled.h1`
      font-size: 70px;

`
const Desc = styled.p`
     margin: 50px 0px;
     font-size: 20px;
     font-weight: 500;
     letter-spacing: 2px;

`
const Button = styled.button`
     padding: 10px;
     font-size: 20px;
     background-color: transparent;
     cursor: pointer;

`

export const Slider = () => {
  return (
    <Container>
        <Arrow direction="left" >
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer>
               <Image src='https://cdn-fnknc.nitrocdn.com/jwqHRGAzpUgGskUSHlppNQzwuXgXIKwg/assets/static/optimized/rev-e6f9055/wp-content/uploads/2021/12/luca-faloni-denim-shirt.jpeg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Blue Shirt</Title>
                <Desc>50% off only for this summer!!</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" >
            <ArrowRightOutlined />
        </Arrow>
    </Container>

  )
}
