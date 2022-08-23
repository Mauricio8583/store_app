import React from 'react'
import styled from 'styled-components'
import { FeaturedInfo } from '../components/FeaturedInfo'

const Container = styled.div`
   flex: 4;
`

export const Home = () => {
  return (
    <Container>
        <FeaturedInfo />
    </Container>
  )
}
