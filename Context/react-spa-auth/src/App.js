import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './Components/Auth';
import LoginComp from './Components/LoginComp';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <h2>Hii thi is from Authuu</h2>
    <LoginComp/>
    </AuthProvider>
   
     
    </div>
  );
}

export default App;
