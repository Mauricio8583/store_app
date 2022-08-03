import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
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

  console.log(filteredProducts);

  return (
    <Container>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}
