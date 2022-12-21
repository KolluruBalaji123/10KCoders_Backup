import logo from './logo.svg';
import './App.css';
import { Person, User } from './Components/User';
import { Prson } from './Components/person';
import Employees from './Components/Employees';
// import { Employees } from './Components/Employees';


function App() {
  return (
    <div className="App">
    {/* <User/> */}
    {/* <Person/> */}
    {/* <Prson/> */}
    <Employees/>
   
  
    
   
    </div>
  );
}

export default App;
//functinal Component wont have render method it will have return method only
//Functinal Component wont have state .we will have hooks (use state)
//functinal components wont have  Lifecycle hooks.
//we will have  hooks (useeffect this hook equal to component did mount)