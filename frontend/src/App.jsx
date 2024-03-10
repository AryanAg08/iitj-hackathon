import { useState } from 'react'
import {Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar'
import { HomePage } from "./pages/index"



function App() {
 

  return (
    <>
    
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      </Routes>   
    </>
  )
}

export default App
