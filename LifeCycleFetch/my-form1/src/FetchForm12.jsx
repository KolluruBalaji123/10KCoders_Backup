import { Component } from "react";

class FirstForm extends Component {
  constructor() {
    super();
    this.state = {
      myuser: {
        id: "",
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      allUsers: [],
      editIndex: null,
    };
    this.getdata = this.getdata.bind(this);
  }
  async getdata() {
    let data = await (await fetch("http://localhost:3201/users")).json();
    this.setState({ allUsers: data });
  }
  HandleCHange = (e) => {
    var newUser = { ...this.state.myuser };
    newUser[e.target.name] = e.target.value;
    this.setState({ myuser: newUser });
  };
  addUser = () => {
    fetch("http://localhost:3201/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(this.state.myuser),
    }).then((res) => {
      this.getdata();
    });
    this.ClearForm();
  };
  deleteUser = (usr) => {
    fetch("http://localhost:3201/users/" + usr.id, {
      method: "DELETE",
    }).then((res) => {
      this.getdata();
    });
  };
  editUser = (usr, i) => {
    this.setState({ myuser: usr,editIndex:i });
  };
  UpdateUser = () => {
    fetch(" http://localhost:3201/users/" + this.state.myuser.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.myuser),
    }).then((res) => {
      this.getdata();
    });
    this.setState({ editIndex: null });
    this.getdata();
  };
  ClearForm = () => {
    var Clean = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
    this.setState({ myuser: Clean });
  };

  render() {
    const { id, fullname, username, email, password, confirmpassword } =
      this.state.myuser;
    return (
      <div>
        <form>
          <label htmlFor="">Id</label>
          <input
            type="text"
            name="id"
            value={id}
            disabled
            onChange={(e) => {
              this.HandleCHange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Fullname</label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            onChange={(e) => {
              this.HandleCHange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              this.HandleCHange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              this.HandleCHange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              this.HandleCHange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">ConfirmPassword</label>
          <input
            type="text"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => {
              this.HandleCHange(e);
            }}
          />
          <br />
          <br />
          {this.state.editIndex !== null ? (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.UpdateUser}
            >
              AddUser
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addUser}
            >
              AddUser
            </button>
          )}
          {/* <button type="button" className="btn btn-primary" onClick={this.addUser}>AddUser</button>
    <button type="button" className="btn btn-secondary" onClick={this.UpdateUser}>AddUser</button> */}
        </form>
        <hr />
        <table className="table  mt-3">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>confirm password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.fullname}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmpassword}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
                    }}
                  >
                    EDit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteUser(usr);
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
    let data = await (await fetch("http://localhost:3201/users")).json();
    this.setState({ allUsers: data });
  }
}
export default FirstForm;
