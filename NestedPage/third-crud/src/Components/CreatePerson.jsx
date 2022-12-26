import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import UserForm from "./UserForm";

const CreatePerson = () => {
  const navigate =useNavigate();
  const [Person, setPersons] = useState({
    id: "",
    firstname: "",
    lastname: "",
    dateofBirth: "",
    EmailId: "",
    MobileNumber: "",
  });
  const addPerson = () => {
    // console.log(Person)
    fetch("http://localhost:3201/person",{
      method:"POST",
      body:JSON.stringify(Person),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(()=>{
      navigate("/")
      clearForm();


    })


  };
  const handleChange=(e)=>{
    let newperson={...Person}
    newperson[e.target.name]=e.target.value
    setPersons(newperson)

  }
  const clearForm=()=>{
    setPersons({
      id: "",
      firstname: "",
      lastname: "",
      dateofBirth: "",
      EmailId: "",
      MobileNumber: "",

    })
  }
  return (
    <div>
    <UserForm handleChange={handleChange} Person={Person} handlePerson={addPerson} btnText="CreateUser" />
     
    </div>
  );
};

export default CreatePerson;
