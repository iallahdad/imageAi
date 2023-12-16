"use client"
import Image from 'next/image'
import { useState } from 'react'





const NameList = ['1-Asif', '2-Usman', '3-Babar', '4-Kamran', '5-Asad'];


export default function Home() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % NameList.length);
    
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + NameList.length) % NameList.length);
  };
  return (
    
    <div className='lg:flex flex min-h-screen items-center justify-between p-24'>
      
      <button className="mt-1 block w-40 px-3 py-2 bg-white border border-slate-300 
            rounded-full text-sm shadow-sm pla placeholder-slate-500 focus:outline-none focus:border-sky-500 focus-ring-1 focus:ring-sky-500" onClick={handlePrevious}>Previous</button>

      <h1 className="text-8xl font-bold">{NameList[currentIndex]}</h1>
       
      
      
      <button className="mt-1 block w-40 px-3 py-2 bg-white border border-slate-300 
            rounded-full text-sm shadow-sm pla placeholder-slate-500 focus:outline-none focus:border-sky-300 focus-ring-1 focus:ring-sky-500" onClick={handleNext}>Next</button>
      </div>
     
   )}
