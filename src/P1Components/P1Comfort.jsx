import React, { useEffect } from 'react'
import comfort from '../Asset/p1-3.jpg'

function P1Comfort({setScrolled}) {
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className=' lg:px-20 lg:py-12 md:px-6 md:py-10 bg-black'>
    <img src={comfort} alt="" />
    <div className="flex flex-col  gap-4 flex-wrap p-4">
        <h1 className='text-glow  text-inherit font-semibold text-2xl'>COMMUTE WITH COMFORT        </h1>
        <p className='max-w-7xl flex text-neutral-300'>Urban commuter has been at the heart of the design process of P-1. With stylish urban design and rugged good looks, whether it’s your daily commute or a night out with friends, P-1 has got you covered. Yatri’s powerful drivetrain with great ergonomics means city traffic is now fun! Weighing a mere 120kg with a peak power of 19hp, Project One boasts a power-to-weight ratio comparable to 250cc motorbikes. Every commute is an adventure on your P-1.</p>
    </div>
</div>
  )
}

export default P1Comfort
