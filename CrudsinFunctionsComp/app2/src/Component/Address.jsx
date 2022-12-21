import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Address = () => {
  //useEffect is equal to Component DidMount
  useEffect(() => {
    getAddess()
  }, []);
const[isEdit,setIsEdit]=useState(false)
  const [address1, setAddress1] = useState([]);
  const [address, setAddress] = useState({
    id: "",
    street: "",
    empty: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });
  const handleChange = (e) => {
    let newAddress = { ...address };
    newAddress[e.target.name] = e.target.value;
    setAddress(newAddress);
  };
  const getAddess = () => {
    axios.get("http://localhost:3201/Address").then((response) => {
      setAddress1(response.data);
    });
  };
  const addAddress = () => {
    axios.post("http://localhost:3201/Address", address).then(() => {
      getAddess();
      clearForm();
    });
  };
   const editAddress=(adr)=>{
   setIsEdit(true)
    setAddress(adr)
    
   }
   const updateAddress=()=>{
     setIsEdit(false)
    axios.put("http://localhost:3201/Address/"+address.id,address).then(()=>{
        getAddess();
        clearForm();
    })
   }
   const deleteAddress=(adr)=>{
    axios.delete("http://localhost:3201/Address/"+adr.id,address).then(()=>{
        getAddess();
    })

   }
  const clearForm=()=>{
    setAddress({
        id: "",
        street: "",
        empty: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",

    })

  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="">Id</label>
          <input
            type="number"
            name="id"
            disabled
            value={address.id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Street</label>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="">Empty</label>
          <input
            type="text"
            name="empty"
            value={address.empty}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">city</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">State</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Zipcode</label>
          <input
            type="number"
            name="zipcode"
            value={address.zipcode}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Country</label>
          <input
            type="text"
            name="country"
            value={address.country}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {isEdit? <button type="button" className="btn btn-secondary" onClick={updateAddress}>
         updateAddress
        </button>: <button type="button" className="btn btn-primary" onClick={addAddress}>
          Submit
        </button>}
        {/* <button type="button" className="btn btn-primary" onClick={addAddress}>
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={updateAddress}>
         updateAddress
        </button> */}
      </form>
      <hr />
      <table className="table  mt-3">
        <thead>
          <tr>
            <th>id</th>
            <th>street</th>
            <th>Empty</th>
            <th>city</th>
            <th>state</th>
            <th>zipcode</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {address1.map((adr,i) => {
          return  <tr key={i}>
              <td>{adr.id}</td>
              <td>{adr.street}</td>
              <td>{adr.empty}</td>
              <td>{adr.city}</td>
              <td>{adr.state}</td>
              <td>{adr.zipcode}</td>
              <td>{adr.country}</td>
              <td>
                <button type="button" className="btn btn-warning" onClick={()=>{editAddress(adr)}}>Edit</button>
              </td>
              <td>
              <button type="button" className="btn btn-danger" onClick={()=>{deleteAddress(adr)}}>Delete</button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Address;
