import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../request'

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
`

const FeaturedItem = styled.div`
   flex: 1;
   margin: 0px 20px;
   padding: 30px;
   border-radius: 10px;
   cursor: pointer;
   -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
   box-shadow: -3px 8px 5px 5px #EEEEEE;
`

const FeaturedTitle = styled.span`
   font-size: 20px;
`

const FeaturedMoney = styled.div`
   margin: 10px 0px;
   display: flex;
   align-items: center;
`

const MoneySpan = styled.span`
   font-size: 30px;
   font-weight: 600;
`

const MoneyRateSpan = styled.span`
   display: flex;
   align-items: center;
   margin-left: 20px;
`

const FeaturedSub = styled.span`
   font-size: 15px;
   color: gray;
`

export const FeaturedInfo = () => {

   const [income, setIncome] = useState([]);

   useEffect(() => {
      const getIncome = async () => {
         const res = await userRequest.get("/orders/income");
         setIncome(res.data)
      }
      getIncome()
   }, []);

   

  return (
    <Container>
        <FeaturedItem>
            <FeaturedTitle>Revanue</FeaturedTitle>
            <FeaturedMoney>
                <MoneySpan>$2,40</MoneySpan>
                <MoneyRateSpan>-11.4 <ArrowDownward /></MoneyRateSpan>
            </FeaturedMoney>
            <FeaturedSub>Compare to Last Month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Sales</FeaturedTitle>
            <FeaturedMoney>
                <MoneySpan>$4,41</MoneySpan>
                <MoneyRateSpan>+6 <ArrowUpward /></MoneyRateSpan>
            </FeaturedMoney>
            <FeaturedSub>Compare to Last Month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoney>
            <MoneySpan>$6,72</MoneySpan>
            <MoneyRateSpan>-5.8 <ArrowDownward /></MoneyRateSpan>
        </FeaturedMoney>
        <FeaturedSub>Compare to Last Month</FeaturedSub>
    </FeaturedItem>
    </Container>
  )
}
