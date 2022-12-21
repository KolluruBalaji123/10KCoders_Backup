import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Person = () => {
  useEffect(() => {
    getPerson();
  }, []);
  const [person1, setPerson1] = useState([]);
  const[isEdit,setIsEdit]=useState(false)
  const [Person, setPerson] = useState({
    id: "",
    firstname: "",
    lastname: "",
    dateofBirth: "",
    EmailId: "",
    MobileNumber: "",
  });
 
  const handleChange = (e) => {
    let newperson = {...Person};
    newperson[e.target.name] = e.target.value;
    setPerson(newperson);
  };
  const getPerson = () => {
    axios.get(" http://localhost:3201/person").then((response) => {
      setPerson1(response.data);
    });
  };

  const addPerson = () => {
    axios.post("http://localhost:3201/person", Person).then(() => {
      getPerson();
      clearForm();
    });
  };
  const deletePerson = (pers) => {
    axios.delete("http://localhost:3201/person/" + pers.id, Person).then(() => {
      getPerson();
    });
  };
  const editPerson=(pers) =>{
  setIsEdit(true)
    setPerson(pers)
  }
const updatePerson=()=>{
  setIsEdit(false)
  axios.put("http://localhost:3201/person/"+Person.id,Person).then(()=>{
    getPerson();
    clearForm();
    
  })
}
 const clearForm=()=>{
  setPerson({
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
      <form>
        <label htmlFor="">Id</label>
        <input
          type="text"
          name="id"
          value={Person.id}
          disabled
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">firstname</label>
        <input
          type="text"
          name="firstname"
          value={Person.firstname}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Lastname</label>
        <input
          type="text"
          name="lastname"
          value={Person.lastname}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">DateofBirth</label>
        <input
          type="date"
          name="dateofBirth"
          value={Person.dateofBirth}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">EmailId</label>
        <input
          type="email"
          name="EmailId"
          value={Person.EmailId}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">MobileNumber</label>
        <input
          type="tel"
          name="MobileNumber"
          value={Person.MobileNumber}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        {isEdit?  <button type="button" className="btn btn-primary" onClick={updatePerson}>
         Updtae
        </button>: <button type="button" className="btn btn-primary" onClick={addPerson}>
          AddPerson
        </button>}
        {/* <button type="button" className="btn btn-primary" onClick={addPerson}>
          AddPerson
        </button>
        <button type="button" className="btn btn-primary" onClick={updatePerson}>
         Updtae
        </button> */}
      </form>
      <hr />
      <table className="table  mt-3">
        <thead>
          <tr>
            <th>id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DateOfBirth</th>
            <th>EmailId</th>
            <th>MobileNumber</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {person1.map((pers, i) => (
            <tr key={i}>
              <td>{pers.id}</td>
              <td>{pers.firstname}</td>
              <td>{pers.lastname}</td>
              <td>{pers.dateofBirth}</td>
              <td>{pers.EmailId}</td>
              <td>{pers.MobileNumber}</td>
              <td>
               <button type="button" onClick={()=>{editPerson(pers)}} className ="btn btn-warning"> Edit</button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deletePerson(pers);
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
};

export default Person;
