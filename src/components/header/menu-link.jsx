import React from 'react'
import Button from '../button'

function MenuLink({ id, text, underline, toggleUnderline }) {
  return (
    <>
      <a
        style={{
          textDecoration: underline ? 'underline' : 'none'
        }}
      >
        {text}
      </a>
      <Button 
        isGradient 
        textColor="#fff" 
        text="Toggle Underline"
        onClick={() => toggleUnderline(id)}
      />
    </>
  )
}

export default MenuLink