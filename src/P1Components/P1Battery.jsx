import React from 'react'
import charging from '../Asset/charge-station.jpg'
function P1Battery() {
  return (
    <div className=' lg:px-20 lg:py-12 md:px-6 md:py-10 bg-black mt-28'>
    <img src={charging} alt="" />
    <div className="flex flex-col  gap-4 flex-wrap p-4">
        <h1 className='text-glow  text-inherit font-semibold text-2xl'>BATTERY & PERFORMANCE      </h1>
        <p className='max-w-7xl flex text-neutral-300'>P-1's market-leading 2 hours charging time from a normal house outlet and first-in-class 30 minutes DC Fast charging allows you to be more adventurous than ever and opens up new possibilities. With Yatri Energy’s strong national network of charging stations, P-1 will truly reflect the freedom of travel.<br/>
<br />
A mixed riding style of mildly sporty and laidback city riding (40 kmph) gives P-1 a comfortable range of 110 km on a single rider (75 kg) setup. Depending on how laidback you are and your weight, you can expect a real-world city range of a figure slightly more or less than 110 km. You can expect slightly less range with a pillion rider.<br/>
<br />
While P-1 is a lot of fun when you push it or on the highways, it will demand more current from its powertrain which inevitably depletes the charge at a much higher rate. Depending on how adventurous you get, you may get a range as low as 60-70 km. This figure might go further down on a hilly off road trips. Additionally, pushing P-1 beyond normal use case will also increase the system temperature at a much higher rate triggering the P-1 system protection which results in a reduced power supply temporarily.</p>
    </div>
</div>
  )
}

export default P1Battery
