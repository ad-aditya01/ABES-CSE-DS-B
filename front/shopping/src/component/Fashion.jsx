import React from 'react'
import './Fashion.css'
function Fashion({props}) {
  return (
    <div id='card'>
        <img src={props.image} alt="" height={100} width={100} />
        <h4>Title:{props.title}</h4>
        <h4>Price:{props.price}</h4>

    </div>
  )
}

export default Fashion