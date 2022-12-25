import React from 'react'

const Userform = ({handleChange,Address,handleSubmit,btnText}) => {
  return (
    <div>
        <form >
  <div className="mb-3">
          <label htmlFor="">Id</label>
          <input
            type="number"
            name="id"
            disabled
            value={Address.id}
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
            value={Address.street}
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
            value={Address.empty}
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
            value={Address.city}
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
            value={Address.state}
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
            value={Address.zipcode}
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
            value={Address.country}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type='button' className='btn btn-primary' onClick={handleSubmit} > {btnText}</button>
  </form>
    </div>
  )
}

export default Userform