import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from '../responsive'

const Container = styled.div`
     flex: 1;
     margin: 6px;
     height: 70vh;
     position: relative;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh" })};

`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`

const Button = styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: white;
    color: grey;
    font-weight: 500;

`


export const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/list/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}
