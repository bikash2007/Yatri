import React, { useState } from 'react'
import P0Landing from '../P0Components/P0Landing'
import P0Render2 from '../P0Components/P0Render2'
import P0Render3 from '../P0Components/P0Render3'
import P0Render4 from '../P0Components/P0Render4'
import P0Render5 from '../P0Components/P0Render5'
import Specs from '../P0Components/Specs'
import ReserveNav from '../Component/ReserveNav'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Menu from '../Component/Menu'

function PZero() {
   const[scrolled,setScrolled]=useState(false)
  const [menu ,setMenu]=useState(false)

  return (
    <div className='bg-black text-white'>
   {menu ? <Menu setMenu={setMenu}/> :
   <>
           {scrolled ? <ReserveNav/> :<Navbar setMenu={setMenu}/>}
       <P0Landing setScrolled={setScrolled}/>
       <P0Render2 />
       <P0Render3/>
       <P0Render4/>
       <P0Render5/>
       <Specs/>
       <Footer/>
   </>}
    </div>
  )
}

export default PZero
