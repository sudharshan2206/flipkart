import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Header/Home Dahsboard/homedashboard';
import { Signup } from './Components/Header/Signup/signup';
import { Login } from './Components/Header/Login/login';
import { Userdashboard } from './Components/Header/User Dashboard/userdashboard';
import { Admindashboard } from './Components/Header/Admin Dashboard/admindashboard';
import { Adminmobile } from './Components/Adminmobile/adminmobile';
import { Addimage } from './Components/addimage/addimage';
import { Addfashion } from './Components/Adminfashion/addfashion';
import { Adminfashion } from './Components/Adminfashion/adminfashion';
import { Adminelectronics } from './Components/Adminelectronics/adminelectronics';
import { Addelectronics } from './Components/Adminelectronics/addelectronics';
import { Addfurniture } from './Components/Adminfurniture/addfurniture';
import { Adminfurniture } from './Components/Adminfurniture/adminfurniture';
import { Updatemobile } from './Components/Adminmobile/updatemobile';
import { Updatefashion } from './Components/Adminfashion/updatefashion';
import { Updateelectronics } from './Components/Adminelectronics/updateelectronics';
import { Updatefurniture } from './Components/Adminfurniture/updatefurniture';
import { Usermobile } from './Components/Usermobile/usermobile';
import { Singlemobile } from './Components/Usermobile/singlemobile';
import { Userfashion } from './Components/Userfashion/userfashion';
import { Singlefashion } from './Components/Userfashion/singlefashion';
import { Userelectronics } from './Components/Userelectricals/userelectricals';
import { Singleelectronics } from './Components/Userelectricals/singleelectricals';
import { Singlefurniture } from './Components/Userfurniture/singlefurniture';
import { Userfurniture } from './Components/Userfurniture/userfurniture';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user/:fid' element={<Userdashboard/>}/>
      <Route path='/admin/:fid' element={<Admindashboard/>}/>
      <Route path='/adminmobile' element={<Adminmobile/>}/>
      <Route path='/usermobile' element={<Usermobile/>}/>
      <Route path='/userfashion' element={<Userfashion/>}/>
      <Route path='/userelectronics' element={<Userelectronics/>}/>
      <Route path='/userfurniture' element={<Userfurniture/>}/>
      <Route path='/singleelectronics/:eid' element={<Singleelectronics/>}/>
      <Route path='/singlemobile/:mid' element={<Singlemobile/>}/>
      <Route path='/singlefashion/:did' element={<Singlefashion/>}/>
      <Route path='/singlefurniture/:hid' element={<Singlefurniture/>}/>
      <Route path='/addmobile' element={<Addimage/>}/>
      <Route path='/adminfashion' element={<Adminfashion/>}/>
      <Route path='/addfashion' element={<Addfashion/>}/>
      <Route path='/adminelectronics' element={<Adminelectronics/>}/>
      <Route path='/addelectronics' element={<Addelectronics/>}/>
      <Route path='/adminfurniture' element={<Adminfurniture/>}/>
      <Route path='/addfurniture' element={<Addfurniture/>}/>
      <Route path='/updatemobile/:mid' element={<Updatemobile/>}/>
      <Route path='/updatefashion/:did' element={<Updatefashion/>}/>
      <Route path='/updateelectronics/:eid' element={<Updateelectronics/>}/>
      <Route path='/updatefurniture/:hid' element={<Updatefurniture/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
