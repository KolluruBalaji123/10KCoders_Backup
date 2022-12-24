import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ usr }) => {
  // console.log(usr)
  const deleteuser=(usr)=>{
    console.log(usr)
    navigate("/delete/"+usr.id)

  }
  const edituser=(usr)=>{
    navigate("/edit/"+usr.id)

  }
  const navigate=useNavigate();
 
  return (
        <tr>
        <td>{usr.id}</td>
        <td>{usr.fullname}</td>
        <td>{usr.username}</td>
        <td>{usr.email}</td>
        <td>{usr.password}</td>
        <td>{usr.confirmpassword}</td>
        <td>
            <button className="btn btn-warning" onClick={()=>{edituser(usr)}}>Edit</button>
        </td>
        <td>
            <button className="btn btn-danger" onClick={()=>{deleteuser(usr)}}>Delete</button>
        </td>
      </tr>

  );
};

export default User;
