import React from 'react'
import { useAuth } from './Auth'

const LoginComp = () => {
    const auth=useAuth();
    console.log(auth)
  return (
    <div>

    </div>
  )
}

export default LoginComp