import React from 'react'

function User(props) {
  console.log("User", props)
  const access_token = window.sessionStorage.getItem('access_token');

  if(!access_token) {
    return (
      <>please sign in</>
    )
  }
  
  return (
    <>
      this is user
    </>
  )
}

export default User