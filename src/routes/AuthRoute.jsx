import React from 'react'
import { Navigate } from 'react-router-dom';

function AuthRoute({ children }) {
  const access_token = window.sessionStorage.getItem('access_token');
  console.log('--------------AUTH ROUTE')

  if(!access_token) {
    return <Navigate to="/login"/>
  }

  return (
    <>
      {children}  
    </>
  )
}

export default AuthRoute