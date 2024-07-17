import React, { useEffect } from 'react'
import render1 from '../Asset/render-1.jpg'
import render4 from '../Asset/render4-portrait-1.jpg'
import  {motion} from 'framer-motion'

function P0Landing({setScrolled}) {

    const handelScroll=()=>{
       const offset = window.scrollY
       if(offset > 100){
          setScrolled(true)
       }else{
          setScrolled(false)
       }
    }
     useEffect(()=>{
         window.addEventListener('scroll' ,handelScroll)
         return ()=>{

              window.removeEventListener('scroll' ,handelScroll)
          };
     },[])
  return (
    <div className='w-full h-screen '>
        <motion.div       initial={{ opacity: 0, scale:0.9}}
      animate={{ opacity: 1 ,scale:1 }}
      transition={{ duration: 2, }} className="w-full h-screen hidden md:block"> <img src={render1} className=' img-cover '/> </motion.div>
        <div className="w-full h-screen block md:hidden"> <img src={render4} className=' img-cover '/> </div>
        <motion.div initial={{opacity:1}} animate={{opacity:0.5}} transition={{duration:2}} className="w-full h-screen absolute top-0 right-0 bg-black/40 opacity-0 bg-right-top z-1"></motion.div>
         <div className="absolute bottom-10  w-full ">
            <div className="flex flex-wrap  justify-center items-center gap-1">

                     <div className="w-full  justify-evenly flex lg:w-1/2 ml-8">
                        <div className="flex flex-col " >
                             <h1>Range</h1>
                             <h1 className='text-3xl font-semibold'>230 <span className='text-base'>KM</span></h1>
                        </div>
                        <div className="flex flex-col  " >
                             <h1>0-60 KP/H</h1>
                             <h1 className='text-3xl font-semibold'>2.5 <span className='text-base'>SEC</span></h1>
                        </div>
                        <div className="flex flex-col  " >
                             <h1>FULL CHARGE</h1>
                             <h1 className='text-3xl font-semibold'>2 <span className='text-base'>HRS</span></h1>
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

export default P0Landing
