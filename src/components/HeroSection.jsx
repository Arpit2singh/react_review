import React from 'react'
import { ReactTyped } from "react-typed";
import Splineanimation from './splineanimation';

const HeroSection = () => {
  return (
    <div className='flex justify-between items-center '>
     
    <div className='h-screen w-[60%] bg-gradient-tr-bl  from-black via-yellow-300 to-black flex flex-col justify-center items-start font-bold p-10 gap-10'>
         <div className='bg-gradient-to-r from-red-400 to-blue-400 flex justify-center text-center  font-extrabold text-7xl bg-clip-text text-transparent p-4   '> Hey, what’s up? I’m Arpit</div>
         <div className='bg-gradient-to-r from-red-400 to-purple-400 flex justify-center  text-center font-extrabold text-5xl bg-clip-text text-transparent p-4 '>
           <ReactTyped 
          strings= {[
            "Developer by passion, creator by choice." , 
            "I build awesome things for the web."
          ]}
        typeSpeed={20}
        backSpeed={60}
        loop
         /> </div>
    </div>
     <div className='h-screen w-[40%] flex justify-center items-center bg-amber-100 ' >
     <Splineanimation/>
     </div>
    </div>
  )
}

export default HeroSection