import React from 'react'
import logo from '../Asset/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { faFacebook, faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Menu({setMenu}) {
  return (
    <div className='w-full h-screen bg-black flex justify-center'>
         <div className="w-full lg:w-[60%]  px-10 pt-10" >
            <div className="w-full  flex justify-between py-4">
                  <NavLink to={"/"}><img src={logo} alt="logo" height={140} width={140} /></NavLink> 
                  <FontAwesomeIcon icon={faTimes} size='2x' onClick={()=>setMenu(false)} className='text-white  hover:rotate-45 transition duration-75'/>
            </div>
            <div className="w-full  flex flex-wrap py-14  pr-32 justify-between border-b border-neutral-800 md:gap-2 gap-8 ">
                 <div className="w-full md:w-fit lg:w-1/2 flex flex-col flex-grow gap-8">
                       <NavLink to={'/project-zero'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>PROJECT ZERO</NavLink>
                       <NavLink to={'/project-one'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>PROJECT ONE</NavLink>
                       <NavLink to={'/'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>ENERGY</NavLink>
                       <NavLink to={'/'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>TEST RIDE</NavLink>
                       <NavLink to={'/'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>STORE</NavLink>
                 </div>  
                 <div className="w-full md:w-fit lg:fit flex flex-col gap-8 ">
                 <NavLink to={'/'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>CAREERS</NavLink>
                 <NavLink to={'/'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>BLOG</NavLink>
                 <NavLink to={'/'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>VISION</NavLink>
                 <NavLink to={'/'} className={'hover:text-cyan-500 transition-all duration-100 text-3xl lg:text-4xl md:text-[36px] font-normal'}>CONTACT</NavLink>
                 </div>  
            </div>
     
         <footer className='flex flex-col md:flex-row items-center w-full md:justify-between mt-3'>
              <div className="">
                 <h6 className='text-sm'>YATRI MOTORCYCLES © 2024</h6 >
              </div>
              <div className="text-white flex gap-3">
                <FontAwesomeIcon icon={faYoutube}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faLinkedin}/>
                <FontAwesomeIcon icon={faFacebookSquare}/>
              
              </div>
         </footer>
         </div>
             
    </div>
  )
}

export default Menu
