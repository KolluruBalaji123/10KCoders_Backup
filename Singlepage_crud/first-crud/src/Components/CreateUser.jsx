import React from "react";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import UserForm from "./UserForm";


const CreateUser = () => {
  const [users, setusers] = useState(
    {
      id: "",
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    []
  );
  const navigate =useNavigate();
  const  handleChange=(e)=>{
    let newuser={...users}
    newuser[e.target.name]=e.target.value
    setusers(newuser);

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
  const addUser=()=>{
    console.log(users)
    fetch("http://localhost:3201/users",{
      method:"POST",
      body:JSON.stringify(users),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(()=>{
      console.log("user added")
      ClearForm();
      navigate("/")
    })
  }
  return (
    <div className="container">
      {/* <h2>{age}</h2> */}
      {/* <button onClick={()=>{setage(45)}}>changeAge</button> */}
      <UserForm handleChange={handleChange} users={users} handleSubmit={addUser} btnText="Create User"/>
    
     
    </div>
  );
};

export default CreateUser;
