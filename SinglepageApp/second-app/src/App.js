
import './App.css';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Login from './Components/Login';
import Register from './Components/Register';
import Status from './Components/status';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path ='/status' element={<Status/>}/>
      </Routes>
    </BrowserRouter>

     
    </div>
  );
}

export default App;
