import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls'

const Container = styled.div`
     flex: 4;
     display: flex;
     align-items: center;
     justify-content: center
`

export const Login = () => {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();   

   const handleClick = (e) => {
       e.preventDefault();
       login(dispatch, username)
       
   }

  return (
    <Container>
        <input type='text' placeholder='username' onChange={e=>setUsername(e.target.value)} />
        <input type='password' placeholder='password' onChange={e=>setPassword(e.target.value)} />
        <button onClick={handleClick}>Login</button>
    </Container>
  )
}
