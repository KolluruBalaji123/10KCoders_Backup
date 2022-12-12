import { Component } from "react";

class Comp2 extends Component{
    render(){
        return <h2>Multi Class Comp1</h2>
    }
}
class Comp3 extends Component{
    render (){
        return <h2>Multi Class Comp2</h2>
    }
}
class Comp4 extends Component{
    render(){
        return <h3>Multi Comp3</h3>
    }
}
 export  default class Comp5 extends Component{
    render(){
        return <h4>Multi Comp4</h4>
    }

}
export{
    Comp2,Comp3,Comp4
}