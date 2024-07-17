import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'
import Menu from './Component/Menu'
import Footer from './Component/Footer'

export default function App() {
  const [menu ,setMenu]=useState(false)
  return (
    <div className='text-white -tracking-tighter'>
      
      {menu ? <Menu setMenu={setMenu}/> :
    <>
     <Navbar setMenu={setMenu}/>
     <Outlet/>
     
    </> 
      }
    </div>
     
  )
}
