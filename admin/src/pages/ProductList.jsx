import { DataGrid } from '@material-ui/data-grid'
import React, { useState } from 'react'
import styled from 'styled-components'
import { DeleteOutline } from '@material-ui/icons'
import { productRows } from '../dataTest'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 4;
`

const ProductListUser = styled.div`
    display: flex;
    align-items: center;
`

const ProductListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const ProductListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

export const ProductList = () => {

   const [data, setData] = useState(productRows);

   const handleDelete = (id) => {
     setData(data.filter((item) => item.id !== id))
   }

   const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
            <ProductListUser>
                <ProductListImg src={params.row.img} />
                {params.row.productName}
            </ProductListUser>
        )
    } },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160        
      
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 160,
        renderCell: (params) => {
            return (
                <>
                <Link to={"/product/" +params.row.id}>
                <ProductListEdit>Edit</ProductListEdit>
                </Link>
                <DeleteOutline style={{ color: "red", cursor: "pointer"}} onClick={()=>handleDelete(params.row.id)} />
                </>
            )
        }
    }
  ];

  return (
    <Container>
        <DataGrid 
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection />
    </Container>
  )
}
