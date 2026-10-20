import { useState } from 'react'
import './App.css'
import { Link, Outlet, Routes, useParams } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
function App() {
   let arr =[
      {
        id:1,
        pro:"Laptop"
      },{
        id:2,
        pro:"Window"
      },{
        id:3,
        pro:"Game"
      }
    ]
  function Home() {
    return (
      <div>
        <h1>Home</h1>
        {arr.map((p)=><section key={p.id}><Link to={`/product/${p.id}`} >{p.pro}</Link></section>)}
      </div>
    )
  }
  function Product() {
    let { id }=useParams();
    console.log(id);
    let data = arr.find((p)=>p.id===Number(id));
    return (
      <div>
        <h1>Product</h1>
        {data ?<h2>{data.pro}</h2>:<h2>Not Found</h2>}
      </div>
    )
  }
  function About() {
    return <h1>About</h1>
  }
  function Navbar() {
    return (
      <>
        <ul>
          <Link to={"/"}>Home</Link>
          <br />
          <Link to={"/product/1"}>Product</Link>
          <br />
          <Link to={"/about"}>About</Link>
          <br />
          <Link to={"/login"}>Login</Link>
        </ul>
        <Outlet/>
      </>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Route>
      <Route path='/login' element={<Login/>}/>
       <Route path='*' element={<h1>yeh kha aa gye</h1>}/>
    </Routes>
  )
}

export default App
