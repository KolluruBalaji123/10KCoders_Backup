 function ParentComponent(){
    return <h2>Hello from the NestParent Component</h2>
}
  function ChildComponent(){
    return <h2>Hello from NestChildComponent</h2>

}
export default function NestFun(){
    return <div> 
        <h1>This iS Nested Components</h1>
    <ParentComponent/>
    <ChildComponent/>
    </div>
   //we can also use  <></> to write the nested components inside the fragments
  
}
//export{
   // ParentComponent  ChildComponent
//}