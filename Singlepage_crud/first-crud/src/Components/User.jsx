import React from "react";

const User = ({ usr }) => {
  // console.log(usr)
  const deleteuser=(usr)=>{
    console.log(usr)

  }
  return (
        <tr>
        <td>{usr.id}</td>
        <td>{usr.fullname}</td>
        <td>{usr.username}</td>
        <td>{usr.email}</td>
        <td>{usr.password}</td>
        <td>{usr.confirmpassword}</td>
        <td>
            <button className="btn btn-warning">Edit</button>
        </td>
        <td>
            <button className="btn btn-danger" onClick={()=>{deleteuser(usr)}}>Delete</button>
        </td>
      </tr>

  );
};

export default User;
