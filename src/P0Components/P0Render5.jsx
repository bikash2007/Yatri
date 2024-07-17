import React from 'react'
import vid from '../Asset/vid/tail-light.mp4'

function P0Render5() {
  return (
    <div className='flex flex-col  mt-14'>
        <div className="w-full flex justify-center ">
             <video src={vid} loop muted autoPlay height={1000} width={1000}></video>
        </div>
        <div className="flex justify-center w-full ">
        <p className='text-neutral-300 text-base font-light tracking-widest max-w-5xl text-center '>
        P-0's integrated tail light is unique in that it not only beautifully communicates the rider's intentions on road, but offers valuable features like charging status and auto-off indicators.</p>
        
        </div>
        
    </div>
  )
}

export default P0Render5
