import logo from './logo.svg';
import './App.css';
import Colleges from './Components/Colleges';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import LayOut from './Components/LayOut';
import CreateCollege from './Components/CreateCollege';
import EditCollege from './Components/EditCollege';
import DeleteCollege from './Components/DeleteCollege';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
  
      <Routes>
      <Route path='/' element={<LayOut/>}>
      <Route index element={<Colleges/>}/>
        <Route path='/edit/:id' element={<EditCollege/>}/>
        <Route path='/delete/:id' element={<DeleteCollege/>}/>
        <Route path='/create' element={<CreateCollege/>}/>
      </Route>

      </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
