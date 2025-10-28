
import React from 'react'

const CardsUI = ({ data }) => {
    console.log("Card Data:", data)
    return (

        <div className='p-3'>
            <div className='bg-white h-[350px] w-[250px] rounded-4xl p-2 '>
                <div className='flex justify-between p-2 '>
                    <div className='b-2 border-2 border-[#222] rounded-3xl p-2 overflow-hidden w-10 h-10 flex justify-center items-center ' ><img src='https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg' className='h-full w-full object-cover  rounded-full'></img></div>
                    <div className='bg-[#999] rounded-xl p-[10px] text-[13px]'>{data.status}</div>
                </div>
                <div className='flex justify-between p-1  '>
                    <div className='font-semibold p-1 text-xl ' >{data.company}</div>
                    <div className='text-[10px] p-2'> {data.posted}</div>
                </div>
                <div className='font-bold p-1 text-2xl '>{data.title}</div>
                <div className='flex justify-items-center gap-2 p-1'>
                    <div className='bg-[#777] rounded-xl p-[10px] text-[13px]'><h3>{data.type}</h3></div>
                    <div className='bg-[#777] rounded-xl p-[8px] text-[13px]'><h3>{data.level}</h3></div>
                </div>
                <hr className='mt-[30px] text-[#999] '></hr>
                <div className='flex justify-between align-bottom gap-2 p-1'>
                    <div className=''>
                        <div className='font-semibold p-[5px] text-xl'><h3>{data.rate}</h3></div>
                        <div className=' p-[5px] text-[10px]'><h3>{data.location}</h3></div>
                    </div>
                    <div className=' flex justify-between align-bottom gap-2 p-2'>
                        <div className='bg-[#333] flex justify-center justify-items-center text-center rounded-xl p-3 text-[13px] h-[50px] w-[100px] text-white'>Apply Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsUI