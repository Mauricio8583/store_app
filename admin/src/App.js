import './App.css';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
    
  
} from 'react-router-dom'
import { UserList } from './pages/UserList';
import { User } from './pages/User';
import { NewUser } from './pages/NewUser';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { NewProduct } from './pages/NewProduct';
import { Login } from './pages/Login';

function App() {

  return (

    <Router>
          

       <Topbar />
      <div className='container'>
        <Sidebar />
        
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newProduct' element={<NewProduct />} />
          <Route path='/login' element={<Login />} />        
        
          </Routes> 
        </div>
           
    </Router>
  );
}

export default App;
