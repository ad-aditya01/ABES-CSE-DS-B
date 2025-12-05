import React, { useEffect, useState } from 'react'
import Link1 from './component/Link1'
import Fashion from './component/Fashion'

function App(){
  const [books,setBooks]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setBooks(data);
    })
  },[])
  return(
    <div>{
      books.map((b,i)=>(
        <Fashion key={i} props={b}/>

      ))
      }
      
    </div>
  )
}

export default App