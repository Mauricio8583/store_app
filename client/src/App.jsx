import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Cart } from './pages/Cart';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';


export default function App() {

  return (

    <div>
        <Router>
          <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route path='/product/:id' element={<Product />} />

          <Route path='/list/:category' element={<ProductList />} />

          <Route path='/cart' element={<Cart />} />

                              
          </Routes>
          
        </Router>
    </div>
  )
}
