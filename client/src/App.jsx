import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { Cart } from './pages/Cart';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';
import Success from './pages/Success';


export default function App() {
     const user = useSelector((state) => state.user.currentUser);

  return (

    <div>
        <Router>
          <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/login' element={user ? <Navigate to='/'/> : <Login />}/>
            
          <Route path='/register' element={<Register />} />

          <Route path='/product/:id' element={<Product />} />

          <Route path='/list/:category' element={<ProductList />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='/success' element={<Success />} />

                              
          </Routes>
          
        </Router>
    </div>
  )
}
