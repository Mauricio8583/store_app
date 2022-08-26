import { CalendarToday, LocationSearching, MailOutline, PermIdentity, Phone, Publish } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 4;
    padding: 20px;
`

const UserTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const UserTitle = styled.h1`

`

const UserAddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    
`

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const UserShow = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
    box-shadow: -3px 8px 5px 5px #EEEEEE;
`

const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
    box-shadow: -3px 8px 5px 5px #EEEEEE;
    margin-left: 20px;
`

const UserShowTop = styled.div`
    display: flex;
    align-items: center;
`

const UserShowBottom = styled.div`
    margin-top: 20px;
`

const UserShowImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const UserShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

const UserShowUsername = styled.span`
    font-weight: 600;
`

const UserShowUserTitle = styled.span`
    font-weight: 300;
`

const UserShowTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`

const UserShowInfoTitle = styled.span`
    margin-left: 10px;
`

const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`

const UserUpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`

const UserUpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const UserUpdateLeft = styled.div`

`

const UserUpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const UserUpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const UserUpdateInput = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
`

const UserUpdateUpload = styled.div`
    display: flex;
    align-items: center;
`

const UserUpdateImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`

const UserUpdateUploadFile = styled.input`
    display: none;
`

const UserUpdateButton = styled.button`
    border: none;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`

export const User = () => {
  return (
    <Container>
        <UserTitleContainer>
            <UserTitle>Edit User</UserTitle>
            <UserAddButton>Create</UserAddButton>
        </UserTitleContainer>
        <UserContainer>
            <UserShow>
                <UserShowTop>
                    <UserShowImg src='https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000' /> 
                    <UserShowTopTitle>
                        <UserShowUsername>Jon Snow</UserShowUsername>
                        <UserShowUserTitle>Software Eingenere</UserShowUserTitle>
                    </UserShowTopTitle>                   
                </UserShowTop>
                <UserShowBottom>
                    <UserShowTitle>Account Details</UserShowTitle>
                    <UserShowInfo>
                       <PermIdentity style={{fontSize:"16px"}} />
                       <UserShowInfoTitle>jonsn99</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                       <CalendarToday style={{fontSize:"16px"}} />
                       <UserShowInfoTitle>15.06.1998</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowTitle>Contact Details</UserShowTitle>
                    <UserShowInfo>
                       <Phone style={{fontSize:"16px"}} />
                       <UserShowInfoTitle>+55 51 1234-5678</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                       <MailOutline style={{fontSize:"16px"}} />
                       <UserShowInfoTitle>jon.snow@email.com</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                       <LocationSearching style={{fontSize:"16px"}} />
                       <UserShowInfoTitle>Sao Paulo - BR</UserShowInfoTitle>
                    </UserShowInfo>
                    
                </UserShowBottom>
            </UserShow>
            <UserUpdate>
                <UserUpdateTitle>Edit</UserUpdateTitle>
                <UserUpdateForm>
                    <UserUpdateLeft>
                        <UserUpdateItem>
                            <label style={{marginBottom: "10px", fontSize: "14px"}}>Username</label>
                            <UserUpdateInput type="text" placeholder='jonsn99' />
                        </UserUpdateItem>   
                        <UserUpdateItem>
                            <label style={{marginBottom: "10px", fontSize: "14px"}}>Full Name</label>
                            <UserUpdateInput type="text" placeholder='jon snow' />
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <label style={{marginBottom: "10px", fontSize: "14px"}}>E-mail</label>
                            <UserUpdateInput type="text" placeholder='jon.snow@email.com' />
                        </UserUpdateItem>   
                        <UserUpdateItem>
                            <label style={{marginBottom: "10px", fontSize: "14px"}}>Phone</label>
                            <UserUpdateInput type="text" placeholder='+55 51 1234-5678' />
                        </UserUpdateItem>   
                        <UserUpdateItem>
                            <label style={{marginBottom: "10px", fontSize: "14px"}}>Address</label>
                            <UserUpdateInput type="text" placeholder='Sao Paulo - BR' />
                        </UserUpdateItem>   
                                            
                    </UserUpdateLeft>
                    <UserUpdateRight>
                        <UserUpdateUpload>
                            <UserUpdateImg src='https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000' />
                            <label htmlFor='file'><Publish style={{cursor: "pointer"}} /></label>
                            <UserUpdateUploadFile type='file' id='file'/>
                            
                        </UserUpdateUpload>
                        <UserUpdateButton>Update</UserUpdateButton>
                    </UserUpdateRight>
                </UserUpdateForm>
            </UserUpdate>
        </UserContainer>
    </Container>
  )
}
