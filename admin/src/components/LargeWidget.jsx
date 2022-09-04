import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../../../admin/src/request'
import { format } from 'timeago.js'

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
    box-shadow: -3px 8px 5px 5px #EEEEEE;
    padding: 20px;
`

const LargeWidgetTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`

const LargeWidgetTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`

const LargeWidgetTr = styled.tr`

`

const LargeWidgetTh = styled.th`
    text-align: left;
`

const LargeWidgetUser = styled.td`
    display: flex;
    align-items: center;
`

const LargeWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const LargeWidgetName = styled.span`

`

const LargeWidgetDate = styled.td`
    font-weight: 300;
`

const LargeWidgetAmount = styled.td`
    font-weight: 300;
`

const LargeWidgetStatus = styled.td`

`

const LargeWidgetButton = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.value === "Approved" ? "lightgreen" : props.value === "Decline" ? "#fff0f1" : props.value === "pending" ? "lightyellow" : "lightgray" };
    color: ${(props) => props.value === "Approved" ? "#3bb077" : props.value === "Decline" ? "#d95087" : props.value === "pending" ? "#2a7ade" : "black"};
    cursor: pointer;
    
`


export const LargeWidget = () => {

     const [orders, setOrders] = useState([]);

     useEffect(() => {
        const getOrders = async () => {
          const res = await userRequest.get("/orders");
          setOrders(res.data)
        }
        getOrders()
     }, [])

     

  const Button = ({value}) => {
    return <LargeWidgetButton value={value}>{value}</LargeWidgetButton>
  }

  return (
    <Container>
        <LargeWidgetTitle>Latest Transections</LargeWidgetTitle>
        <LargeWidgetTable>
          <LargeWidgetTr>
              <LargeWidgetTh>Customer</LargeWidgetTh>
              <LargeWidgetTh>Date</LargeWidgetTh>
              <LargeWidgetTh>Amount</LargeWidgetTh>
              <LargeWidgetTh>Status</LargeWidgetTh>
          </LargeWidgetTr>
          { orders.map((order) => (
          <LargeWidgetTr>
            <LargeWidgetUser>
              
              <LargeWidgetName>{order.userID}</LargeWidgetName>
            </LargeWidgetUser>
            <LargeWidgetDate>{format(order.createdAt)}</LargeWidgetDate>
            <LargeWidgetAmount>$ {order.amount}</LargeWidgetAmount>
            <LargeWidgetStatus><Button value={order.status}></Button></LargeWidgetStatus>
          </LargeWidgetTr>
          ))}
        </LargeWidgetTable>
    </Container>
  )
}
