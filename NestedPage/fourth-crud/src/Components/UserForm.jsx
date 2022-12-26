import React from 'react'

const UserForm = ({handleChange,Registrations,handleCollege,btnText}) => {
  return (
    <div>
       <form >
      <label htmlFor="">Id:</label>
        <input
          type="number"
          name="id"
          disabled
          value={Registrations.id}
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
          value={Registrations.university}
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
          value={Registrations.institute}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Branch</label>
        <select
          name="Branch"
          value={Registrations.Branch}
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
          value={Registrations.Degree}
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
          checked={Registrations.statusc === "pursuing"}
        />
        Pursuing
        <input
          type="radio"
          name="statusc"
          value={"Completed"}
          onChange={(e) => {
            handleChange(e);
          }}
          checked={Registrations.statusc === "Completed"}
        />
        Completed
        <br />
        <br />
        <label htmlFor="">Average</label>
        <input
          type="number"
          name="Average"
          value={Registrations.Average}
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
          value={Registrations.Experience}
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
          value={Registrations.website}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <button type='button'className='btn btn-primary' onClick={handleCollege}>{btnText}</button>
      </form>

    </div>
  )
}

export default UserForm