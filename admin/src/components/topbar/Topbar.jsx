import React from 'react'
import styled from 'styled-components'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`

const Wrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopLeft = styled.div`

`

const TopRight = styled.div`
   display: flex;
   align-items: center;
`

const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`

const Icons = styled.div`
   position: relative;
   cursor: pointer;
   margin-right: 10px;
`

const IconBadge = styled.span`
    position: absolute;
    width: 20px;
    height: 20px;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
`

const AvatarImg = styled.img`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   cursor: pointer;
`

export const Topbar = () => {
  return (
    <Container>
        <Wrapper>
            <TopLeft>
                <Logo>Admin</Logo>
            </TopLeft>
            <TopRight>
                <Icons>
                    <NotificationsNone />
                    <IconBadge>2</IconBadge>
                </Icons>
                <Icons>
                    <Language />
                    
                </Icons>
                <Icons>
                    <Settings /> 
                    
                </Icons>
                <AvatarImg src='https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000'/>
            </TopRight>
        </Wrapper>
    </Container>
  )
}
