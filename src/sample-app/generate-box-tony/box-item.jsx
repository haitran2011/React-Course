import React from 'react'
import { randomColor } from '../../utils/randomColor';

function BoxItem({ box }) {
  const [bgColor, setBgColor] = React.useState('#' + randomColor());

  function handleUpdateBgColor() {
    setBgColor('#' + randomColor())
  }

  console.log('BoxItem: ', box.id)
  return (
    <div 
      className="generate_box"
      style={{
        backgroundColor:bgColor,
      }}
      onClick={handleUpdateBgColor}
    >
      {box.name}
    </div>
  )
}

export default BoxItem