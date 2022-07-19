import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255, 0.5), rgba(255, 255, 255, 0.5)), url('https://s2.glbimg.com/LWvvWBPr6nCrfpQAvtEJvmXSBek=/smart/e.glbimg.com/og/ed/f/original/2022/05/10/adidas_x_gucci_abre.jpg')center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;

`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;

`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

`

export const Register = () => {
  return (
    <Container>
         <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder='Name'></Input>
                <Input placeholder='Last Name'></Input>
                <Input placeholder='Username'></Input>
                <Input placeholder='Email'></Input>
                <Input placeholder='Password'></Input>
                <Input placeholder='Confirm Password'></Input>
                <Agreement>By Creating an account, I consent to the processing of my personal data according with PRIVACY POLICY</Agreement>
                <Button>Create</Button>
            </Form>
         </Wrapper>
    </Container>
  )
}
