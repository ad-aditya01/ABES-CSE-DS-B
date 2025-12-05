import React from 'react'
import './Forecast.css'
function Forecast({props}) {
  return (
    <div id='card'>
        <img src={props.image} alt="" height={100} width={100} />
        <h4>Temperature:{props.temperature}</h4>
         <h4>Relative Humidity:{props.relativehumidity}</h4>
          <h4>Rain:{props.rain}</h4>
           <h4>Wind Speed:{props.windspeed}</h4>
            <h4>Cloud Cover Total:{props.cloud}</h4> 

    </div>
  )
}


export default Forecast