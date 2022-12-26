
import { useState } from 'react';
import './App.css';

import Main from './Components/Main';
import { MycontextProvider } from './Components/Mycontext';


function App() {
  const [users,setUsers]=useState(["Balu","Kolluru","vijay","Naveen"])
 
 
  return (
    <div className="App">
    <MycontextProvider value={users}>
    <Main/>
    {/* <Main allUsers={users}/> */}

    </MycontextProvider>
   
    </div>
  );
}

export default App;
