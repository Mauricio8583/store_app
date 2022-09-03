import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
     height: 100vh;
     flex: 4;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center
`

export const Login = () => {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();   

   const handleClick = (e) => {
       e.preventDefault();
       login(dispatch, {username, password})
       navigate("/")       
   }

  return (
    <Container>
        <input type='text' placeholder='username' onChange={e=>setUsername(e.target.value)} style={{padding:"10px", marginBottom:"10px"}} />
        <input type='password' placeholder='password' onChange={e=>setPassword(e.target.value)} style={{padding:"10px", marginBottom:"10px"}} />
        <button onClick={handleClick} style={{padding:"10px", width:"100px"}}>Login</button>
    </Container>
  )
}
