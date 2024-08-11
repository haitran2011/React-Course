import React from 'react'

function EventHandler() {
  const [forceUpdate, setForceUpdate] = React.useState(Date.now());

  const renderHeading = (
    <h5>heading</h5>
  )

  // curry function
  // const handleForceUpdate = () => {
  //   return () => {
  //     setForceUpdate(Date.now())
  //   } 
  // }
  const handleForceUpdate = () => {
    setForceUpdate(Date.now())
  }

  function renderTypography() {
    return (
      <div>renderTypography</div>
    )
  }

  console.log('EventHandler: ',  forceUpdate)
  // 
  return (
    <div>
      <h1>EventHandler: {forceUpdate}</h1>
      <br />
      {renderTypography()} <br />
      {renderHeading}
       {/* click -> handleForceUpdate */}
      {/* <button type="button" onClick={handleForceUpdate()}>Force Update</button> */}
      <br />
      {/* click -> () => {} ->  handleForceUpdate */}
      <button type="button" onClick={() => handleForceUpdate()}>Force Update 2</button>
    </div>
  )
}

export default EventHandler