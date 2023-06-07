import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center p-[3rem]'>
      <div className="logo__inner">
        <h1 className="logo text-[25px] text-blue-color">
          <strong>Job</strong>
          Search
        </h1>
      </div>
      <div className="menu flex gap-8">
          <li className="menu__list text-[#6f6f6f] hover:text-blue-color">
            Jobs
          </li>
          <li className="menu__list text-[#6f6f6f] hover:text-blue-color">
            Companies
          </li>
          <li className="menu__list text-[#6f6f6f] hover:text-blue-color">
            About
          </li>
          <li className="menu__list text-[#6f6f6f] hover:text-blue-color">
            Contact
          </li>
          <li className="menu__list text-[#6f6f6f] hover:text-blue-color">
            Blog
          </li>
          <li className="menu__list text-[#6f6f6f] hover:text-blue-color">
            Login
          </li>
          <li className="menu__list text-[#6f6f6f] hover:text-blue-color">
            Register
          </li>
        </div>
    </div>
  )
}

export default Navbar