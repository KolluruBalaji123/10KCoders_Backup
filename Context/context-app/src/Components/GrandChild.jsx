import React from 'react'
import UserDetails from './UserDetails'

const GrandChild = ({allUsers}) => {
  return (
    <div>
        <h2>Hello from GrandChild Component</h2>
        <hr/>
        <UserDetails/>
        {/* <UserDetails allUsers={allUsers} /> */}
    </div>
  )
}

export default GrandChild