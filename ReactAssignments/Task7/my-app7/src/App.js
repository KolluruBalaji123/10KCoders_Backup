import Comp1 from "./ClassComponent/ClassComp";
import Fun1 from "./FunctionalComponents/Fun1";
import MainClassComponent, { ChildclassComponent, SiblingClassComp } from "./MultipleClassComponent/MultiClass";

import ABC  from "./MultipleFunctionComponents/MutliCom";//Default Component can be Imported by Any Name
import { ParentComponent,ChildComponent } from "./MultipleFunctionComponents/MutliCom"; //Specific Components Can be imported with  Destrutred
import NestFun from "./NestedComponents/NestComp";







function App() {
  return (
    <div className="App">
      <h1>Functinal Component</h1>
    <Fun1/>
    <Comp1/>
    <ChildComponent/>
    <ParentComponent/>
    <ABC/>
    <ChildclassComponent/>
    <SiblingClassComp/>
    <MainClassComponent/>
    <NestFun/>
   
   
     
    </div>
  );
}

export default App;
