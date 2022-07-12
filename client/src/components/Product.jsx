import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 5;
    min-width: 280px;
    height: 250px;
    display: flex;
    align-items: center;
    justfy-content: center;
    background-color: #f5fbfd;
    position: relative;

`

const Image = styled.img`
    height: 75%;
    z-index: 2;

`

const Info = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 3;
   display: flex;
   align-items: center;
   justfy-content: center;

`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justfy-content: center;
    margin: 10px;

`

export const Product = ({item}) => {
  return (
    <Container>

        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />

          </Icon>
          <Icon>
            <SearchOutlined />
            
          </Icon>
          <Icon>
            <FavoriteBorder />
            
          </Icon>
        </Info>
    </Container>
  )
}
