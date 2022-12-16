import { Component } from "react";
import ImageComponent from "./ImageComponent";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"welcome to life Cycles",
            showImage:true

        }
        console.log("this is  LifeCycleA Constructor Triggered")
    }
    changeMessage=()=>{
        this.setState({message:"this message will change from welcome to LifeCycleA"})
    }
    showHideImage=()=>{
        this.setState({showImage:!this.state.showImage})

    }
    render(){
        console.log("this is  LifeCycleA Render Triggered")
      
        return <div>
        <button onClick={this.changeMessage}>Get</button>
        <LifeCycleB msg={this.state.message}/>
        <button onClick={this.showHideImage}>ShowHide</button>
      {this.state.showImage && <ImageComponent/>}

        </div>
    }
    componentDidMount(){
        console.log(" this is  LifeCycleA Component DidMount Triggered")
    }
  
}
//1.----Componemt Mounting phase or creating phase---
//1.Constructor it is the  starting state
//2.render  display the content  and coding
//3.ComponentDIDMOUNT  after completion of render it will TRiggered
//The Component Mount Phase  for we can get the dta when its created  no need user help
//2.---Component Update Phase---
// 1.Should Component will Execute First
//2.Render wii update next
//3.Component DidMountUpdate
// component update phase is usde for  Children Components  update or not?
//-----1.Component Unmounting Phase-------
//1.ComponentWillUnmount
