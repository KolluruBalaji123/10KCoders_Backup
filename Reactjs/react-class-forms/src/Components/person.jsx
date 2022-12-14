import { Component } from "react";

export default class Person extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fname: "",
        lname: "",
        email: "",
      },
      allUsers: [
      {
        fname: "Balaji",
        lname: "Kolluru",
        email: "koll@gmail.com",

      },
      {
        fname: "Balaji1",
        lname: "Kolluru2",
        email: "koll@gmail2.com",

      },
      {
        fname: "Balaji3",
        lname: "Kolluru3",
        email: "koll@gmail3.com",

      },
      ],
      editIndex:null
    };
  }
  adduser = () => {
    console.log(this.state.person);
    var newallUsers = [...this.state.allUsers];
    newallUsers.push(this.state.person);
    this.setState({ allUsers: newallUsers });
    this.clearForm()
  };
  handleChange = (e) => {
    var newperson = { ...this.state.person };
    newperson[e.target.name] = e.target.value;
    this.setState({ person: newperson });
    // console.log("Names",e.target.name)
    // console.log("values",e.target.value)
  };
  clearForm=()=>{
    var newForm={
        fname:"",
        lname:"",
        email:"",
    }
    
    this.setState({person:newForm})
  }
  edituser=(usr,i)=>{
    console.log(usr)
    this.setState({person:usr,editIndex:i})

  }
  deleteuser=(usr)=>{
    console.log(usr)
    var latestUsers=this.state.allUsers.filter((myuser)=>myuser.email !== usr.email)
    this.setState({allUsers:latestUsers})

  }
  updateuser=()=>{
    var latestUsers=[...this.state.allUsers]
    latestUsers[this.state.editIndex]=this.state.person
    this.setState({allUsers:latestUsers,editIndex:null})
    this.clearForm();

  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">FirstName:</label>
          <input
            type="text"
            name="fname"
            value={this.state.person.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">LastName</label>
          <input
            type="text"
            name="lname"
            value={this.state.person.lname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">email</label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          {this.state.editIndex!==null ?  <button type="button" onClick={this.updateuser} className="btn btn-primary">
           UpdateUser
          </button>:<button type="button" onClick={this.adduser} className="btn btn-primary">
            AddUser
          </button>}
          {/* <button type="button" onClick={this.adduser} className="btn btn-primary">
            AddUser
          </button>
          <button type="button" onClick={this.updateuser} className="btn btn-primary">
           UpdateUser
          </button> */}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th >FirstName</th>
              <th >LastName</th>
              <th >Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.state.allUsers.map((usr,i)=><tr key={i}>
            <td>{usr.fname}</td>
            <td>{usr.lname}</td>
            <td>{usr.email}</td>
            <td>
            <button className="btn btn-warning" onClick={()=>{this.edituser(usr,i)}}>Edit</button>
            </td>
            <td><button className="btn btn-danger" onClick={()=>{this.deleteuser(usr)}}>Delete</button></td>
          </tr>)}
           
          </tbody>
        </table>
      </div>
    );
  }
}
