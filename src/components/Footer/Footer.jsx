import React from 'react'

// React Icons
import {AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blue-color rounded-[10px] gap-[8rem] grid grid-cols-5 m-auto items-center justify-center'>
      
      <div>
        <div className="logo__inner">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong>
            Search
          </h1>
        </div>

        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We alwayw make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>

      <div className='grid'>
        
        <span className='title text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>

        <div className='grid gap-3'> 
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Abous Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
        
      </div>

      <div className='grid'>

        <span className='title text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>

        <div className='grid gap-3'> 
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Center Support</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feeback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
        </div>
        
      </div>

      <div className='grid'>

        <span className='title text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>

        <div className='grid gap-3'> 
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </div>
        
      </div>

      <div className='grid'>

        <span className='title text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact
        </span>

        <div className='grid gap-3'> 
          <small className='text-[14px] text-white'>
            ternovetchii.2002@mail.ru
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-color'/>
            <AiFillGithub className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-color'/>
            <BsTelegram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-color'/>
          </div>
        </div>
        
      </div>

    </div>  
  )
}

export default Footer