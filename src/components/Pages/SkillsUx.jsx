import React from 'react'

const SkillsUx = () => {
  return (
    <div className=' flex justify-evenly items-center p-7 m-4'>
    <div className='bg-yellow-400   -rotate-90 h-[200px] p-4 flex justify-start items-center  text-7xl bg-clip-text text-transparent font-extrabold bg-gradient-to-br from-red-400 via-purple-500 to-yellow-500  transition-all duration-500 hover:opacity-90 cursor-pointer  ' > <div className='hover:bg-gradient-to-br from-yellow-400 via-red-400 to-gray-800 p-4 bg-clip-text text-transparent    ' >Skills </div></div>

    <div className='bg-yellow-400  rotate-6 h-[200px] p-4 flex justify-start items-center px-[100px] text-7xl bg-clip-text text-transparent font-extrabold bg-gradient-to-br from-red-400 via-purple-500 to-yellow-500  transition-all duration-500 hover:opacity-90 cursor-pointer  ' > <div className='hover:bg-gradient-to-br from-yellow-400 via-red-400 to-gray-800 p-4 bg-clip-text text-transparent  ' >Things I am Good At</div></div>
 </div> )
}

export default SkillsUx