import React from 'react'
import Navbar from '../components/Navbar'
import bgImage from '../assets/logos/kevin-bhagat-zNRITe8NPqY-unsplash.jpg'
import figma from '../assets/logos/Figma.png'
import cpp from '../assets/logos/C++ (CPlusPlus).png'
import fireb from '../assets/logos/Firebase.png'
import gut from '../assets/logos/Git.png'
import jss from '../assets/logos/JavaScript.png'
import pyth from '../assets/logos/Python.png'
import reat from '../assets/logos/React.png'
import tailw from '../assets/logos/Tailwind CSS.png'
import germany from '../assets/logos/Wikipedia-Flags-DE-Germany-Flag.512.png'
import spain from '../assets/logos/Wikipedia-Flags-ES-Spain-Flag.512.png'
import france from '../assets/logos/Wikipedia-Flags-FR-France-Flag.512.png'
import usa from '../assets/logos/Wikipedia-Flags-US-United-States-Flag.512.png'
import me from '../assets/logos/me.jpeg'
function About() {
  return (
    <>
        <Navbar/> 
        <div className='bg-cover bg-center min-h-screen text-gray-800 px-4 py-12' style={{backgroundImage:`url(${bgImage})`}}>
        <div className='bg-white-300/20 backdrop-blur-lg'>
        <div className='text-center mt-12'>
            <img src={me} className='w-32 h-32 rounded-full mx-auto mb-4 shadow-lg' />
            <h1 className='text-4xl font-bold'>Hi, I'm Alex.</h1>
            <p className='text-lg text-black/80'>Web Developer. Problem Solver. Lifelong Learner</p>
        </div>
        
        <section className='max-w-3xl mx-auto mt-10 px-4 text-neutral-900'>
            <p className='mb-4'>I started coding in 2022 after falling in love with the power of building apps from scratch. Since then, i've created dozens of websites, learned multiple framworks, and helped people bring their ideas to life.</p>
            <p className='mb-4'>
                When i'm not coding, I'm either learning languages, training, or studying mathematics and science.
            </p>
        </section>
        {/* Skills Grid */}
        <section className='max-w-4xl mx-auto mt-12'>
            <h2 className='text-2xl font-semibold text-center mb-6'>My Toolbox</h2>
            <div className='py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                <div className='bg-white/30 backdrop-blur-lg shadow hover:shadow-xl hover:scale-105 transition-all p-4 rounded-xl flex flex-col items-center'><img src={reat} alt="react" /><span>React</span></div>
                <div className='bg-white/30 backdrop-blur-lg shadow hover:shadow-xl hover:scale-105 transition-all p-4 rounded-xl flex flex-col items-center'><img src={tailw} alt="tawilwindcss" /><span>Tailwind CSS</span></div>
                <div className='bg-white/30 backdrop-blur-lg shadow hover:shadow-xl hover:scale-105 transition-all p-4 rounded-xl flex flex-col items-center'><img src={jss} alt="javascript" /><span>Javascript</span></div>
                <div className='bg-white/30 backdrop-blur-lg shadow hover:shadow-xl hover:scale-105 transition-all p-4 rounded-xl flex flex-col items-center'><img src={figma} alt="figma" /><span>Figma</span></div>
                <div className='bg-white/30 backdrop-blur-lg shadow hover:shadow-xl hover:scale-105 transition-all p-4 rounded-xl flex flex-col items-center'><img src={cpp} alt="c/c++" /><span>C/C++</span></div>
                <div className='bg-white/30 backdrop-blur-lg shadow hover:shadow-xl hover:scale-105 transition-all p-4 rounded-xl flex flex-col items-center'><img src={fireb} alt="firebase" /><span>Firebase</span></div>
                <div className='bg-white/30 backdrop-blur-lg shadow hover:shadow-xl hover:scale-105 transition-all p-4 rounded-xl flex flex-col items-center'><img src={pyth} alt="python" /><span>Python</span></div>
                <div className='bg-white/30 backdrop-blur-lg shadow hover:shadow-xl hover:scale-105 transition-all p-4 rounded-xl flex flex-col items-center'><img src={gut} alt="git" /><span>Git</span></div>
            </div>
            {/* Languages */}
            <div className='mb-8'>
                <h2 className='text-2xl text-center font-semibold mb-4'>Language I Speak</h2>
                <div className='flex flex-wrap justify-center gap-3'>
                    <span className='bg-blue-300/20 backdrop-blur-lg text-black-800 px-4 py-2 rounded-full shadow-sm flex items-center gap-2'>
                        <img src={usa} alt="English" className='h-10 w-10' />
                        ENGLISH - NATIVE
                    </span>
                    <span className='bg-red-300/20 backdrop-blur-lg text-red-800 px-4 py-2 rounded-full shadow-sm flex items-center gap-2'>
                        <img src={france} alt="French" className='h-10 w-10' />
                        FRENCH - NATIVE
                    </span>
                    <span className='bg-blue-300/20 backdrop-blur-lg text-yellow-800 px-4 py-2 rounded-full shadow-sm flex items-center gap-2'>
                        <img src={spain} alt="Spanish" className='h-10 w-10' />
                        SPANISH - C1-C2 
                    </span>
                    <span className='bg-gray-300/20 backdrop-blur-lg text-gray-900 px-4 py-2 rounded-full shadow-sm flex items-center gap-2'>
                        <img src={germany} alt="German" className='h-10 w-10' />
                        GERMAN - B2-C1
                    </span>
                </div>
            </div>
        </section>
        {/* CTA */}
        <div className='mt-16 text-center'>
            <a href="#/contact" className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition'>Let's Work Together</a>
        </div>
        </div> 
        </div>
    </>
  )
}

export default About