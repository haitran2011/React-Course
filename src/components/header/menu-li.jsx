import React from 'react'
import MenuLink from './menu-link';

function MenuLi({ menus, toggleUnderline }) {
  return (
    <>
      {menus.map(menu => (
        <li key={menu.id}>
          <MenuLink 
            text={menu.title} 
            underline={menu.underline} 
            id={menu.id}
            toggleUnderline={toggleUnderline} 
          />
        </li>
      ))}
    </>
  )
}

export default MenuLi