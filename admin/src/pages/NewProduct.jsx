import React from 'react'
import styled from 'styled-components'
import { Publish } from '@material-ui/icons'

const Container = styled.div`
    flex: 4;
`
const ProductForm = styled.form`
    margin-top: 10px;
`
const ProductFormLeft = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-botton: 10px;
`

const ProductFormRight = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-botton: 10px;
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

export const NewProduct = () => {
  return (
    <Container>
        <ProductForm>
                <ProductFormLeft>
                    <label style={{marginBottom: '10px', color:'gray'}}>Product Name</label>
                    <input type="text" placeholder='Apple Phones' style={{marginBotton: '10px', border: 'none', padding: '5px', borderBottom: '1px solid black'}} />
                    <label style={{marginBottom: '10px', color:'gray'}}>In Stock</label>
                    <select name='inStock' id='InStock' style={{padding: '10px'}}>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select> 
                    <label style={{marginBottom: '10px', color:'gray'}}>Active</label>
                    <select name='active' id='active' style={{padding: '10px'}}>
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
    </Container>
  )
}
