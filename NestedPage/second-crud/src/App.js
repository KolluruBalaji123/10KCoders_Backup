import logo from './logo.svg';
import './App.css';
import Address from './Components/Address';
import { BrowserRouter, Route, Routes,Outlet } from "react-router-dom"
import Layout from './Components/Layout';
import EditAddress from './Components/EditAddress';
import DeleteAddress from './Components/DeleteAddress';
import CreateAddress from './Components/CreateAddress';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path='/' element ={<Layout/>}>
      <Route index element={<Address/>}/>
      <Route path='/edit/:id'  element={<EditAddress/>}/>
      <Route path='/delete/:id' element={<DeleteAddress/>}/>
      <Route path='/create' element={<CreateAddress/>}/>

      </Route>
        
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
