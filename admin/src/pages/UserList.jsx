import React, { useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from '../dataTest'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { userRequest } from '../request'

const Container = styled.div`
    flex: 4;
`

const UserListUser = styled.div`
    display: flex;
    align-items: center;
`

const UserListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const UserListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

export const UserList = () => {

    const [users, setUsers] = useState([]);

    const handleDelete = async (id) => {
        await userRequest.delete(`/users/${id}`);        
    }

    useEffect(() => {
         const getUsers = async () => {
            const res = await userRequest.get("/users/");
            setUsers(res.data);            
         } 
         getUsers()       
    }, []);



    const columns = [
        { field: '_id', headerName: 'ID', width: 300 },
        { field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <UserListUser>
                    <UserListImg src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000" />
                    {params.row.username}
                </UserListUser>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        
        
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={"/user/" +params.row._id}>
                    <UserListEdit>Edit</UserListEdit>
                    </Link>
                    <DeleteOutline style={{ color: "red", cursor: "pointer"}} onClick={()=>handleDelete(params.row._id)} />
                    </>
                )
            }
        }
      ];
      
      

  return (
    <Container>
        <DataGrid rows={users} disableSelectionOnClick columns={columns} pageSize={5} getRowId={(row) => row._id } checkboxSelection  />
    </Container>
  )
}
