import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardsUI from './components/CardsUI'
import Navbar from './components/Navbar'
import Section1 from './components/section1/section1'
import FeedbackForm from './components/section2/FeedbackForm'
import ThirdSection from './components/ThirdSection'
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

const userData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?auto=format&fit=crop&q=80&w=387",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iusto ullam porro temporibus magnam autem aperiam esse tenetur.",
    mainBtn: "Satisfied"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=387",
    text: "Aliquam quaerat impedit dolor velit explicabo fugiat assumenda quasi at vitae.",
    mainBtn: "Like"
  }
  ,
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=387",
    text: "Repudiandae laborum numquam vero dolore omnis saepe fugit cupiditate dignissimos.",
    mainBtn: "Approve"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=387",
    text: "Voluptatem eligendi magni necessitatibus eaque exercitationem aspernatur cumque nemo dolore.",
    mainBtn: "Loved It"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=387",
    text: "Minus soluta nobis asperiores et, magnam similique numquam accusantium cupiditate.",
    mainBtn: "Great"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=387",
    text: "Doloribus provident laborum laudantium adipisci amet omnis excepturi suscipit aliquam.",
    mainBtn: "Next"
  }
]

 

 console.log(cardsData)
  return (
    
      // <div className='bg-red-400 h-screen w-screen flex flex-wrap justify-center overflow-auto' >
      //   {cardsData.map((card, index)=>(
      //           <CardsUI key={index} data={card} />
      //   ))}
      
      //  </div>
      <div>
      <Section1 userData={userData} />
      <FeedbackForm/>/
      <ThirdSection/>
      </div>
  )
}

export default App
