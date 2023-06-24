
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Sidebar from './components/sideBar/sideBar/Sidebar';
import Dashboard from './pages/Dashboard';
import User from './pages/user/User';
import Roles from './pages/Roles';
import Category from './pages/Category';
import SubCategory from './pages/SubCategory';
import LoginPage from './pages/LoginPage';
import Retailer from './pages/retailer/Retailer';
import Offer from './pages/offerzone/Offer';
import UserChangePassword from './pages/userpassword/UserChangePassword';

function App() {
  return (
    <>
    <Sidebar/>
<Routes>

<Route path='/' element={<Dashboard/>}/>
<Route path='/user' element={<User/>}/>
<Route path='/role' element={<Roles/>}/>
<Route path='/category' element={<Category/>}/>
<Route path='/subcategory' element={<SubCategory/>}/>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/retailer' element={<Retailer/>}/>
<Route path='/offer' element={<Offer/>}/>
<Route path='/changepassword' element={<UserChangePassword/>}/>


</Routes>
    
     
    </>
  );
}

export default App;
