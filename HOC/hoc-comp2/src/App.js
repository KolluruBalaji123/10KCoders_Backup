import logo from './logo.svg';
import './App.css';
import Hoc from './Components/Hoc';

function App(props) {
  return (
   
   <h1>welcome User{props.name} </h1>
  );
}

export default Hoc(App)
