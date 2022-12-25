import logo from './logo.svg';
import './App.css';
import Persons from './Components/Persons';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LayOut from './Components/LayOut';
import EditPerson from './Components/EditPerson';
import DeletePerson from './Components/DeletePerson';
import CreatePerson from './Components/CreatePerson';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
  
      <Routes>
      <Route path='/' element={<LayOut/>}>
      <Route index element={<Persons/>}/>
        <Route path='/edit/:id' element={<EditPerson/>}/>
        <Route path='/delete/:id' element={<DeletePerson/>}/>
        <Route path='/create' element={<CreatePerson/>}/>
      </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
