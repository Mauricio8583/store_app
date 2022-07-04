import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBasket} from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Container = styled.div`
     height: 75px;
     background-color: lightblue;

`

const Wrapper = styled.div`
     padding: 10px 20px;
     display: flex;
     justify-content: space-beteween;
     align-items: center;

`

const Left = styled.div`
     flex: 1;
     display: flex;
     align-items: center;

`
const Language = styled.span`
     font-size: 14px;
     cursor: pointer;

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

`

const Logo = styled.h1`
    font-weight: bold;

`

const ItemMenu = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

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

`

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
             <Language>EN</Language>

           <SerachContainer>
            <Input />
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
               <Badge badgeContent={4} color="primary">
                  <ShoppingBasket />
               </Badge>
             </ItemMenu>
          </Right>
        </Wrapper>
    </Container>
  )
}

