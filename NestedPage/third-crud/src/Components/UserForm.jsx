import React from 'react'

const UserForm = ({handleChange,Person,handlePerson,btnText}) => {
  return (
    <div className='container'>
     <form>
        <label htmlFor="">Id</label>
        <input type="number" name="id" value={Person.id} onChange={(e)=>{handleChange(e)}} /><br/><br/>
        <label htmlFor="">FirstName</label>
        <input type="text" name="firstname" value={Person.firstname} onChange={(e)=>{handleChange(e)}} /><br/><br/>
        <label htmlFor="">LastName</label>
        <input type="text" name="lastname" value={Person.lastname} onChange={(e)=>{handleChange(e)}} /><br/><br/>
        <label htmlFor="">DateofBirth</label>
        <input type="date" name="dateofBirth" value={Person.dateofBirth }onChange={(e)=>{handleChange(e)}} /><br/><br/>
        <label htmlFor="">EmailId</label>
        <input type="eamil" name="EmailId" value={Person.EmailId} onChange={(e)=>{handleChange(e)}} /><br/><br/>
        <label htmlFor="">MobileNumber</label>
        <input type="tel" name="MobileNumber" value={Person.MobileNumber} onChange={(e)=>{handleChange(e)}} /><br/><br/>
        <button type="button" className="btn btn-primary" onClick={handlePerson}>
        {btnText}
        </button>
      </form>
    </div>
  )
}

export default UserForm