import logo from './logo.svg';
import './App.css';
import { AuthProvider, } from './Components/Auth';
import LoginComp from './Components/LoginComp';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import { RequiredAuth } from './Components/RequiredAuth';



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <NavBar/>
    <h2>Hii thi is from Authuu</h2>
    <Routes>
      <Route path='/' element={<LoginComp/>}/>
      <Route path='/products' element={<RequiredAuth>
        <Products/>
      </RequiredAuth>}/>
      
    </Routes>
   
    </BrowserRouter>
    
    
    </AuthProvider>
   
     
    </div>
  );
}

export default App;
