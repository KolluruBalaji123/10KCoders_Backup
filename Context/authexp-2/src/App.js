import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './Components/Auth';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import LoginComp from './Components/LoginComp';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <NavBar/>
    <h2> Welcome to the Autherization</h2>
    <Routes>
      <Route path='/login' element={<LoginComp/>}/>
    </Routes>
   

    </BrowserRouter>
     

    </AuthProvider>
    </div>
  );
}

export default App;
