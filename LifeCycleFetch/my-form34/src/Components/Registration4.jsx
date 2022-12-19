import { Component } from "react";
import axios from "axios";

class Form4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college: {
        id: "",
        university: "",
        institute: "",
        Branch: "",
        Degree: "",
        statusc: "",
        Average: "",
        Experience: "",
        website: "",
      },
      allColleges: [],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    var newcollege = { ...this.state.college };
    newcollege[e.target.name] = e.target.value;
    this.setState({ college: newcollege });
  };
  getData = () => {
    axios.get("http://localhost:3201/Registrations").then((res) => {
      this.setState({ allColleges: res.data });
    });
  };
  AddColleg = () => {
    axios({
      method: "POST",
      url: "http://localhost:3201/Registrations",
      data: this.state.college,
      headers: {
        "content-Type": "application/json",
      },
    }).then((res) => {
      this.getData();
    });
    this.clearForm();
  };
  clearForm = () => {
    var clean = {
      id: "",
      university: "",
      institute: "",
      Branch: "",
      Degree: "",
      statusc: "",
      Average: "",
      Experience: "",
      website: "",
    };
    this.setState({ college: clean });
  };
  deleteCollege = (mycol) => {
    axios
      .delete("http://localhost:3201/Registrations/" + mycol.id)
      .then((res) => {
        this.getData();
      });
  };
  editCollege = (mycol, i) => {
    this.setState({ college: mycol, editIndex: i });
  };
  UpdateCollege = () => {
    axios({
      method: "PUT",
      url: "http://localhost:3201/Registrations/" + this.state.college.id,
      data: this.state.college,
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => {
      this.getData();
    });
    this.setState({editIndex: null });
    this.clearForm();
  };
  render() {
    const {
      id,
      university,
      institute,
      Branch,
      Degree,
      statusc,
      Average,
      Experience,
      website,
    } = this.state.college;
    return (
      <div>
        <label htmlFor="">Id:</label>
        <input
          type="number"
          name="id"
          disabled
          value={id}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">University:</label>
        <input
          type="text"
          name="university"
          value={university}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">institute</label>
        <input
          type="text"
          name="institute"
          value={institute}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Branch</label>
        <select
          name="Branch"
          value={Branch}
          onChange={(e) => {
            this.handleChange(e);
          }}
        >
          <option>select branch</option>
          <option value={"Mechanical"}>Mechanical</option>
          <option value={"Electrical"}>Electrical</option>
          <option value={"Civil"}>Civil</option>
          <option value={"cse"}>cse</option>
          <option value={"EEE"}>EEE</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Degree</label>
        <select
          name="Degree"
          value={Degree}
          onChange={(e) => {
            this.handleChange(e);
          }}
        >
          <option>select branch</option>
          <option value={"B.Tech"}>B-Tech</option>
          <option value={"Diploma"}>Diploma</option>
          <option value={"Degree"}>Degree</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Satus</label>
        <input
          type="radio"
          name="statusc"
          value={"pursuing"}
          onChange={(e) => {
            this.handleChange(e);
          }}
          checked={statusc === "pursuing"}
        />
        Puusuing
        <input
          type="radio"
          name="statusc"
          value={"Completed"}
          onChange={(e) => {
            this.handleChange(e);
          }}
          checked={statusc === "Completed"}
        />
        Completed
        <br />
        <br />
        <label htmlFor="">Average</label>
        <input
          type="number"
          name="Average"
          value={Average}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Experience</label>
        <input
          type="number"
          name="Experience"
          value={Experience}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">website</label>
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <br />
        {this.state.editIndex !==null? <button
          type="button"
          className="btn btn-secondary"
          onClick={this.UpdateCollege}
        >
          Update
        </button>:<button
          type="button"
          className="btn btn-primary"
          onClick={this.AddColleg}
        >
          Done
        </button>}
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={this.AddColleg}
        >
          Done
        </button>
        <button
          type="button"
          className="btn btn-Secondary"
          onClick={this.UpdateCollege}
        >
          Update
        </button> */}
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Uiversity:</th>
              <th>Insttute:</th>
              <th>Branch</th>
              <th>Degree</th>
              <th>Sattus</th>
              <th>Average</th>
              <th>Experience</th>
              <th>website</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allColleges.map((mycol, i) => (
              <tr key={i}>
                <td>{mycol.id}</td>
                <td>{mycol.university}</td>
                <td>{mycol.institute}</td>
                <td>{mycol.Branch}</td>
                <td>{mycol.Degree}</td>
                <td>{mycol.statusc}</td>
                <td>{mycol.Average}</td>
                <td>{mycol.Experience}</td>
                <td>{mycol.website}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editCollege(mycol, i);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteCollege(mycol);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  async componentDidMount() {
    // let response=axios.get("http://localhost:3201/Registrations").then((res)=>{
    //     this.setState({allColleges:response.data})
    // })
    let response = await axios.get("http://localhost:3201/Registrations");
    this.setState({ allColleges: response.data });
  }
}
export default Form4;
