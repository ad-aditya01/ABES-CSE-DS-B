import React, { useEffect, useState } from 'react'
import Forecast from './component/Forecast'

function App(){
  const [looks,setLooks]=useState([])
  useEffect(()=>{
    fetch('https://api.open-meteo.com/v1/forecast?latitude=28.68736065681822&longitude=77.19534943378419&hourly=temperature_2m,relative_humidity_2m,rain,wind_speed_10m,cloud_cover')
    .then(res=>res.json())
    .then(data=>{
      setLooks(data);
    })
  },[])
  return(
    <div>
      {
        looks.map((l,i)=>(
          <Forecast key={i} props={l}/>
        ))
      }
    </div>
  )
}

export default App