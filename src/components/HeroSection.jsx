import React from 'react'
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className='h-screen w-full bg-[#222] flex flex-col justify-center items-start font-bold p-10 gap-10'>
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
  )
}

export default HeroSection