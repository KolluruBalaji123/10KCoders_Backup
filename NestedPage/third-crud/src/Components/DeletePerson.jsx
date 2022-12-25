import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";


const DeletePerson = () => {
  const [Person, setPerson] = useState({});
  const Params = useParams();
  console.log(Params);
 
  const navigate=useNavigate();
  useEffect(() => {
    fetch("http://localhost:3201/person/" + Params.id)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPerson(data);
      });
  }, []);
 
  //for deleting the particular user
   const ConfirmDelete=()=>{
    fetch("http://localhost:3201/person/"+Params.id,{
      method:"DELETE"
    }).then(()=>{
      navigate("/")

    })
   }
  return (
    <div>
      <ul>
        <li>{Person.id}</li>
        <li>{Person.firstname}</li>
        <li>{Person.lastname}</li>
        <li>{Person.dateofBirth}</li>
        <li>{Person.EmailId}</li>
        <li>{Person.MobileNumber}</li>
      </ul>
      <button className="btn btn-danger" onClick={ConfirmDelete}>ConfirmDelete</button>
    </div>
  );
};

export default DeletePerson;
