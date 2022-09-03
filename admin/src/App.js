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

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;

  return (

    <Router>
          
   
     
      { admin &&<Topbar />}
      <div className='container'>
        
        { admin && <Sidebar /> }
        
        <Routes>
          <Route path='/' element={admin ? <Home /> : <Login />} />
          <Route path='/users' element={ admin && <UserList />} />
          <Route path='/user/:userId' element={ admin && <User />} />
          <Route path='/newUser' element={ admin && <NewUser />} />
          <Route path='/products' element={admin && <ProductList />} />
          <Route path='/product/:productId' element={admin && <Product />} />
          <Route path='/newProduct' element={admin && <NewProduct />} />
          <Route path='/login' element={<Login />} />        
                  
        
          </Routes> 
        </div>
        
    
    </Router>
  );
}

export default App;
