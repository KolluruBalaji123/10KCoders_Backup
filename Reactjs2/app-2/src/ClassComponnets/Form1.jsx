import { Component } from "react";

export default class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      myusers: {
        myname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
      },
      allUsers:[
        {
            myname: "balaji",
            username: "balu",
            email: "balu@gmail.com",
            password: "balaji",
            confirmpassword: "balaji",
            message: "message",

        },
        {
            myname: "Balaji2",
            username: "balu2",
            email: "balu2@gmail.com",
            password: "baaa",
            confirmpassword: "baaa",
            message: "mess",
        },
        {
            myname: "balaji3",
            username: "balu3",
            email: "balu@1234",
            password: "baaa",
            confirmpassword: "baaaa",
            message: "mesage",
        }

      ],
      editIndex:null
    };
  }
  addUser = () => {
    console.log(this.state.myusers)
    var newAllusers=[...this.state.allUsers];
    newAllusers.push(this.state.myusers)
    this.setState({allUsers:newAllusers})
    this.clearForm();
  
   
  };
  handleChange = (e) => {
    var newmyusers = { ...this.state.myusers };
    // console.log("Names",e.target.name)
    // console.log("values",e.target.value)
    newmyusers[e.target.name]=e.target.value
    this.setState({myusers:newmyusers})
  };
  clearForm=()=>{
    var newForm={
        myname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",

    }
    this.setState({myusers:newForm})
  }
  edituser=(usr,i)=>{
    // console.log(usr)
    this.setState({myusers:usr,editIndex:i})

  }
  deleteuser=(usr)=>{
    // console.log(usr)
    var latestusers=this.state.allUsers.filter((myuser)=>myuser.username!==usr.username)
    this.setState({allUsers:latestusers})

  }
  userupdate=()=>{
    var latestUsers=[...this.state.allUsers]
    latestUsers[this.state.editIndex]=this.state.myusers
    this.setState({allUsers:latestUsers,editIndex:null})
    this.clearForm()

  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            name="myname"
            placeholder="myname"
            value={this.state.myusers.myname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">userName</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.myusers.username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.myusers.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">password</label>
          <br />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.myusers.password}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">ConfirmPassword</label>
          <br />
          <input
            type="text"
            name="confirmpassword"
            placeholder="confirmpassword"
            value={this.state.myusers.confirmpassword}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Message</label>
          <br />
          <input
            type="text"
            name="message"
            placeholder="message"
            value={this.state.myusers.message}
            style={{ width: 500, height: 100 }}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />

          {this.state.editIndex !==null?<button
            type="button"
            className="btn btn-secondary"
            onClick={this.userupdate}
          >
            update
          </button>:<button
            type="button"
            className="btn btn-primary"
            onClick={this.addUser}
          >
            send
          </button>}


          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={this.addUser}
          >
            send
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.userupdate}
          >
            update
          </button> */}
        </form>
      <hr/>
      <table className="table">
          <thead>
            <tr>
              <th >FirstName</th>
              <th >userName</th>
              <th >Email</th>
              <th>password</th>
              <th>confirm password</th>
              <th>message</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.state.allUsers.map((usr,i)=> <tr key={i}>
          <td>{usr.myname}</td>
          <td>{usr.username}</td>
          <td>{usr.email}</td>
          <td>{usr.password}</td>
          <td>{usr.confirmpassword}</td>
          <td>{usr.message}</td>
          <td>
            <button className="btn btn-warning" onClick={()=>{this.edituser(usr,i)}}>Edit</button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={()=>{this.deleteuser(usr)}}>Delete</button>
          </td>

          </tr>)}
        
          </tbody>
        </table>
      </div>
    );
  }
}
