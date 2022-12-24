
import './App.css';
// import Users from './Components/Users';
import { BrowserRouter, Route, Routes,Outlet } from "react-router-dom"
import Layout from './Components/Layout';
import CreateUser from './Components/CreateUser';
import DeleteUser from './Components/DeleteUser';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';
import Users from './Components/Users';


function App() {
  return (
    // <div className="App">
    <BrowserRouter>
    <NavBar/>
     <Routes>
     <Route path='/' element={<Layout/>}>
     <Route index element={<Users/>}/>
     <Route path='/create' element={<CreateUser/>}/>
     <Route  path='/delete/:id' element={<DeleteUser/>}/>
     <Route path='/edit/:id' element={<EditUser/>}/>

     </Route>
     
     </Routes>


    </BrowserRouter>
   

   
    // </div>
  );
}

export default App;
