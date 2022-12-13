import { Component } from "react";

class Header extends Component{
    constructor(props){
         super(); 
    }
    render(){
        const {handleChange,message}=this.props
        return <div>
        <button onClick={handleChange}>ChangeMessage</button>
         <p style={{background:"grey",color:"white",padding:10,fontWeight:"bold"}}> {message}</p>

        </div>
    }
}
export default Header