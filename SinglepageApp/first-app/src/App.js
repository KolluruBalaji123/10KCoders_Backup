import logo from './logo.svg';
import './App.css';
import NavBar from './Comonents/NavBar';
import Home from './Comonents/Home';
import Features from './Comonents/Features';
import Pricing from './Comonents/Pricing';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/features' element={<Features/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
   </Routes>
   </BrowserRouter>
 
 
    </div>
  );
}

export default App;
