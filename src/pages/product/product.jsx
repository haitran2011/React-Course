import React from 'react'

function Product() {
  console.log("Product")
  const access_token = window.sessionStorage.getItem('access_token');

  if(!access_token) {
    return (
      <>please sign in</>
    )
  }
  
  return (
    <>
     this is Product
    </>
  )
}

export default Product