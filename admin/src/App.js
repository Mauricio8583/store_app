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
        </Routes>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
