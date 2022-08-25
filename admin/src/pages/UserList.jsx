import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'

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

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <UserListUser>
                    <UserListImg src={params.row.avatar} />
                    {params.row.username}
                </UserListUser>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120
        },
        {
          field: 'transition',
          headerName: 'Transition',
          width: 160        
          
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                    <UserListEdit>Edit</UserListEdit>
                    <DeleteOutline style={{ color: "red", cursor: "pointer"}} />
                    </>
                )
            }
        }
      ];
      
      const rows = [
        { id: 1, username: 'Jon Snow', avatar: "https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000", email: "Jon@email.com", status: "Active", transition: "$120" },
        { id: 2, username: 'Jon Snow', avatar: "https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000", email: "Jon@email.com", status: "Active", transition: "$120" },
        { id: 3, username: 'Jon Snow', avatar: "https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000", email: "Jon@email.com", status: "Active", transition: "$120" },
        { id: 4, username: 'Jon Snow', avatar: "https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000", email: "Jon@email.com", status: "Active", transition: "$120" },
        { id: 5, username: 'Jon Snow', avatar: "https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000", email: "Jon@email.com", status: "Active", transition: "$120" },
        { id: 6, username: 'Jon Snow', avatar: "https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000", email: "Jon@email.com", status: "Active", transition: "$120" },
        
      ];

  return (
    <Container>
        <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection  />
    </Container>
  )
}
