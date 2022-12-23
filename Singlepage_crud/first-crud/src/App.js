
import './App.css';
// import Users from './Components/Users';
import { BrowserRouter, Route, Routes,Outlet } from "react-router-dom"
import Layout from './Components/Layout';
import CreateUser from './Components/CreateUser';
import DeleteUser from './Components/DeleteUser';
import EditUser from './Components/EditUser';


function App() {
  return (
    // <div className="App">
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout/>}>
     <Route path='/create' element={<CreateUser/>}/>
     <Route  path='/delete' element={<DeleteUser/>}/>
     <Route path='/edit' element={<EditUser/>}/>

     </Route>
     
     </Routes>


    </BrowserRouter>
   

   
    // </div>
  );
}

export default App;
