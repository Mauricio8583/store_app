import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;

`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`

const Center = styled.div`
    flex: 1;
    padding: 20px;

`

const Right = styled.div`
    flex: 1;

`

const Logo = styled.h1`


`

const Desc = styled.p`
   margin: 20px 0px;

`

const SocialContainer = styled.div`
   display: flex;

`

const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props => props.bg};
   display: flex;
   align-items: center;
   justfy-content: center;
   margin-right: 20px;

`

const Title = styled.h3`
    margin-bottom: 30px;

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px; 

`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

const Payment = styled.img`
    width: 50%;
    

`

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Logo</Logo>
            <Desc>
                Final Pages description
            </Desc>
            <SocialContainer>
                <SocialIcon bg="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon bg="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon bg="55ACEE">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Acessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
           <Title>Contact</Title>
           <ContactItem>
              <Room style={{marginRight: "10px"}} />
               Address Street
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}} />
               + 12345678
            </ContactItem>   
            <ContactItem>
                <Mail style={{marginRight: "10px"}} />
               mauricio@email.com
            </ContactItem>
            <Payment src='https://www.creditoparatodos.org/wp-content/uploads/2020/04/bandeiras-de-cartao-mundipagg-e1585858099678.png' />       
        </Right>       
    </Container>
  )
}
