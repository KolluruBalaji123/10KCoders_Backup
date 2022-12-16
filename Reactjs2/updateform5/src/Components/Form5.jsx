import { Component } from "react";

export default class Form7 extends Component {
  constructor() {
    super();
    this.state = {
      bio: {
        username: "",
        password: "",
        EmailAddress: "",
        Man: "",
        Women: "",
        Dates: "",
        Month: "",
        Year: "",
        Height: "",
        Weight: "",
      },
      allBio:[
        {
          username: "Balji",
          password: "balu",
          EmailAddress: "balu@",
          Man: "",
          Women: "",
          Dates: "",
          Month: "",
          Year: "",
          Height: "",
          Weight: "",
        }
      ],
      editIndex:null
    };
  }
  handleChange = (e) => {
    var newbio={...this.state.bio}
    newbio[e.target.name]=e.target.value
    this.setState({bio:newbio})

  };
  addInfo=()=>{
    var allnewBio=[...this.state.allBio]
    allnewBio.push(this.state.bio)
   this.setState({allBio:allnewBio})
   this.clearForm();
   
  }
  clearForm=()=>{
    var newForm={
        username: "",
        password: "",
        EmailAddress: "",
        Man: "",
        Women: "",
        Dates: "",
        Month: "",
        Year: "",
        Height: "",
        Weight: "",
    }
   this.setState({bio:newForm})

  }
  editUser=(use,i)=>{
    this.setState({bio:use,editIndex:i})


  }
  deleteUser=(use)=>{
    var latestBio=this.state.allBio.filter((uses)=>uses.username !==use.username)
    this.setState({allBio:latestBio})

  }
  updateInfo=()=>{
    var latestBio=[...this.state.allBio]
    latestBio[this.state.editIndex]=this.state.bio
    this.setState({allBio:latestBio,editIndex:null})
    this.clearForm();
  }


  render() {
    const {
      username,
      password,
      EmailAddress,
      Man,
      Women,
      Dates,
      Month,
      Year,
      Height,
      Weight,
    } = this.state.bio;
    return (
      <div>
        <form>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Pasword</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">EmailAddress</label>
          <input
            type="text"
            name="EmailAddress"
            value={EmailAddress}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Satus1</label>
          <select
            name="Man"
            value={Man}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>SelectOption</option>
            <option value={"I am Women"}> I am Women</option>
            <option value={"I am Man"}> I am Man</option>
          </select>
          <label htmlFor="">Satus</label>
          <select
            name="Women"
            value={Women}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>SelectOption</option>
            <option value={"i want Women"}>i want Women</option>
            <option value={"i want Men"}>i want men</option>
          </select>
          <br />
          <br />

          <label htmlFor="">Date of Birth</label>
          <select
            name="Year"
            value={Year}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>SelectOption</option>
            <option value={"2011"}>2011</option>
            <option value={"2012"}>2012</option>
            <option value={"2013"}>2013</option>
            <option value={"2014"}>2014</option>
            <option value={"2015"}>2015</option>
            <option value={"2016"}>2016</option>
            <option value={"2017"}>2017</option>
            <option value={"2018"}>2018</option>
            <option value={"2019"}>2019</option>
          </select>

          <select
            name="Month"
            value={Month}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>select</option>
            <option value={"january"}>January</option>
            <option value={"february"}>February</option>
            <option value={"march"}>March</option>

            <option value={"April"}>April</option>

            <option value={"May"}>May</option>

            <option value={"june"}>June</option>

            <option value={"july"}>July</option>

            <option value={"August"}>August</option>

            <option value={"September"}>September</option>
          </select>
          <select
            name="Dates"
            value={Dates}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>selectDate</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
            <option value={"6"}>6</option>
            <option value={"7"}>7</option>
            <option value={"8"}>8</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Height</label>
          <select
            name="Height"
            value={Height}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>selectFeet</option>
            <option value={"1Feet"}>1Feet</option>
            <option value={"2Feet"}>2Feet</option>
            <option value={"3Feet"}>3Feet</option>
            <option value={"4Feet"}>4Feet</option>
            <option value={"5Feet"}>5Feet</option>
            <option value={"6Feet"}>6Feet</option>
          </select>
          <label htmlFor="">Weight</label>
          <select
            name="Weight"
            value={Weight}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>selectFeet</option>
            <option value={"1okgs"}>10kgs</option>
            <option value={"20kgs"}>20kgs</option>
            <option value={"30kgs"}>30kgs</option>
            <option value={"40kgs"}>4okgs</option>
            <option value={"50kgs"}>50kgs</option>
            <option value={"60kgs"}>6okgs</option>
          </select>
          <br />
          {this.state.editIndex !==null ?  <button
            type="button"
            className="btn btn-secondary"
            onClick={this.updateInfo}
          >
            update
          </button>:<button
            type="button"
            className="btn btn-primary"
            onClick={this.addInfo}
          >
            ADD
          </button>}
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={this.addInfo}
          >
            ADD
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.updateInfo}
          >
            update
          </button> */}
        </form>
        <hr/>
        <table className="table">
          <thead>
            <tr>
              <th>UserName:</th>
              <th>Password:</th>
              <th>EmailAddress</th>
              <th>Men</th>
              <th>Women</th>
              <th>year</th>
              <th>Month</th>
              <th>Date</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           {this.state.allBio.map((use,i)=><tr key={i}>
           <td>{use.username}</td>
           <td>{use.password}</td>
           <td>{use.EmailAddress}</td>
           <td>{use.Man}</td>
           <td>{use.Women}</td>
           <td>{use.Year}</td>
           <td>{use.Month}</td>
           <td>{use.Dates}</td>
           <td>{use.Height}</td>
           <td>{use.Weight}</td>
           <td>
            <button type="button" className="btn btn-warning" onClick={()=>{this.editUser(use,i)}}>Edit</button>
           </td>
           <td>
           <button type="button" className="btn btn-danger" onClick={()=>{this.deleteUser(use)}}>Delete</button>
           </td>
          

           </tr>)}
          </tbody>
        </table>

      </div>
    );
  }
}








