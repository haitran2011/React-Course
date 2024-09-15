import React from 'react'

function TrafficLightTony() {
  return (
    <div>
      <h1>Sample App: TrafficLightTony</h1>

      <div className="traffic_container">
        <div className='traffic-light-container traffic-light-container--vertical'>
          <div 
            className='traffic-light' 
            style={{
              backgroundColor: 'red'
            }} 
          />
          <div 
            className='traffic-light' 
            style={{
              backgroundColor: 'yellow'
            }} 
          />
          <div 
            className='traffic-light' 
            style={{
              backgroundColor: 'green'
            }} 
          />
        </div>
      </div>


      <h4>Demo phase layout, paint</h4>

      <div>
        <div style={{ backgroundColor: '#f00', transition: 'all 1s linear' }}>A</div> 
        <div style={{ backgroundColor: '#ff0'}}>B</div>
      </div>
    </div>
  )
}

export default TrafficLightTony