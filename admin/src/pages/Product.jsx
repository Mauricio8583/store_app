import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Chart } from '../components/Chart'
import { productData } from '../dataTest'
import { Publish } from '@material-ui/icons'

const Container = styled.div`
    flex: 4;
    padding: 20px;
`

const ProductTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ProductTitle = styled.h1`

`

const ProductAddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`

const ProductTop = styled.div`
    display: flex;
`

const ProductBottom = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
    box-shadow: -3px 8px 5px 5px #EEEEEE;
`

const ProductTopLeft = styled.div`
    flex: 1;
`

const ProductTopRight = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: -3px 8px 5px 5px #EEEEEE; 
    box-shadow: -3px 8px 5px 5px #EEEEEE;
`

const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
`

const ProductInfoBottom = styled.div`
    margin-top: 10px;
`

const ProductInfoImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`

const ProductInfoName = styled.span`
    font-weight: 600;
`

const ProductInfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`

const ProductInfoKey = styled.span`

`

const ProductInfoValue = styled.span`
    font-weight: 300;
`

const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`

const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductUpload = styled.div`
    display: flex;
    align-items: center;
`

const ProductUploadImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`

const ProductButton = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

export const Product = () => {
  return (
    <Container>
        <ProductTitleContainer>
            <ProductTitle>Product</ProductTitle>
            <Link to="/newProduct">
               <ProductAddButton>Create</ProductAddButton>
            </Link>
        </ProductTitleContainer>
        <ProductTop>
            <ProductTopLeft>
                <Chart data={productData} dataKey='Sales' title='Sales Analytics' />
            </ProductTopLeft> 
            <ProductTopRight>
            <ProductInfoTop>
                <ProductInfoImg src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12purple-202109_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1646335268247' />
                <ProductInfoName>Apple Phone</ProductInfoName>                
            </ProductInfoTop>
            <ProductInfoBottom>
                <ProductInfoItem>
                    <ProductInfoKey>id:</ProductInfoKey>
                    <ProductInfoValue>123</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                    <ProductInfoKey>sales:</ProductInfoKey>
                    <ProductInfoValue>5000</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                    <ProductInfoKey>active:</ProductInfoKey>
                    <ProductInfoValue>yes</ProductInfoValue>
                </ProductInfoItem>
                <ProductInfoItem>
                    <ProductInfoKey>in stock:</ProductInfoKey>
                    <ProductInfoValue>no</ProductInfoValue>
                </ProductInfoItem>
            </ProductInfoBottom>
            </ProductTopRight>           
        </ProductTop>
        <ProductBottom>
            <ProductForm>
                <ProductFormLeft>
                    <label style={{marginBottom: '10px', color:'gray'}}>Product Name</label>
                    <input type="text" placeholder='Apple Phones' style={{marginBotton: '10px', border: 'none', padding: '5px', borderBottom: '1px solid black'}} />
                    <label style={{marginBottom: '10px', color:'gray'}}>In Stock</label>
                    <select name='inStock' id='InStock'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select> 
                    <label style={{marginBottom: '10px', color:'gray'}}>Active</label>
                    <select name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select> 
                </ProductFormLeft>
                <ProductFormRight>
                    <ProductUpload>
                        <ProductUploadImg src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12purple-202109_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1646335268247' />
                        <label htmlFor='file'>
                            <Publish />                            
                        </label>
                        <input type='file' id='file' style={{display: 'none'}}></input>
                    </ProductUpload>
                    <ProductButton>Update</ProductButton>
                </ProductFormRight>
            </ProductForm>            
        </ProductBottom>
    </Container>
  )
}
