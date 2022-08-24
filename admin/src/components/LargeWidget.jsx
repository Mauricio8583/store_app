import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
    box-shadow: -3px 8px 5px 5px #EEEEEE;
    padding: 20px;
`

export const LargeWidget = () => {
  return (
    <Container>
        LargeWidget
    </Container>
  )
}
