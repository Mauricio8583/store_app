import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBasket} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'

const Container = styled.div`
     height: 75px;
     background-color: lightblue;
     ${mobile({ height: "50px" })};

`

const Wrapper = styled.div`
     padding: 10px 20px;
     display: flex;
     justify-content: space-beteween;
     align-items: center;
     ${mobile({ padding: "10px 0px" })};

`

const Left = styled.div`
     flex: 1;
     display: flex;
     align-items: center;

`
const Language = styled.span`
     font-size: 14px;
     cursor: pointer;
     ${mobile({ display: "none" })};

`

const SerachContainer = styled.div`
     border: 1px solid lightgrey;
     display: flex;
     align-items: center;
     margin-left: 25px;
     padding: 5px;

`

const Input = styled.input`
     border: none;
     ${mobile({ width: "50px" })};

`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}

`

const ItemMenu = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};

`

const Center = styled.div`
    flex: 1;
    text-align: center;

`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2 , justifyContent: "center" })};

`

export const Navbar = () => {
   const quantity = useSelector(state => state.cart.quantity)

   return (
    <Container>
        <Wrapper>
          <Left>
             <Language>EN</Language>

           <SerachContainer>
            <Input placeholder='Search' />
            <Search style={{ color: "grey", fontSize: 16}} />
           </SerachContainer>

          </Left>

          <Center>
             <Logo>Store App</Logo>
          </Center>

          <Right>
             <ItemMenu>Register</ItemMenu>
             <ItemMenu>Sign In</ItemMenu>
             <ItemMenu>
               <Badge badgeContent={quantity} color="primary">
                  <ShoppingBasket />
               </Badge>
             </ItemMenu>
          </Right>
        </Wrapper>
    </Container>
  )
}

