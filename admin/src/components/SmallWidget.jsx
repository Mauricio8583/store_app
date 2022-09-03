import { Visibility } from '@material-ui/icons'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../request'

const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
    box-shadow: -3px 8px 5px 5px #EEEEEE;
    padding: 20px;
    margin-right: 20px;
`

const SmallWidgetTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
`

const SmallWidgetList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const SmallWidgetListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`

const SmallWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const SmallWidgetUser = styled.div`
    display: flex;
    flex-direction: column;
`

const SmallWidgetUsername = styled.span`
    font-weight: 600;
`

const SmallWidgetUserJob = styled.span`
    font-weight: 300;
`

const SmallWidgetButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`

export const SmallWidget = () => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const getUsers = async () => {
            const res = await userRequest.get("/users/?new=true");
            setUsers(res.data)
        }
        getUsers()
    }, [])

  return (
    <Container>
        <SmallWidgetTitle>New Join Members</SmallWidgetTitle>
        <SmallWidgetList>
            <SmallWidgetListItem>
                <SmallWidgetImg src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                <SmallWidgetUser>
                    <SmallWidgetUsername>Joan Kerer</SmallWidgetUsername>
                    <SmallWidgetUserJob>Software Engeneere</SmallWidgetUserJob>
                </SmallWidgetUser>
                <SmallWidgetButton>
                    <Visibility />Display
                </SmallWidgetButton>
            </SmallWidgetListItem>
            <SmallWidgetListItem>
                <SmallWidgetImg src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                <SmallWidgetUser>
                    <SmallWidgetUsername>Joan Kerer</SmallWidgetUsername>
                    <SmallWidgetUserJob>Software Engeneere</SmallWidgetUserJob>
                </SmallWidgetUser>
                <SmallWidgetButton>
                    <Visibility />Display
                </SmallWidgetButton>
            </SmallWidgetListItem>
            <SmallWidgetListItem>
                <SmallWidgetImg src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                <SmallWidgetUser>
                    <SmallWidgetUsername>Joan Kerer</SmallWidgetUsername>
                    <SmallWidgetUserJob>Software Engeneere</SmallWidgetUserJob>
                </SmallWidgetUser>
                <SmallWidgetButton>
                    <Visibility />Display
                </SmallWidgetButton>
            </SmallWidgetListItem>
            <SmallWidgetListItem>
                <SmallWidgetImg src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                <SmallWidgetUser>
                    <SmallWidgetUsername>Joan Kerer</SmallWidgetUsername>
                    <SmallWidgetUserJob>Software Engeneere</SmallWidgetUserJob>
                </SmallWidgetUser>
                <SmallWidgetButton>
                    <Visibility />Display
                </SmallWidgetButton>
            </SmallWidgetListItem>
            <SmallWidgetListItem>
                <SmallWidgetImg src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                <SmallWidgetUser>
                    <SmallWidgetUsername>Joan Kerer</SmallWidgetUsername>
                    <SmallWidgetUserJob>Software Engeneere</SmallWidgetUserJob>
                </SmallWidgetUser>
                <SmallWidgetButton>
                    <Visibility />Display
                </SmallWidgetButton>
            </SmallWidgetListItem>
        </SmallWidgetList>
    </Container>
  )
}
