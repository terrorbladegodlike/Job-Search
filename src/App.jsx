import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import Job from './components/Job/Job'
import Value from './components/Value/Value'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>  
  )
}

export default App