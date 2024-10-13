import React from 'react'
import { useParams } from 'react-router-dom'

function StateDetail() {
  const params = useParams();

  console.log('params: ', params)

  return (
    <div>StateDetail</div>
  )
}

export default StateDetail