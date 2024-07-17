import React from 'react'
import render3 from '../Asset/render3.jpg'
function P0Render4() {
  return (
    <div className='flex flex-col w-full'>
         <div className="w-full flex ">
            <img src={render3} alt="" />
         </div>
         <div className="w-full flex flex-wrap justify-center flex-col items-center gap-2 ">
         
          <h1 className='text-2xl text-glow font-semibold tracking-widest'>MOTORCYCLE REIMAGINED</h1>
             <p className='text-neutral-300 text-base font-light tracking-widest max-w-7xl text-center'>Project Zero stands out from the sea of two-wheelers with its market-leading vehicle software offering valuable data to make sure our users are always connected to what truly matters. A beautiful 7” TFT dashboard replaces traditional tachometers with numerous sensor data, in-built 4G connectivity and navigation, keyless start, and OTA updates that will refresh P-0 for years to come.</p>
         </div>
    </div>
  )
}

export default P0Render4
