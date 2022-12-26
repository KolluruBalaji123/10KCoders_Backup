import React from 'react'
import { MycontextConsumer } from './Mycontext'

const UserDetails = () => {
  return (
    <div>
    <MycontextConsumer>//ContextMethod
        {(userInfo)=>{
          return  <ul>
                {userInfo.map((user,i)=> <li key={i}>{user}</li>)}
            </ul>
        }}
    </MycontextConsumer>
  
    </div>
  )
}

export default UserDetails