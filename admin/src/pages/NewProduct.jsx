import React from 'react'
import styled from 'styled-components'
import { Publish } from '@material-ui/icons'
import { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import app from '../firebase'
import { useDispatch } from 'react-redux'
import { addProducts } from '../redux/apiCalls'

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

    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const [colors, setColors] = useState([]);
    const [size, setSize] = useState([]);
    const dispatch = useDispatch();    

    const handleChange = (e) => {
        setInputs(prev=> {
            return {...prev, [e.target.name]: e.target.value}
        })
    };

    const handleCat = (e) => {
        setCat(e.target.value.split(','))
    }
    const handleColors = (e) => {
        setColors(e.target.value.split(','))
    }
    const handleSize = (e) => {
        setSize(e.target.value.split(','))
    }

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

         // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
         // 2. Error observer, called on failure
       // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
          (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
             case 'paused':
               console.log('Upload is paused');
                   break;
             case 'running':
               console.log('Upload is running');
                   break;
             default:  
          }
       },
       (error) => {
    // Handle unsuccessful uploads
         },
        () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const products = {...inputs, img: downloadURL, categories: cat, color: colors, size: size};
          addProducts(products, dispatch)          
        });
    }
   );
                
    }

    

  return (
    <Container>
        <ProductForm>
                <ProductFormLeft>
                    <label style={{marginBottom: '10px', color:'gray'}}>Product Name</label>
                    <input type="text" name='title' placeholder='Apple Phones' onChange={handleChange} style={{marginBotton: '10px', border: 'none', padding: '5px', borderBottom: '1px solid black'}} />
                    <label style={{marginBottom: '10px', color:'gray'}}>Description</label>
                    <input type="text" name='desc' placeholder='description' onChange={handleChange} style={{marginBotton: '10px', border: 'none', padding: '5px', borderBottom: '1px solid black'}} />
                    <label style={{marginBottom: '10px', color:'gray'}}>Price</label>
                    <input type="number" name='price' placeholder='100' onChange={handleChange} style={{marginBotton: '10px', border: 'none', padding: '5px', borderBottom: '1px solid black'}} />
                    <label style={{marginBottom: '10px', color:'gray'}}>Colors</label>
                    <input type="text" name='color' placeholder='100' onChange={handleColors} style={{marginBotton: '10px', border: 'none', padding: '5px', borderBottom: '1px solid black'}} />
                    <label style={{marginBottom: '10px', color:'gray'}}>Size</label>
                    <input type="text" name='size' placeholder='100' onChange={handleSize} style={{marginBotton: '10px', border: 'none', padding: '5px', borderBottom: '1px solid black'}} />
                    <label style={{marginBottom: '10px', color:'gray'}}>Category</label>
                    <input type="text" placeholder='Skirts, Shirts, Ties, etc' onChange={handleCat} style={{marginBotton: '10px', border: 'none', padding: '5px', borderBottom: '1px solid black'}} />
                    <label style={{marginBottom: '10px', color:'gray'}}>In Stock</label>
                    <select name='inStock' id='InStock' onChange={handleChange} style={{padding: '10px'}}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select> 
                    
                    
                </ProductFormLeft>
                <ProductFormRight>
                    <ProductUpload>
                        
                        <label htmlFor='file'>
                            <Publish />                            
                        </label>
                        <input type='file' id='file' style={{display: 'none'}} onChange={e=> setFile(e.target.files[0])}></input>
                    </ProductUpload>
                    <ProductButton onClick={handleClick} >Create</ProductButton>
                </ProductFormRight>
            </ProductForm>           
    </Container>
  )
}
