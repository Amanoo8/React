import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'

function App() {
  
  const [value , setValue]=useState(0);
  return (
    <div>
      <Navbar count={value}/>
      <h1>Sehrawat</h1>
      <Counter fun={setValue}/>
    </div>
  )
}

export default App
