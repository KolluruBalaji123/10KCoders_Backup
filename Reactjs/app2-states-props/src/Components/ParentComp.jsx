import { Component } from "react";
import Header from "./Header";

class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            welComeMessage:"Hello this is Balaji from 10k Coders",
            employeee:{
                fname:"Balaji",
                email:"kolluru@123.com",
                city:"Bangalore"
            }
        }
    }
    render(){
        return <div>
            <h2>Welcome to ParentComponent</h2>
          {/* <Header {...this.state}/> */}
          <Header message={this.state.welComeMessage}/>
        </div>
    }
}
export default ParentComponent