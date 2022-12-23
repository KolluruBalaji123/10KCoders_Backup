import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Orders from './Components/Orders';
import OrderReceived from './Components/OrderReceived';
import Wishlist from './Components/Wishlist';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path ='/ordersreceived' element={<OrderReceived/>}/>
      <Route path ='/wishList' element={<Wishlist/>}/>
        
      </Routes>
      <Footer/>
      
    </BrowserRouter>
     
    </div>
  );
}

export default App;
