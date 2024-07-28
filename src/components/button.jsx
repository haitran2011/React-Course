import React from 'react'

function Button({ text = "Button Text" }) {
  return (
    <button>{text}</button>
  )
}

export default Button