import React from 'react'
import img1 from '../Asset/p1-2.jpg'
import img2 from '../Asset/p1-5.jpg'

function OffRoad() {
  return (
    <div className='flex flex-col w-full mt-28'>
        <div className='flex'>
             <div className="flex w-1/2">
                 <img src={img1} alt="" />
             </div>
             <div className="flex w-1/2">
                 <img src={img2} alt="" />
             </div>
        </div>
        <div className="flex flex-col  gap-4 flex-wrap p-4">
        <h1 className='text-glow  text-inherit font-semibold text-2xl'>OFFROAD THRILL  </h1>
        <p className='max-w-7xl flex text-neutral-300'>With an exciting blend of form and functionality, P-1 is always ready for a good time. With market leading ground clearance of 320 mm and power delivery, go hit that trial, spend the weekend in the cabin, or just cruise through the back country and discover all the hidden gems. Whatever you do, you will create memories and stories for a lifetime.</p>
    </div>
    </div>
  )
}

export default OffRoad
