import React from 'react'
import styled from 'styled-components'

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
    cursor: pointer;
`

export const NewUser = () => {
  return (
    <Container>
        <NewUserTitle>New User</NewUserTitle>

        <NewUserForm>
            <NewUserItem>
                <NewUserLabels>Username</NewUserLabels>
                <NewUserInput type="text" placeholder='Jon'></NewUserInput> 
            </NewUserItem>
            <NewUserItem>
                <NewUserLabels>Full Name</NewUserLabels>
                <NewUserInput type="text" placeholder='Jon Smith'></NewUserInput> 
            </NewUserItem>
            <NewUserItem>
                <NewUserLabels>E-mail</NewUserLabels>
                <NewUserInput type="email" placeholder='jonsmith@email.com'></NewUserInput> 
            </NewUserItem>
            <NewUserItem>
                <NewUserLabels>Password</NewUserLabels>
                <NewUserInput type="password" placeholder='password'></NewUserInput> 
            </NewUserItem>
            <NewUserItem>
                <NewUserLabels>Phone</NewUserLabels>
                <NewUserInput type="text" placeholder='+1 123 4567'></NewUserInput>
            </NewUserItem>
            <NewUserItem>
                <NewUserLabels>Address</NewUserLabels>
                <NewUserInput type="text" placeholder='New York USA'></NewUserInput> 
            </NewUserItem>
            <NewUserItem>
              <NewUserLabels>Gender</NewUserLabels>
                <NewUserGender>
                  <input type="radio" name='gender' id='male' value='male' style={{marginTop: "15px"}}></input>
                  <label htmlFor='male' style={{margin: "10px", fontSize: "14px", color: "#555" }}>Male</label>
                  <input type="radio" name='gender' id='female' value='female' style={{marginTop: "15px"}}></input>
                  <label htmlFor='female' style={{margin: "10px", fontSize: "14px", color: "#555" }}>Female</label>
                  <input type="radio" name='gender' id='others' value='others' style={{marginTop: "15px"}}></input>
                  <label htmlFor='others' style={{margin: "10px", fontSize: "14px", color: "#555" }}>Others</label>                  
                </NewUserGender>  
            </NewUserItem>
            <NewUserItem>
                 <NewUserLabels>Active</NewUserLabels>
                <NewUserSelect name='active' id='active'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </NewUserSelect>
            </NewUserItem>
            <NewUserButton>Create</NewUserButton>
        </NewUserForm>
    </Container>
  )
}
