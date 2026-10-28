import React from 'react'
import { AuthDashboard } from './components/Dashboard'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import { AuthProfile } from './components/Profile'

let user={
  name:"Aman",
  role:"Developer"
};
function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/dashboard' element={<AuthDashboard/>}/>
      <Route path='/profile' element={<AuthProfile {...user}/>}/>

    </Routes>
    </>
  )
}

export default App