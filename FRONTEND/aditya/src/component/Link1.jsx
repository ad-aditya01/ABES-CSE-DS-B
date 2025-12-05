import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'


function Home(){
    return <h1>This is my home page</h1>
}
function About(){
    return <h1>This is my About page</h1>
}

const Link1 = () => {
  return (
    <div>
        <nav>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/"element={<Home/>}/>
             <Route path="/about"element={<About/>}/>
        </Routes>

    </div>
  )
}

export default Link1