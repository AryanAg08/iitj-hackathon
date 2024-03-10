import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Login from './pages/loginPage'
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  

  return (
    <Login></Login>

=======
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
>>>>>>> 30046fc0c4186109e6d9cbfff0ed9d7908909fa8
  )
  
}

export default App
