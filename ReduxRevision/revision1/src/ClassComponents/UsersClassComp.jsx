import React, { Component } from 'react'
import { addUserAction, addUserAsyncAction, deleteUserAction, deleteUserAsyncAction, getUsersAsyncAction, UpdateUserAction, UpdateUserAsyncAction } from '../Store/Actions/userActions'
import {connect} from "react-redux"

 class UsersClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:{
            fname:"",
            lname:"",
            email:""
            
         },
         isEdit:false
      }
    }
    handleChange=(e)=>{
        let newUser={...this.state.user}
        newUser[e.target.name]=e.target.value
        this.setState({user:newUser})

    }
    handleSubmit=()=>{
      //  this.props.addUser(this.state.user)
      this.props.adduserAsync(this.state.user)
       this.clearForm();


    }
    clearForm=()=>{
        this.setState({
            user:{
                fname:"",
                lname:"",
                email:""

            }
        })
    }
    handleDelete=(user)=>{

        // this.props.deleteUser(user)
        this.props.deleteUserAsync(user)

    }
   handleEdit=(user)=>{
    this.setState({user,isEdit:true})

   }
   handleUpdate=(user)=>{
    // this.props.updateUser(this.state.user)
    this.props.updateUserAsync(this.state.user)
    this.clearForm();

   }
   componentDidMount(){
    this.props.getUsers();

   }
  
  render() {
    // console.log(this.props)
    const {fname,lname,email}=this.state.user
   const  {users} =this.props.allUsers
    // console.log(this.props)
    return (
      <div>
      <form>
      <label htmlFor="fname">FirstName</label>
      <input type="text" name='fname' value={fname} onChange={(e)=>{this.handleChange(e)}}  /> <br/><br/>
      <label htmlFor="lname">LastName</label>
      <input type="text" name='lname' value={lname} onChange={(e)=>{this.handleChange(e)}} /> <br/><br/>
      <label htmlFor="email">Email</label>
      <input type="email" name='email' value={email} onChange={(e)=>{this.handleChange(e)}} disabled={this.state.isEdit} /><br/><br/>
      {this.state.isEdit ?  <button type='button' onClick={this.handleUpdate}>updateUSER</button>: <button type='button' onClick={this.handleSubmit}>ADDUSER</button>
     }
     

      </form>
      <table  border={1}>
      <thead>
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,i)=> <tr key={i}>
          <td>
          {user.fname}
          </td>
          <td>{user.lname}</td>
          <td>{user.email}</td>
          <td><button type='button'  onClick={()=>{this.handleEdit(user)}} >Edit</button></td>
          <td><button type='button'  onClick={()=>{this.handleDelete(user)}}>Delete</button></td>
        </tr>)}
      </tbody>

      </table>
      
      </div>
    )
  }
}
function mapStateToProps(state){
    return {
        allUsers:state.users
    }

}
function MapDipsatchToProps(dispatch){
    return{
        addUser:(user)=>dispatch(addUserAction(user)),
        deleteUser:(user)=>dispatch(deleteUserAction(user)),
        updateUser:(user)=>dispatch(UpdateUserAction(user)),
        getUsers:()=>dispatch(getUsersAsyncAction()),
        adduserAsync:(user)=>dispatch(addUserAsyncAction(user)),
        deleteUserAsync :(user)=>dispatch(deleteUserAsyncAction(user)),
        updateUserAsync :(user)=>dispatch(UpdateUserAsyncAction(user))

    }
}
export default  connect(mapStateToProps,MapDipsatchToProps)(UsersClassComp)
//to connect class Component with REdux store ....
//A function is required to Connect State --- mapstateTo Props
// Afunction  is required to dipatch  the  Action---MapDipsatchTo Props
