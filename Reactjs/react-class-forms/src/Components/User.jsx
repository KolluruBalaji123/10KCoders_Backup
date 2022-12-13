import { Component } from "react";

class User extends Component{
    constructor(){
        super();
        this.state={
            fname:"",
            lname:"",
            email:""
        }
        this.adduser=this.adduser.bind(this)
    }
    handleChange(e){
       
        // console.log(e.target.name)
        var newObj={...this.state}
        newObj[e.target.name]=e.target.value
        this.setState(newObj)

    }
    adduser(){
        console.log(this.state)
    }
    edituser=()=>{
        var newUsr={
            fname:"Balu",
            lname:"Balaji",
            email:"Kolluru"

        }
        this.setState(newUsr)

    }
    render(){
        return <div>
            <form >
            <label htmlFor="">FirstName:</label>
            <input type="text" name="fname" value={this.state.fname} onChange={(e)=>{this.handleChange(e)}}/> <br />
            <label htmlFor="">LastName</label>
            <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} />  <br />
            <label htmlFor="">email</label>
            <input type="text" name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}} />  <br />

            <button type="button" onClick={this.adduser}>AddUser</button>
            <button type="button" onClick={this.edituser}>Edit</button>
            </form>
        </div>
    }
}
export default User