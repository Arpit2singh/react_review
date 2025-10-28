import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardsUI from './components/CardsUI'

function App() {
 const cardsData =  [
  {
    "status": "saved 🔖",
    "company": "Amazon",
    "posted": "3 days ago",
    "title": "Senior UI/UX Designer",
    "type": "Part Time",
    "level": "Senior Level",
    "rate": "120 $/day",
    "location": "Mumbai, India"
  },
  {
    "status": "new ✨",
    "company": "Google",
    "posted": "1 day ago",
    "title": "Frontend Developer",
    "type": "Full Time",
    "level": "Mid Level",
    "rate": "150 $/day",
    "location": "Bangalore, India"
  },
  {
    "status": "featured 🌟",
    "company": "Microsoft",
    "posted": "5 days ago",
    "title": "Product Manager",
    "type": "Remote",
    "level": "Senior Level",
    "rate": "200 $/day",
    "location": "Hyderabad, India"
  },
  {
    "status": "saved 🔖",
    "company": "Adobe",
    "posted": "2 days ago",
    "title": "Graphic Designer",
    "type": "Contract",
    "level": "Junior Level",
    "rate": "100 $/day",
    "location": "Pune, India"
  },
  {
    "status": "hot 🔥",
    "company": "Netflix",
    "posted": "4 days ago",
    "title": "Motion Graphics Artist",
    "type": "Part Time",
    "level": "Mid Level",
    "rate": "130 $/day",
    "location": "Chennai, India"
  },
  {
    "status": "urgent ⚡",
    "company": "Tesla",
    "posted": "6 days ago",
    "title": "UX Researcher",
    "type": "Full Time",
    "level": "Senior Level",
    "rate": "180 $/day",
    "location": "Delhi, India"
  }
]
 

 console.log(cardsData)
  return (
    
      <div className='bg-red-400 h-screen w-screen flex flex-wrap justify-center overflow-auto' >
        {cardsData.map((card, index)=>(
                <CardsUI key={index} data={card} />
        ))}
      
       </div>
  )
}

export default App
