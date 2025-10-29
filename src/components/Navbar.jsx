import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 h-[100px] w-full'>
         <div className='border-2 h-[40px] w-[300px] p-3 flex justify-center items-center text-black font-semibold bg-[#222] rounded-4xl uppercase text-white'>Target Audience</div>
         <button className=' h-[40px] w-[300px] p-3 flex justify-center items-center text-black font-light bg-[#606060] rounded-4xl uppercase text-white'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar