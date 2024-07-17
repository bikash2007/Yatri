import React from 'react'
import p1Shoot from '../Asset/p1-shoot-1.jpg'
import Navbar from '../Component/Navbar'
function P1Landing() {
  return (
    <div className='w-full h-screen  bg-cover bg-center flex justify-center items-center' style={{backgroundImage:`URL(${p1Shoot})`}}>
      
    <div className="w-full h-screen absolute bg-black opacity-10 bg-right-top z-10"></div>
    <h1 className='text-5xl font-bold tracking-widest z-50 mb-16'>PROJECT <span className='text-[#00CCCC]'>ONE</span></h1>

     <div className="absolute bottom-10  w-full ">
        <div className="flex flex-wrap  justify-center items-center gap-1">

                 <div className="w-full  justify-evenly flex lg:w-1/2 ml-8 lg:ml-32 z-50">
                    <div className="flex flex-col gap-4 " >
                         <h1 className='text-sm text-inherit'>RANGE</h1>
                         <h1 className='text-3xl font-semibold'>110<span className='text-base'>km</span></h1>
                    </div>
                    <div className="flex flex-col gap-4 " >
                         <h1>PEAK POWER</h1>
                         <h1 className='text-3xl font-semibold'>19 <span className='text-base'>HP</span></h1>
                    </div>
                    <div className="flex flex-col gap-4 " >
                         <h1>FULL CHARGE</h1>
                         <h1 className='text-3xl font-semibold'>2<span className='text-base'>HRS</span></h1>
                    </div>
                </div>
                    
                     <div className="w-full lg:w-1/4">
                         <h1 className='border-y flex justify-center items-center w-full lg:w-fit px-7 py-2 font-semibold tracking-widest text-base border-white'>RESERVE NOW</h1>
                     </div>
        </div>
     </div>
</div>
  )
}

export default P1Landing
