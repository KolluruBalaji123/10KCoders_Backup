import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DeletePersonAction } from '../Store/Actions'

 class Personstable extends Component {
  render() {
    console.log(this.props.persons)
    const {persons}=this.props
    return (
      <div>
         <table className="table">
  <thead>
    <tr>
      <th>First</th>
      <th>Last</th>
      <th>Email</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {persons.map((person,i)=><tr key={i}>
  <td>{person.fname}</td>
  <td>{person.lname}</td>
  <td>{person.email}</td>
  <td>
    <button type='button' className='btn btn-warning'>EditPerson</button>
  </td>
  <td>
  <button type='button' className='btn btn-danger' onClick={()=>{this.props.deletePerson(person)}}>DeletePerson</button>
  </td>


  </tr>

  )}
  
  </tbody>
</table>

      </div>
    )
  }
}
function mapStateToProps(state){
    return {
        persons:state.persons

    }

}
function mapDispatchToProps(dispatch){
    return{
        deletePerson:(person)=>dispatch(DeletePersonAction(person))

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Personstable)
