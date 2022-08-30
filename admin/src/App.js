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

function App() {
  return (
    <Router>
    <div>
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
        </Routes>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
