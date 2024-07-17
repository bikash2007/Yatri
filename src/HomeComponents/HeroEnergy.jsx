import React from 'react'
import Energy from '../Asset/energy-landing.jpg'
import { NavLink } from 'react-router-dom'

function HeroEnergy() {
  return (
    <div className='w-full h-screen bg-cover bg-center flex items-center justify-center' style={{
        backgroundImage:`url(${Energy})`}}>
        
             
        <div className="flex flex-col gap-56 ">
                      <div className='flex flex-col items-center mt-72 gap-5 '>
                         <h1 className='text-5xl font-semibold tracking-widest'>YATRI <span className='text-[#00CCCC]'>ENERGY</span></h1>
                         <h5 className='tracking-widest text-base text-glow'>TRAVELING REDEFINED</h5>
                      </div>
                      <div className='tracking-widest mb-10 flex flex-wrap gap-3 justify-center'>
                             <NavLink to={"/project-one"} className={'border-2 w-[180px] h-[42.4px] justify-center items-center flex transition-all duration-300 ease-in-out font-medium border-[#F7F7F7]  hover:scale-110 backdrop-filter backdrop-blur-sm '}>DISCOVER P1</NavLink>
                      </div>
                  
                  </div>  
    </div>
  )
}

export default HeroEnergy
