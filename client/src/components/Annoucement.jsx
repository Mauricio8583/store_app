import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

`

export const Annoucement = () => {
  return (
    <Container>
        Super deals available over $30!!!
    </Container>
  )
}
