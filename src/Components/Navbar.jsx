import { RiMenu2Line, RiCloseLine } from '@remixicon/react';
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
	<nav className='flex flex-wrap justify-between items-center text-white 
	px-10 pt-6 md:px-20'>
	  <span className='text-xl font-bold tracking-wide'>Portfolio</span>
	  
	  <ul className={`${
		isMenuOpen ? "block" : "hidden"
	  } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-[#121525] px-2 
	  rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent 
	  md:static md:mx-0 md:flex gap-6`}>
		<a href="#About">
		  <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
		</a>
		<a href="#Experience">
		  <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
		</a>
		<a href="#Projects">
		  <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
		</a>
		<a href="#Footer">
		  <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
		</a>
	  </ul>
	  {isMenuOpen ? (
		<RiCloseLine
		  size={30}
		  className='md:hidden absolute right-10 top-6 transition-all duration-300'
		  onClick={() => setIsMenuOpen(!isMenuOpen)}
		/>
	  ) : (
		<RiMenu2Line 
		  size={30} 
		  className='md:hidden absolute right-10 top-6 transition-all duration-300' 
		  onClick={() => setIsMenuOpen(!isMenuOpen)}
		/>
	  )}
	</nav>
  )
}

export default Navbar
