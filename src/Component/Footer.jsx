import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='flex flex-wrap w-full p-3 bg-black '>
        <h1 className='font-medium tracking-tight text-base'>GET OUR NEWSLETTER</h1>
        <div className='flex  w-full justify-between flex-wrap items-center'>
             <div className="w-full lg:w-1/2"> <p className='text-neutral-300  '>Be the first to receive the latest Yatri Motorcycles news, events and product updates and more.</p></div>
             <div className="w-full lg:w-1/2 flex gap-3 justify-end flex-shrink-0 " >
                 <input type="text"  className='h-10 bg-white w-full flex shrink md:w-72 lg:w-80'/>
                  <button className='px-9 h-10 bg-[#00CCCC] font-semibold text-sm'>SUBSCRIBE</button>
             </div>
        </div>
  
        <footer className='flex flex-col md:flex-row items-center w-full md:justify-between mt-8 mb-4'>
              <div className="flex gap-3 flex-col items-center md:flex-row mb-4 text-neutral-300">
                 <h6 className='text-base'>YATRI MOTORCYCLES © 2024</h6 >
                 <a className='text-base' href="https://yatrimotorcycles.com/careers">Careers </a>
                 <a className='text-base' href="https://yatrimotorcycles.com/legal"> Legal</a>
                 <a className='text-base' href="https://yatrimotorcycles.com/reservation">Track Reservation </a>
              </div>
              <div className="text-neutral-300 flex gap-8">
                <FontAwesomeIcon icon={faYoutube}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faLinkedin}/>
                <FontAwesomeIcon icon={faFacebookSquare}/>
              
              </div>
         </footer>
      
    </div>
  )
}

export default Footer
