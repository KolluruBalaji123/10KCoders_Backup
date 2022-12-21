import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const UsersCrud = () => {
  // const[age, setage]=useState(25)
  //UseEFFECT is equal to COMPOnent Did Mount
  const [users, setusers] = useState({
    id: "",
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [userss,setuserss]= useState([])
  const [isEdit,setIsEdit] = useState(false);
  useEffect(() => {getallUsers()}, []);
  const handleChange = (e) => {
    let newUser = { ...users };
    newUser[e.target.name] = e.target.value;
    setusers(newUser);
  };
  const handleSubmit = () => {
    axios.post("http://localhost:3201/users", users).then(() => {
      // console.log ("user added")
      getallUsers();
      ClearForm();
    });
  };
  const getallUsers = () => {
    axios.get("http://localhost:3201/users").then((response) => {
      console.log(response.data);
      setuserss(response.data)
    });
  };
  const deleteUser=(usr)=>{
    axios.delete("http://localhost:3201/users/"+usr.id).then(()=>{
        getallUsers();
    })

  }
  const editUser=(usr)=>{
    setIsEdit(true)
    setusers(usr)

  }
  const  updateUser=()=>{
    axios.put("http://localhost:3201/users/"+users.id,users).then(()=>{
        setIsEdit(false)
        getallUsers();
        ClearForm();
    })

  }
  const ClearForm=()=>{
    setusers({
        id: "",
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",

    })
  }

  return (
    <div className="container">
      {/* <h2>{age}</h2> */}
      {/* <button onClick={()=>{setage(45)}}>changeAge</button> */}
      <form>
        <div className="mb-3">
          <label htmlFor="">Id</label>
          <input
            type="number"
            name="id"
            disabled
            value={users.id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">FullName</label>
          <input
            type="text"
            name="fullname"
            value={users.fullname}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="">UserName</label>
          <input
            type="username"
            name="username"
            value={users.username}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={users.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={users.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">ConfirmPassword</label>
          <input
            type="confirmpassword"
            name="confirmpassword"
            value={users.confirmpassword}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {isEdit? <button
          type="button"
          className="btn btn-primary"
          onClick={updateUser}
        >
          update
        </button>: <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSubmit}
        >
          Submit
        </button>}
        {/* <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={updateUser}
        >
          update
        </button> */}
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
        {userss.map((usr,i)=> <tr key={i}>
            <td>{usr.id}</td>
            <td>{usr.fullname}</td>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
            <td>{usr.confirmpassword}</td>
            <td>
                <button className="btn btn-warning" onClick={()=>{editUser(usr)}}>EDit</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={()=>{deleteUser(usr)}}>Delete</button>
            </td>
        </tr>)}
          
        </tbody>
      </table>
    </div>
  );
};

export default UsersCrud;
