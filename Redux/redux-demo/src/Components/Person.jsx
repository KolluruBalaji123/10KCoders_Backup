import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPersonAction } from '../Store/Actions';
import Personstable from './Personstable';

 class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:"",
         email:""
      }
      console.log(this.props)
    }
    handleChange=(e)=>{
        let newUser={...this.state};
        newUser[e.target.name]=e.target.value;
        this.setState(newUser)

    }
    addPerson=()=>{
        this.props.addPerson(this.state)//from where it is coming
        this.clearPersonForm();

    }
    clearPersonForm=()=>{
        this.setState({
            fname:"",
         lname:"",
         email:""

        })
    }
  render() {
    console.log(this.props)
 
    return (
      <div className='container'>
     <div className="row">
     <div className="col-4">
     <form>
        <label htmlFor="">FirstName</label>
        <input type="text" name='fname' value={this.state.fname} onChange={(e)=>{this.handleChange(e)}} /> <br/><br/>
        <label htmlFor="">LastaName</label>
        <input type="text" name='lname' value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} /><br/><br/>
        <label htmlFor="">Email</label>
        <input type="text" name='email' value={this.state.email} onChange={(e)=>{this.handleChange(e)}} /><br/><br/>
        <button type='button' onClick={this.addPerson} className="btn btn-primary">AddUser</button>
        {/* <button type='button' onClick={this.editUser} className="btn btn-warning">EditUser</button> */}
      </form>
     </div>

     <div className="col-8">
     <Personstable/>
    
     </div>

     </div>
      </div>
    )
  }
}
function mapStateToProps(state){
    return{
        allPersons:state.persons
    }

}
//what ever dispatchtoprops  returns  will be acessible as props in the current Component
function mapDispatchToProps(dispatch){
    return{
        addPerson:(person)=>dispatch(addPersonAction(person))//from where it is getting dispatch method 
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Person)
