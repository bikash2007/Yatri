import React from 'react'
import logo from '../Asset/logo.png';
import { NavLink } from 'react-router-dom';


function ReserveNav() {
  return (
    <div className="flex top-0 justify-center fixed w-full z-50 pl-5">

    <div className=' flex lg:gap-64 px-6 w-full  py-5 lg:py-4 rounded-sm bg-black/60 justify-between '>
        <div>
        <NavLink to={'/'}><img height={63} width={63
        } src={logo}></img></NavLink>
        </div>
        <div className='lg:flex  gap-16 hidden  md:flex  md:-tracking-wider font-normal uppercase '>

        <a href='https://yatrienergy.com/' className={'hover:scale-110 ease-in-out duration-100 text-inherit border-2 border-neutral-300 tracking-widest font-medium px-8 py-1'} >RESERVE</a>


             
        </div>

      
    </div>
</div>
  )
}

export default ReserveNav
