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
        };
    //     this.changeMessage=this.changeMessage.bind(this) one method
     }
    // changeMessage (){
    //     this.setState({welComeMessage:"helloparent comp i am Changing you"})
    // }
    changeMessage=()=>{
        this.setState({welComeMessage:"helloparent comp i am Changing you"})

    }

    render(){
        const {welComeMessage}=this.state// dstructuring
        return <div>
            <h2>Welcome to ParentComponent</h2>
          {/* <Header {...this.state}/> */}
          <Header message={welComeMessage} handleChange={this.changeMessage}/>
        </div>
    }
}
export default ParentComponent