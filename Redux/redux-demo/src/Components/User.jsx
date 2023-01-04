import React, { Component } from 'react'
import { connect   } from 'react-redux'
import { addUserAction, deleteUserAction } from '../Store/Actions'


 class User extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
      <button onClick={this.props.addUser}>
      AddUser
      </button>
      <button onClick={this.props.deleteUser}>DeleteUser</button>
      <ul>
        {this.props.allUsers&&this.props.allUsers.map((user,i)=> <li key={i} onClick={()=>{
            this.props.deleteUser(user);
        }}>{user}</li>)}
      </ul>

      </div>
    )
  }
}
function mapStateToProps(state){
    console.log(state)
    return {
        allUsers:state.users
    }

}
function mapDispatchToProps(dispatch){
    return {
        addUser:()=>dispatch(addUserAction()),
        deleteUser:(user)=>dispatch(deleteUserAction(user))
    };
}
// console.log(connect)
// export default connect
export default connect(mapStateToProps,mapDispatchToProps)(User)
