import React from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'; 
import logo from '../Asset/logo.png';

function Navbar({setMenu}) {
  return (
  <div className="flex top-3 justify-center fixed w-full z-50 pl-5">

    <div className=' flex lg:gap-64 px-6 w-full lg:w-fit  py-5 lg:py-4 rounded-sm bg-black/60 justify-between '>
        <div>
        <NavLink to={'/'}><img height={63} width={63
        } src={logo}></img></NavLink>
        </div>
        <div className='lg:flex  gap-16 hidden  md:flex  md:-tracking-wider font-normal uppercase '>
        <NavLink className={'hover:text-neutral-400 ease-in-out duration-100 text-inherit '} to={'/project-zero'}>Project Zero</NavLink>
        <NavLink className={'hover:text-neutral-400 ease-in-out duration-100 text-inherit '} to={'/project-one'}>Project One</NavLink>
        <a href='https://yatrienergy.com/' className={'hover:text-neutral-400 ease-in-out duration-100 text-inherit'} >Energy</a>
         <div>
          
          <FontAwesomeIcon  onClick={()=>setMenu(true)} icon={faEllipsisV} className="text-white cursor-pointer hover:text-neutral-400 ease-in-out duration-100 text-white'" />
          </div>

             
        </div>
        <NavLink  className={'flex lg:hidden md:hidden'} >    <FontAwesomeIcon onClick={()=>setMenu(true)} icon={faEllipsisV} className="text-white hover:text-neutral-400 ease-in-out duration-100 text-white'" /></NavLink>

      
    </div>
</div>
  )
}

export default Navbar
