import React from 'react'
import eco from '../Asset/p1-6.jpg'
import ReserveNav from '../Component/ReserveNav'

function P1Economy() {
  return (
    <div className=' lg:px-20 lg:py-12 md:px-6 md:py-10 bg-black mt-28'>
        
    <img src={eco} alt="" />
    <div className="flex flex-col  gap-4 flex-wrap p-4">
        <h1 className='text-glow  text-inherit font-semibold text-2xl'>ECONOMY OF USE       </h1>
        <p className='max-w-7xl flex text-neutral-300'>How many kilometers do you add on your commute every day? How does that look at the end of your ownership period? P-1’s over 90% efficient powertrain will cost you barely NPR 0.3 per km while comparable combustion engine motorcycles will cost you well over 20 times of that. That opens a host of possible use case of P-1 besides your daily commute.</p>
    </div>
</div>
  )
}

export default P1Economy