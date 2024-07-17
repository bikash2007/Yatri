import React from 'react'
import p1landing from '../Asset/p1-9.jpg'
import { NavLink } from 'react-router-dom'
function Hero() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-cover bg-center'
    style={{ backgroundImage: `url(${p1landing})` }}>

                <div className="flex flex-col gap-96 pt-[148px]">
                      <div>
                         <h1 className='text-5xl font-semibold tracking-widest'>PROJECT <span className='text-[#00CCCC]'>ONE</span></h1>
                      </div>
                      <div className='tracking-widest flex flex-wrap gap-3'>
                             <NavLink to={"/project-one"} className={'border-2 w-[180px] h-[42.4px] justify-center items-center flex transition-all duration-300 ease-in-out font-medium border-[#F7F7F7]  hover:scale-110 backdrop-filter backdrop-blur-sm '}>DISCOVER P1</NavLink>
                             <NavLink to={"/project-one"} className={' w-[180px] h-[42.4px] justify-center items-center flex transition-all duration-300 ease-in-out font-medium hover:scale-110   bg-[#03C8C9]'}>RESERVE NOW</NavLink>
                      </div>
                  
                  </div>           
 

    </div>
  )
}

export default Hero
