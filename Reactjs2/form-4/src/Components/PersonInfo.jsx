import { Component } from "react";

class PersonInfo extends Component {
  constructor() {
    super();
    this.state = {
      Info: {
        firstname: "",
        lastname: "",
        dateofBirth: "",
        EmailId: "",
        MobileNumber: "",
      },
      allInfo:[
        {
            firstname: "Balji",
            lastname: "Balu",
            dateofBirth: "14-08-1999",
            EmailId: "kolluru@gmail.com",
            MobileNumber: "9182037594",
        },
        {
            firstname: "Balji",
            lastname: "Bala",
            dateofBirth: "14-08-1998",
            EmailId: "kolluru@gmail10.com",
            MobileNumber: "91820375",
        }
      ],
      editIndex:null
    };
  }
  handleChange = (e) => {
    // console.log("Names",e.target.name)
    // console.log("values",e.target.value)
    var newInfo={...this.state.Info}
    newInfo[e.target.name]=e.target.value
    this.setState({Info:newInfo})
   

  };
  addPerson = () => {
    // console.log(this.state.Info)
    var allnewInfo=[...this.state.allInfo]
    allnewInfo.push(this.state.Info)
    this.setState({allInfo:allnewInfo})
    this.clearForm();



  };
  clearForm=()=>{
    var newForm={
        firstname: "",
        lastname: "",
        dateofBirth: "",
        EmailId: "",
        MobileNumber: "",
    }
    this.setState({Info:newForm})
    
  }
  deleteUser=(pers)=>{
    console.log(pers)
    var latestInfo=this.state.allInfo.filter((mypers)=>mypers.EmailId !==pers.EmailId)
   this.setState({allInfo:latestInfo})
  }
  editUser=(pers,i)=>{
    // console.log(pers)
    this.setState({Info:pers,editIndex:i})
  }
  updateperson=()=>{
    var latestInfo=[...this.state.allInfo]
    latestInfo[this.state.editIndex]=this.state.Info
    this.setState({allInfo:latestInfo,editIndex:null})
    this.clearForm();

  }

  render() {
    const { firstname, lastname, dateofBirth, EmailId, MobileNumber } =
      this.state.Info;
    return (
      <div>
      <form >
        <label htmlFor="">FirstName</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">LastName</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">DateOfBirth</label>
        <input
          type="date"
          name="dateofBirth"
          value={dateofBirth}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">EmailId</label>
        <input
          type="text"
          name="EmailId"
          value={EmailId}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Mobile</label>
        <input
          type="tel"
          name="MobileNumber"
          value={MobileNumber}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        {this.state.editIndex !==null ? <button
          type="button"
          onClick={this.updateperson}
          style={{ backgroundColor: "grey", borderRadius: 10 }}
        >
         Update
        </button>:<button
          type="button"
          onClick={this.addPerson}
          style={{ backgroundColor: "grey", borderRadius: 10 }}
        >
          Submit
        </button>}
        {/* <button
          type="button"
          onClick={this.addPerson}
          style={{ backgroundColor: "grey", borderRadius: 10 }}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={this.updateperson}
          style={{ backgroundColor: "grey", borderRadius: 10 }}
        >
         Update
        </button> */}
        </form>
       <hr/>
       <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>lastName:</th>
              <th> DateOFBirth</th>
              <th>EmailId</th>
              <th>MobileNumber</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.state.allInfo.map((pers,i)=> <tr key={i}>
            <td>{pers.firstname}</td>
            <td>{pers.lastname}</td>
            <td>{pers.dateofBirth}</td>
            <td>{pers.EmailId}</td>
            <td>{pers.MobileNumber}</td>
            <td><button type="button" className="btn btn-warning" onClick={()=>{this.editUser(pers,i)}}>Edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={()=>{this.deleteUser(pers)}}>Delete</button></td>
            
          </tr>)}
          
          </tbody>
        </table>
      </div>
    );
  }
}
export default PersonInfo;
