import React, { useEffect, useState } from 'react'

const ThirdSection = () => {
    const [photos, setphotos] = useState([]) ; 
    useEffect( () => {
        const fetchphoto = async()=>{
    const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=15`) ; 
    const data = await response.json() ; 
    console.log(data) ; 
    setphotos(data) ; 
        }
        fetchphoto()
    }, [])
    
  return (
    <div className='flex flex-nowrap p-4 gap-8 overflow-x-scroll h-screen w-full bg-amber-300 ' >
        {photos.map((data , idx) => (
        <div key={idx} className=' h-[40%] w-[30%] rounded-4xl bg-red-300 overflow-hidden shrink-0 ' >
            <img src={data.download_url} className='h-full w-full  object-cover' ></img>
            <div key={idx} >{data.author}</div>
        </div>
        
        ))}
    </div>
  )
}

export default ThirdSection