import { Feedback, LineStyle, Mail, Message, MonetizationOn, PermIdentity, Report, Storefront, Timeline, TrendingUp, Work} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
   flex: 1;
   height: calc(100vh - 50px);
   background-color: rgb(251, 251, 255);
   position: sticky;
   top: 50px;
`

const Wrapper = styled.div`
   padding: 20px;
   color: #555;
`

const Menu = styled.div`
   margin-bottom: 10px;
`

const SidebarTitle = styled.h3`
   font-size: 13px;
   color: rgb(187, 186, 186);
`

const SidebarList = styled.ul`
   list-style: none;
   padding: 5px;
`

const SidebarListItem = styled.li`
   padding: 5px;
   cursor: pointer;
   display: flex;
   align-items: center;
   border-radius: 10px;

   &:hover{
    background-color: rgb(228, 228, 250);
   }
`

export const Sidebar = () => {
  return (
    <Container>
        <Wrapper>
            <Menu>
                <SidebarTitle>Dashboard</SidebarTitle>
                <SidebarList>
                    <SidebarListItem><LineStyle />Home</SidebarListItem>
                    <SidebarListItem><Timeline />Analytics</SidebarListItem>
                    <SidebarListItem><TrendingUp />Sales</SidebarListItem>
                </SidebarList>
            </Menu>
            <Menu>
                <SidebarTitle>Quick Menu</SidebarTitle>
                <SidebarList>
                    <Link to="/users" style={{textDecoration: 'none', color: 'inherit'}}>
                      <SidebarListItem><PermIdentity />Users</SidebarListItem>
                    </Link>
                    <Link to="/products" style={{textDecoration: 'none', color: 'inherit'}}>
                       <SidebarListItem><Storefront />Products</SidebarListItem>
                    </Link>
                    <SidebarListItem><MonetizationOn />Transitions</SidebarListItem>
                    <SidebarListItem><TrendingUp />Sales</SidebarListItem>
                </SidebarList>
            </Menu>
            <Menu>
                <SidebarTitle>Notifications</SidebarTitle>
                <SidebarList>
                    <SidebarListItem><Mail />Mail</SidebarListItem>
                    <SidebarListItem><Feedback />Feedback</SidebarListItem>
                    <SidebarListItem><Message />Messages</SidebarListItem>
                </SidebarList>
            </Menu>
            <Menu>
                <SidebarTitle>Staff</SidebarTitle>
                <SidebarList>
                    <SidebarListItem><Work />Manage</SidebarListItem>
                    <SidebarListItem><Timeline />Analytics</SidebarListItem>
                    <SidebarListItem><Report />Reports</SidebarListItem>
                </SidebarList>
            </Menu>
        </Wrapper>
    </Container>
  )
}
