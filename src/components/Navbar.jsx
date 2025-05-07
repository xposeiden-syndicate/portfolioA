import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
      
      {/* Navbar definition and styling */}
      <nav className='bg-gray-900 text-white z-50 px-6 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>MyPortfolio</h1>
        <div className='hidden md:flex gap-6'>
          {/* Links using react-router-dom */}
          <Link to="/" className='hover:text-blue-400' >Home</Link>
          <Link to="/about" className='hover:text-blue-400' >About</Link>
          <Link to="/projects" className='hover:text-blue-400' >Projects</Link>
          <Link to="/contact" className='hover:text-blue-400' >Contact</Link>          
  
        </div>
        {/* Responsive design and logic for screen of different sizes */}
        <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger menu for mall screens with X sign to quit the screen */}
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
            ):(
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
            )}
          </svg>
        </button>
        {/* The menu for when you press the icon */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-4 py-4 md:hidden'>
          <Link to="/" className='hover:text-blue-400' >Home</Link>
          <Link to="/about" className='hover:text-blue-400' >About</Link>
          <Link to="/projects" className='hover:text-blue-400' >Projects</Link>
          <Link to="/contact" className='hover:text-blue-400' >Contact</Link>          
        </div>
      )}
      </nav>
      
    </>
  );
}

export default Navbar