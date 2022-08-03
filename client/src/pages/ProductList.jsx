import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Annoucement } from '../components/Annoucement'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Products } from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`


`

const FilterContainer = styled.div`
    display: flex;
    justfy-content: space-between;

`

const Title = styled.h1`
    margin: 20px;

`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "75%", display: "flex", flexDirection: "column" })};    

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })};

`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })};

`

const Option = styled.option`


`

export const ProductList = () => {
   const location = useLocation();
   const cat = location.pathname.split("/")[2];
   const [filter, setFilter] = useState({});
   const [sort, setSort] = useState("newest");

   const handleFilters = (e) => {
       const value = e.target.value;
       setFilter({
        ...filter,
        [e.target.name]: value
       })
   }

   

  return (
    <Container>
        <Annoucement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option disabled>Color</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select name='size' onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option>Small</Option>
                    <Option>Medium</Option>
                    <Option>Large</Option>
                    <Option>Kids</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filter={filter} sort={sort} />
        <Newsletter />
        <Footer />
    </Container>
  )
}
