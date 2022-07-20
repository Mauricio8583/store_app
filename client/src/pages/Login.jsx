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
    width: 25%;
    background-color: white;

`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;    

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

`


export const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder='Username'></Input>
                <Input placeholder='Password' type="password"></Input>
                <Button>Login</Button>
                <Link>Forgot Password</Link>
                <Link>Create Account</Link>
            </Form>
         </Wrapper>
    </Container>
  )
}
