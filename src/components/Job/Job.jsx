import React from 'react'

// React icons
import { BiTimeFive } from 'react-icons/bi'
import { TbBuildingSkyscraper } from 'react-icons/tb'

const Job = () => {

  const Data = [

    {
      id: 1,
      title: 'Web Developer',
      time: 'Now',
      location: 'Canada',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere!',
      company: 'Novac Linus Co.'
    },

    {
      id: 2,
      title: 'UI Designer',
      time: '14Hrs',
      location: 'Manchester',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere!',
      company: 'Liquid Accessments'
    },

    {
      id: 3,
      title: 'Software Engineer',
      time: '10Hrs',
      location: 'Austria',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere!',
      company: 'Web Tech Agency'
    },

    {
      id: 4,
      title: 'UI/UX Designer',
      time: '10H',
      location: 'Germany',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere!',
      company: 'Government'
    },

    {
      id: 5,
      title: 'Product Designer',
      time: 'Now',
      location: 'Manchester',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere!',
      company: 'Newcastle'
    },

    {
      id: 6,
      title: 'Researcher',
      time: '5H',
      location: 'Norway',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere!',
      company: 'Nin Co.'
    },

    {
      id: 7,
      title: 'Lead Developer',
      time: '14H',
      location: 'Leeds',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere!',
      company: 'Nimeloi - UK'
    },

    {
      id: 8,
      title: 'Data Science',
      time: '2 Days',
      location: 'Turkey',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere!',
      company: 'Nome And Sons'
    },

  ]

  return (
    <>
      <div className="job__container flex gap-10 justify-center flex-wrap items-center py-10">


        {
          Data.map(({ id, title, time, location, desc, company }) => {
            return (
              <div key={id} className="group group/item single__job w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-color shadow-lg shadow-gray-ish-400/700 hover:shadow-lg">

                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-text-color group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive /> {time}
                  </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                  {desc}
                </p>

                <div className='company flex items-center gap-2'>
                  <TbBuildingSkyscraper className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-text-color hover:bg-white group-hover/item:text-text-color group-hover:text-white'>
                  Apply Now
                </button>

              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Job