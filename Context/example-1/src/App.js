import React from 'react';
import './App.css';
import { MycontextProvider } from './Components/Auth';
import Users from './Components/Users';


function App() {
  const [users,setusers]=useState([]);
 
  return (
    <div className="App">
    <MycontextProvider value={users}>
    <Users/>

    </MycontextProvider>
    
  
     
    </div>
  );
}

export default App;
