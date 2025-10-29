import React from 'react'
import { CornerUpRight } from 'lucide-react'
const RightContent = ({userData}) => {

  return (
    <div id='Maincomp'  className='h-[450px] w-3/4  p-3 overflow-x-auto'>
        < div id='Maincards'   className='flex flex-nowrap gap-4 '>
    {userData.map((item)=>(
        <div key={item.id}  className='h-[400px] w-[300px] shrink-0 bg-red-300 rounded-4xl overflow-hidden relative ' >
        <img src={item.img} className=' object-cover h-full w-full '></img>
        <div className='absolute top-0  left-0 h-full w-full  p-3 flex justify-between flex-col  '>
            <div className=' rounded-full h-[40px] w-[40px] p-2 flex justify-center items-center bg-blue-300 font-extrabold'>
               {item.id}
            </div>
            <div className='mt-20 font-medium '>{item.text}</div>
            <div className='flex gap-10 p-2 '>
                <button className='h-[40px] w-[150px] p-2 rounded-4xl bg-emerald-300 font-bold'>  {item.mainBtn}</button>
                <button className='h-10 w-10  p-2 rounded-4xl bg-emerald-300'><CornerUpRight /></button>
                
            </div>
        </div>

        </div>
))}
</div>
    </div>
  )
}

export default RightContent