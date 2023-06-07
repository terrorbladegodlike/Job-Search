import React from 'react'

// React Images
import simple from '../../assets/simple.png'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-text-color text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>

        <div className='single__grid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='img__block p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="" className='w-[70%]' />
            </div>

            <span className='font-semibold text-text-color text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-text-color opacity-[.7] py-[1rem]'>
            Things beinf made beautiful simple are at the heart of everything we do.
          </p>
        </div>

        <div className='single__grid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='img__block p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="" className='w-[70%]' />
            </div>

            <span className='font-semibold text-text-color text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-text-color opacity-[.7] py-[1rem]'>
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>

        <div className='single__grid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='img__block p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="" className='w-[70%]' />
            </div>

            <span className='font-semibold text-text-color text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-text-color opacity-[.7] py-[1rem]'>
            We work on the basis of creating trust which can be nurtured through autohenticity and transparency.
          </p>
        </div>

      </div>

      <div className="card mt-[2rem] flex justify-between bg-blue-color p-[5rem] rounded-[10px]">

        <div>
          <h1 className='text-blue-color text-[30px] font-bold'>Ready to switch a caree</h1>
          <h2 className='text-text-color text-[25px] font-bold'>Let's get started!</h2>
        </div>

        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blue-color hover:bg-white border-blue-color'>Get Started</button>
      </div>
    </div>
  )
}

export default Value