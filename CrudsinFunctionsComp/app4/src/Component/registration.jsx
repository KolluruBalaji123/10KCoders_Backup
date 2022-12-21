import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Registration = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [college1, setCollege1] = useState([]);
  const [college, setCollege] = useState({
    id: "",
    university: "",
    institute: "",
    Branch: "",
    Degree: "",
    statusc: "",
    Average: "",
    Experience: "",
    website: "",
  });
  useEffect(() => {
    getCollege();
  }, []);
  const handleChange = (e) => {
    let newcollege = { ...college };
    newcollege[e.target.name] = e.target.value;
    setCollege(newcollege);
  };
  const getCollege = () => {
    axios.get("http://localhost:3201/Registrations").then((response) => {
      setCollege1(response.data);
    });
  };
  const addCollege = () => {
    axios.post("http://localhost:3201/Registrations", college).then(() => {
      getCollege();
      clearform();
    });
  };
  const editcollege = (col) => {
   setIsEdit(true)
    setCollege(col);
  };
  const deletecollege = (col) => {
    axios
      .delete("http://localhost:3201/Registrations/" + col.id, college)
      .then(() => {
        getCollege();
      });
  };
  const updateCollge = () => {
    setIsEdit(false);
    axios
      .put("http://localhost:3201/Registrations/" + college.id, college)
      .then(() => {
        getCollege();
        clearform();
      });
  };
  const clearform = () => {
    setCollege({
      id: "",
      university: "",
      institute: "",
      Branch: "",
      Degree: "",
      statusc: "",
      Average: "",
      Experience: "",
      website: "",
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="">Id:</label>
        <input
          type="number"
          name="id"
          disabled
          value={college.id}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">University:</label>
        <input
          type="text"
          name="university"
          value={college.university}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">institute</label>
        <input
          type="text"
          name="institute"
          value={college.institute}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Branch</label>
        <select
          name="Branch"
          value={college.Branch}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option>select branch</option>
          <option value={"Mechanical"}>Mechanical</option>
          <option value={"Electrical"}>Electrical</option>
          <option value={"Civil"}>Civil</option>
          <option value={"cse"}>cse</option>
          <option value={"EEE"}>EEE</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Degree</label>
        <select
          name="Degree"
          value={college.Degree}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option>select branch</option>
          <option value={"B.Tech"}>B-Tech</option>
          <option value={"Diploma"}>Diploma</option>
          <option value={"Degree"}>Degree</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Satus</label>
        <input
          type="radio"
          name="statusc"
          value={"pursuing"}
          onChange={(e) => {
            handleChange(e);
          }}
          checked={college.statusc === "pursuing"}
        />
        Pursuing
        <input
          type="radio"
          name="statusc"
          value={"Completed"}
          onChange={(e) => {
            handleChange(e);
          }}
          checked={college.statusc === "Completed"}
        />
        Completed
        <br />
        <br />
        <label htmlFor="">Average</label>
        <input
          type="number"
          name="Average"
          value={college.Average}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Experience</label>
        <input
          type="number"
          name="Experience"
          value={college.Experience}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">website</label>
        <input
          type="text"
          name="website"
          value={college.website}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        {/* <button  type='button' className='btn btn-primary' onClick={addCollege}>Add</button>
        <button  type='button' className='btn btn-secondary' onClick={updateCollge}>update</button> */}
        {isEdit ? (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={updateCollge}
          >
            update
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={addCollege}
          >
            Add
          </button>
        )}
      </form>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Uiversity:</th>
            <th>Insttute:</th>
            <th>Branch</th>
            <th>Degree</th>
            <th>Sattus</th>
            <th>Average</th>
            <th>Experience</th>
            <th>website</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {college1.map((col,i) => (
            <tr key={i}>
              <td>{col.id}</td>
              <td>{col.university}</td>
              <td>{col.institute}</td>
              <td>{col.Branch}</td>
              <td>{col.Degree}</td>
              <td>{col.statusc}</td>
              <td>{col.Average}</td>
              <td>{col.Experience}</td>
              <td>{col.website}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    editcollege(col);
                  }}
                >
                  EDit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deletecollege(col);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Registration;
