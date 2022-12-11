import { Component } from "react";

 export  default class MainClassComponent extends Component{
    render(){
        return <h2>hii thsi sis MultiFunctinal Component</h2>
    }
}
export class ChildclassComponent extends Component{
    render(){
        return <h3>hello from Child Component</h3>
    }
}
export class SiblingClassComp extends Component{
    render(){
        return <h3>Sibling From Sibling Component</h3>
    }
}