import React from 'react'
import p0Outdoor from '../Asset/p0-outdoor.jpg'
import  {motion} from 'framer-motion'


function P0Render2() {
  return (
    <div className=' lg:px-20 lg:py-12 md:px-6 md:py-10 bg-black'>
           <img src={p0Outdoor} alt="" />
           <motion.div initial={{y:100, opacity:0}}whileInView={{
            
           }}
           animate={{y:0 , opacity:1}} 
           className="flex flex-col items-center gap-6 flex-wrap p-1">
               <h1 className='text-glow  text-inherit font-semibold text-2xl'>ELEGANCE IN MOTION </h1>
               <p className='max-w-6xl flex'>With a design philosophy of Elegance in Motion, Project Zero inherits the proportions of a cafe racer and upgrades it with clean, modern design lines. Through this elegant design, we aim to reach not only the environmentalists but ultimately those who care about owning an inspiring product.</p>
           </motion.div>
    </div>
  )
}

export default P0Render2
