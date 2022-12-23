import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AboutCollege from './Components/AboutCollege';
import Register from './Components/Register';
import Studentsderails from './Components/Studentsderails';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Footer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutCollege' element={<AboutCollege/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Studentdetails' element={<Studentsderails/>}/>
    </Routes>

    </BrowserRouter>

     
    </div>
  );
}

export default App;
