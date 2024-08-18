import React from 'react'
import Menu from './menu'

function Header({ menus, toggleUnderline }) {
  return (
    <div>
      <h4 className='text-[30px]'>Props Drilling</h4>

      <Menu menus={menus} toggleUnderline={toggleUnderline} />
    </div>
  )
}

export default Header