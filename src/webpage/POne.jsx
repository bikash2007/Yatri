import React, { useState } from 'react'
import P1Landing from '../P1Components/P1Landing'
import Specs from '../P0Components/Specs'
import P1Comfort from '../P1Components/P1Comfort'
import OffRoad from '../P1Components/OffRoad'
import P1Economy from '../P1Components/P1Economy'
import P1Battery from '../P1Components/P1Battery'
import ReserveNav from '../Component/ReserveNav'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Menu from '../Component/Menu'


function POne() {
  const [scrolled, setScrolled] = useState(false);
  const [menu ,setMenu]=useState(false)

  return (
  <div className='bg-black text-white'>
    
{menu ? <Menu setMenu={setMenu}/> :
<>
  {scrolled ? <ReserveNav/> : <Navbar setMenu={setMenu}/> }
  <P1Landing/>
  <P1Comfort setScrolled={setScrolled}/>
  <OffRoad/>
  <P1Economy/>
  <P1Battery/>
  <Specs/>
  <Footer/>
</>
}
</div>
    
    
  )
}

export default POne
