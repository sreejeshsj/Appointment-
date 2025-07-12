import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import {ToastContainer,toast} from 'react-toastify'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CalenderPanel from './components/CalenderPanel'
import Appointment from './components/Appointment'
function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[17vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calenderpanel' element={<CalenderPanel/>}/>
        <Route path='/appoinment' element={<Appointment/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
