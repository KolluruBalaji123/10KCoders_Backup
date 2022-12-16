import { Component } from "react";
import ImageComponent from "./Imagecomp";
import LifeCycleB from "./Lifeb";

class LifeCycleA   extends  Component{
    constructor(props) {
        super(props);
    
        this.state = {
          message: "Welcome to Life Cycles",
          showImage: true,
        };
        console.log("LifeCycleA Constructor Triggered !!");
      }
      changeMessage = () => {
        this.setState({
          message: "This Message will Change from Welcome to Life Cycle A !!",
        });
      };
      showHideImage = () => {
        this.setState({ showImage: !this.state.showImage });
      };
      render() {
        console.log("LifeCycleA render Triggered !!");
    
        return (
          <div>
            <button onClick={this.changeMessage}>Get Values From Server</button>
           <LifeCycleB msg={this.state.message}/>
            <button onClick={this.showHideImage}>Show/Hide</button>
            {this.state.showImage && <ImageComponent/>}
          </div>
        );
      }
      componentDidMount() {
        console.log("LifeCycleA componentDidMount Triggered !!");
      }
}

export default  LifeCycleA