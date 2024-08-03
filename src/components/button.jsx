import React from 'react'

function Button({ text = "Button Text", ...restProps }) {
  return (
    <button {...restProps}>{text}</button>
  )
}

export default Button