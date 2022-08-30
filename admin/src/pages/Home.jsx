import React from 'react'
import styled from 'styled-components'
import { Chart } from '../components/Chart'
import { FeaturedInfo } from '../components/FeaturedInfo'
import { LargeWidget } from '../components/LargeWidget'
import { SmallWidget } from '../components/SmallWidget'
import { userData } from '../dataTest'

const Container = styled.div`
   flex: 4;
`

const HomeWidget = styled.div`
   display: flex;
   margin: 20px;
`

export const Home = () => {
  return (
    <Container>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active Users" />
        <HomeWidget>
          <SmallWidget />
          <LargeWidget />
        </HomeWidget>
    </Container>
  )
}
