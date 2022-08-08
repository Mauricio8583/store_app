import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Product } from './Product'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

export const Products = ({cat, filter, sort}) => {

  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try{
        const res = await axios.get(cat ? `http://localhost:4000/api/products?category=${cat}` : "http://localhost:4000/api/products");
        setProducts(res.data)

      }catch(err){

      }
    }
    getProducts()

  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => Object.entries(filter).every(([key, value]) => 
        item[key].includes(value)
      ))
    )

  }, [products ,cat, filter]);

  
  useEffect(() => {
    if(sort==="newest"){
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      )
    }
    else if(sort==="asc"){
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      )
    }
    else if(sort==="desc"){
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => b.price - a.price)
      )
    }
  }, [sort])

  return (
    <Container>
        {cat ?  filteredProducts.map((item) => (
            <Product item={item} key={item.id} />
        )): products.slice(0,8).map((item) => (
          <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}
