import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import CardsUI from './components/CardsUI'
import Navbar from './components/Navbar'
import Section1 from './components/section1/section1'
import FeedbackForm from './components/section2/FeedbackForm'
import ThirdSection from './components/ThirdSection'
import HeroSection from './components/HeroSection'
import Navbartop from './components/Navbartop'
import {Routes ,Route} from 'react-router'
import About from './components/Pages/About'
import NoftFoundPage from './components/Pages/NoftFoundPage'

function App() {
 const cardsData =  [
  {
    "status": "Primary Skill ✅",
    "company": "C / C++",
    "posted": "2+ years experience",
    "title": "Problem Solving • DSA",
    "type": "Core Language",
    "level": "Intermediate-Advanced",
    "rate": "Daily Practice",
    "location": "Leetcode"
  },
  {
    "status": "Programming Language",
    "company": "Java",
    "posted": "1 year",
    "title": "OOP & DSA",
    "type": "Backend Language",
    "level": "Intermediate",
    "rate": "Used in practice",
    "location": "Coursework"
  },
  {
    "status": "Web Basics 🌐",
    "company": "HTML & CSS",
    "posted": "1.5 years",
    "title": "Structure & Styling",
    "type": "Frontend",
    "level": "Proficient",
    "rate": "Used in every UI",
    "location": "Frontend Projects"
  },
  {
    "status": "Web Magic ✨",
    "company": "JavaScript",
    "posted": "1.5 years",
    "title": "Frontend & Backend Logic",
    "type": "Fullstack",
    "level": "Intermediate",
    "rate": "Highly Active",
    "location": "Projects & Hackathons"
  },
  {
    "status": "Frontend Framework ⚡",
    "company": "ReactJS",
    "posted": "1 year",
    "title": "Component-driven UI",
    "type": "Frontend",
    "level": "Intermediate",
    "rate": "Actively Learning",
    "location": "UI Projects"
  },
  {
    "status": "CSS Framework 🎨",
    "company": "TailwindCSS",
    "posted": "1 year",
    "title": "Modern Design",
    "type": "Frontend",
    "level": "Intermediate",
    "rate": "Used Regularly",
    "location": "All UI Projects"
  },
  {
    "status": "Backend Runtime 🚀",
    "company": "NodeJS / ExpressJS",
    "posted": "1 year",
    "title": "Server & APIs",
    "type": "Backend",
    "level": "Intermediate",
    "rate": "API Driven",
    "location": "Fullstack Apps"
  },
  {
    "status": "Database 📊",
    "company": "MongoDB",
    "posted": "1 year",
    "title": "Models & Queries",
    "type": "Backend Data",
    "level": "Intermediate",
    "rate": "Used in Projects",
    "location": "Full-Stack Apps"
  },
  {
    "status": "Authentication 🔐",
    "company": "Cookies / Auth",
    "posted": "1 year",
    "title": "Sessions & JWT ",
    "type": "Backend Security",
    "level": "Intermediate",
    "rate": "Used in Expenser",
    "location": "Backend Modules"
  },
  {
    "status": "API Testing 🧪",
    "company": "Postman",
    "posted": "1 year",
    "title": "API Debugging",
    "type": "Backend Tool",
    "level": "Proficient",
    "rate": "Regular Usage",
    "location": "Fullstack Workflow"
  },
  {
    "status": "AI & Agentic ⚙️",
    "company": "Google ADK",
    "posted": "2025",
    "title": "Smart Reminders, Content AI",
    "type": "AI Tools",
    "level": "Beginner",
    "rate": "Used in UniBridge",
    "location": "AI ,Python Backend"
  },
  {
    "status": "Version Control ✅",
    "company": "Git / GitHub",
    "posted": "2 years",
    "title": "Collaboration, CI/CD",
    "type": "DevOps Essentials",
    "level": "Proficient",
    "rate": "Daily Committer",
    "location": "All Projects"
  },
  {
    "status": "Deployment ☁️",
    "company": "Vercel / Render",
    "posted": "1 year",
    "title": "Frontend & Backend Deployment",
    "type": "Cloud Services",
    "level": "Proficient",
    "rate": "Production Ready",
    "location": "Deployed Apps"
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
    
     
      <div className='bg-gradient-to-tr from-black via-gray-900  to-yellow-950 ' >
     {/* <Routes>
      <Route path='/' element={<HeroSection/>} ></Route>
      <Route path='/About' element={<HeroSection/>} ></Route>
      <Route path='/Resume' element={<HeroSection/>} ></Route>
      <Route path='/Contact' element={<FeedbackForm/>} ></Route>
      <Route path='/Skills' element={<ThirdSection/>} ></Route>
      <Route path='/Projects' element={<CardsUI/>} ></Route>
     </Routes> */}


     <Routes>
      <Route path='*' element={<NoftFoundPage/>} />
      <Route path='/' element={
        <>
      <div id="home"  ><HeroSection /></div>
      <div id="about" > <About /></div>
       <div id="projects" className="bg-red-400 h-screen w-screen flex flex-wrap justify-center overflow-auto">
      {cardsData.map((card, index) => (
        <CardsUI key={index} data={card} />
      ))}
    </div> 
      <div id="skills">  <ThirdSection  /></div> 
      <div id="Achieve" > <Section1 userData={userData}  /></div>
      <div id="contact" >    <FeedbackForm  /></div>
  

   
        </>
      } />
     </Routes>
     
    


      
      </div>
  )
}

export default App
