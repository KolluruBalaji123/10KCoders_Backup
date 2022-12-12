
import Comp1 from './ClassComponents/ClassComp';
import Fun1 from './FunctinalComponents/Fun1';
import Comp5, { Comp2, Comp3, Comp4 } from './MutliClassComponents/MultiCom';

function App() {
  return (
    <div className="App">
      <Fun1/>
      <Comp1/>
      <Comp5/>
      <Comp4/>
      <Comp2/>
      <Comp3/>
     
    </div>
  );
}

export default App;
