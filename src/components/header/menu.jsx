import React from 'react'
import MenuLi from './menu-li'

function Menu({ menus, toggleUnderline }) {
  return (
    <ul>
      <MenuLi menus={menus} toggleUnderline={toggleUnderline} />
    </ul>
  )
}

export default Menu