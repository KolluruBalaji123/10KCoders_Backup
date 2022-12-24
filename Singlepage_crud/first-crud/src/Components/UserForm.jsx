import React from 'react'

const UserForm = ({handleChange,users,handleSubmit, btnText}) => {
  return (
    <div>
     <form>
        <div className="mb-3">
          <label htmlFor="">Id</label>
          <input
            type="number"
            name="id"
            disabled
            value={users.id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">FullName</label>
          <input
            type="text"
            name="fullname"
            value={users.fullname}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="">UserName</label>
          <input
            type="username"
            name="username"
            value={users.username}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={users.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={users.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">ConfirmPassword</label>
          <input
            type="confirmpassword"
            name="confirmpassword"
            value={users.confirmpassword}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>{btnText}</button>
      </form>
    </div>
  )
}

export default UserForm