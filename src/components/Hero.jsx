import React from 'react'
import Navbar from './Navbar';
function Hero() {
  return (
    <>
    
    <div className="h-screen bg-cover bg-center flex items-center justify-center text-center px-4" style={{backgroundImage:"url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
    
        <div className='bg-black/40 backdrop-blur-md p-8 rounded-lg text-white max-w-xl'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Build Your future with Code</h1>
            <p className='text-lg md:text-xl mb-6'>Learn to develop beautiful websites using react and tailwind CSS</p>
            <div className='flex space-x-4 justify-center'>
            <a href="/contact" className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow-md transition'>Contact Me</a>
            <a href="/about" className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow-md transition'>About Me</a>
            </div>
        </div>
    </div>
    </>    
  );
};

export default Hero