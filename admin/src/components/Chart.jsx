import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
    box-shadow: -3px 8px 5px 5px #EEEEEE;
`

const ChartTitle = styled.h3`
    margin-bottom: 20px;
`

export const Chart = ({title, data, dataKey, grid}) => {

    

  return (
    <Container>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='black' />
                <Line type="monotone" dataKey={dataKey} />
                <Tooltip />
                { grid && <CartesianGrid stroke='lightgray' strokeDasharray="5 5" />}
            </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}
