import React, { useContext } from 'react'
import { AuthContext } from './ContextProvider'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const {login} = useContext(AuthContext)
  return login?children:<Navigate to='/login'/>
}

export default PrivateRouter
