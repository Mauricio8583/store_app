import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'

const Container = styled.div`
     height: 60px;
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

`

const Center = styled.div`
    flex: 1;

`
const Right = styled.div`
    flex: 1;

`

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
             <Language>EN</Language>

           <SerachContainer>
            
            <Search />
           </SerachContainer>

          </Left>

          <Center>
             Center
          </Center>

          <Right>
             Right
          </Right>
        </Wrapper>
    </Container>
  )
}

