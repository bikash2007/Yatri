import React from 'react'
import Render2 from '../Asset/render2.jpg'

function P0Render3() {
  return (
    <div className='flex flex-wrap w-full bg-black px-8'>
         <div className="w-full lg:w-2/3 p-24">
            <img src={Render2} alt="" />
         </div>
         <div className="w-full lg:w-1/3 flex flex-col gap-4   justify-center lg:pb-24">
          <h1 className='text-2xl text-glow font-semibold tracking-widest'>
          THE POWERTRAIN</h1>
             <p className='text-neutral-300 text-base font-light tracking-widest'>The battery pack incorporates Lithium-Nickel-Manganese chemistry pouch cells holding 8 kWh of energy that provides a generous 230 km of true range. It is built with state-of-the-art protection circuitry and algorithms to maximize battery health and efficiency.</p>
              <p className='text-neutral-300 text-base font-light tracking-widest' >48 kW (64 hp) electric motor offers 650 Nm of instant torque at the wheel with 97% efficiency, maintenance-free life and 0-60 km/h in under 2.5 seconds.</p>
         </div>
    </div>
  )
}

export default P0Render3
