import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { publicRequest } from '../request'

const Container = styled.div`
    flex: 4;
`

const NewUserTitle = styled.h1`

`

const NewUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const NewUserItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
    
`

const NewUserLabels = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
`

const NewUserGender = styled.div`

`

const NewUserSelect = styled.select`
    height: 40px;
    border-radius: 5px;
`

const NewUserInput = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`

const NewUserButton = styled.button`
    width: 150px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-left: 30px;
    margin-top: 10px;
    cursor: pointer;
`

export const NewUser = () => {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
        
    }

    const handleClick = async (e) => {
        e.preventDefault();
        await publicRequest.post("/auth/register", inputs);
        navigate("/")                
    }

  return (
    <Container>
        <NewUserTitle>New User</NewUserTitle>

        <NewUserForm>
            <NewUserItem>
                <NewUserLabels>Username</NewUserLabels>
                <NewUserInput type="text" placeholder='Jon' name='username' onChange={handleChange}></NewUserInput> 
            </NewUserItem>
            
            <NewUserItem>
                <NewUserLabels>E-mail</NewUserLabels>
                <NewUserInput type="email" placeholder='jonsmith@email.com' name='email' onChange={handleChange}></NewUserInput> 
            </NewUserItem>
            <NewUserItem>
                <NewUserLabels>Password</NewUserLabels>
                <NewUserInput type="password" placeholder='password' name='password' onChange={handleChange}></NewUserInput> 
            </NewUserItem>
            <NewUserButton onClick={handleClick}>Create</NewUserButton>
        </NewUserForm>
    </Container>
  )
}
