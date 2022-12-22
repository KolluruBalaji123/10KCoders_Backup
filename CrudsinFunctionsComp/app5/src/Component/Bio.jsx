import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Bio = () => {
  useEffect(() => {
    getallbio();
  }, []);
  const [isEdit, setIsEdit] = useState(false);
  const [bio, setbio] = useState({
    id: "",
    username: "",
    password: "",
    EmailAddress: "",
    Man: "",
    Women: "",
    Dates: "",
    Month: "",
    Year: "",
    Height: "",
    Weight: "",
  });
  const [allbio, allsetbio] = useState([]);

  const handleChange = (e) => {
    let newbio = { ...bio };
    newbio[e.target.name] = e.target.value;
    setbio(newbio);
  };
  const getallbio = () => {
    axios.get("http://localhost:3201/Bio").then((response) => {
      allsetbio(response.data);
    });
  };
  const AddBio = () => {
    axios.post("http://localhost:3201/Bio", bio).then((res) => {
      getallbio();
      clearform();
    });
  };
  const editbio = (info) => {
    setIsEdit(true);
    setbio(info);
  };
  const deletebio = (info) => {
    axios.delete("http://localhost:3201/Bio/" + info.id, bio).then(() => {
      getallbio();
    });
  };
  const updatebio = () => {
    setIsEdit(false);
    axios.put("http://localhost:3201/Bio/" + bio.id, bio).then(() => {
      getallbio();
      clearform();
    });
  };
  const clearform = () => {
    setbio({
      id: "",
      username: "",
      password: "",
      EmailAddress: "",
      Man: "",
      Women: "",
      Dates: "",
      Month: "",
      Year: "",
      Height: "",
      Weight: "",
    });
  };
  return (
    <div>
      <form>
        <label htmlFor="">Id</label>
        <input
          type="text"
          name="id"
          value={bio.id}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name="username"
          value={bio.username}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Pasword</label>
        <input
          type="text"
          name="password"
          value={bio.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">EmailAddress</label>
        <input
          type="text"
          name="EmailAddress"
          value={bio.EmailAddress}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Satus1</label>
        <select
          name="Man"
          value={bio.Man}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value={""}>SelectOption</option>
          <option value={"I am Women"}> I am Women</option>
          <option value={"I am Man"}> I am Man</option>
        </select>
        <label htmlFor="">Satus</label>
        <select
          name="Women"
          value={bio.Women}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value={""}>SelectOption</option>
          <option value={"i want Women"}>i want Women</option>
          <option value={"i want Men"}>i want men</option>
        </select>
        <br />
        <br />

        <label htmlFor="">Date of Birth</label>
        <select
          name="Year"
          value={bio.Year}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value={""}>SelectOption</option>
          <option value={"2011"}>2011</option>
          <option value={"2012"}>2012</option>
          <option value={"2013"}>2013</option>
          <option value={"2014"}>2014</option>
          <option value={"2015"}>2015</option>
          <option value={"2016"}>2016</option>
          <option value={"2017"}>2017</option>
          <option value={"2018"}>2018</option>
          <option value={"2019"}>2019</option>
        </select>

        <select
          name="Month"
          value={bio.Month}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value={""}>select</option>
          <option value={"january"}>January</option>
          <option value={"february"}>February</option>
          <option value={"march"}>March</option>

          <option value={"April"}>April</option>

          <option value={"May"}>May</option>

          <option value={"june"}>June</option>

          <option value={"july"}>July</option>

          <option value={"August"}>August</option>

          <option value={"September"}>September</option>
        </select>
        <select
          name="Dates"
          value={bio.Dates}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value={""}>selectDate</option>
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"4"}>4</option>
          <option value={"5"}>5</option>
          <option value={"6"}>6</option>
          <option value={"7"}>7</option>
          <option value={"8"}>8</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Height</label>
        <select
          name="Height"
          value={bio.Height}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value={""}>selectFeet</option>
          <option value={"1Feet"}>1Feet</option>
          <option value={"2Feet"}>2Feet</option>
          <option value={"3Feet"}>3Feet</option>
          <option value={"4Feet"}>4Feet</option>
          <option value={"5Feet"}>5Feet</option>
          <option value={"6Feet"}>6Feet</option>
        </select>
        <label htmlFor="">Weight</label>
        <select
          name="Weight"
          value={bio.Weight}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value={""}>selectKgs</option>
          <option value={"10kgs"}>10kgs</option>
          <option value={"20kgs"}>20kgs</option>
          <option value={"30kgs"}>30kgs</option>
          <option value={"40kgs"}>4okgs</option>
          <option value={"50kgs"}>50kgs</option>
          <option value={"60kgs"}>6okgs</option>
        </select>
        <br />
        {isEdit ? (
          <button
            type="button"
            onClick={updatebio}
            className="btn btn-secondary"
          >
            upate
          </button>
        ) : (
          <button type="button" onClick={AddBio} className="btn btn-primary">
            Add
          </button>
        )}
        {/* <button type='button' onClick={AddBio} className="btn btn-primary" >Add</button>
          <button type='button' onClick={updatebio} className="btn btn-secondary" >upate</button> */}
      </form>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName:</th>
            <th>Password:</th>
            <th>EmailAddress</th>
            <th>Men</th>
            <th>Women</th>
            <th>year</th>
            <th>Month</th>
            <th>Date</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allbio.map((info) => (
            <tr>
              <td>{info.id}</td>
              <td>{info.username}</td>
              <td>{info.password}</td>
              <td>{info.EmailAddress}</td>
              <td>{info.Man}</td>
              <td>{info.Women}</td>
              <td>{info.Year}</td>
              <td>{info.Month}</td>
              <td>{info.Dates}</td>
              <td>{info.Height}</td>
              <td>{info.Weight}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    editbio(info);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deletebio(info);
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

export default Bio;
