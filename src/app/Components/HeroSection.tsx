import { ArrowLeftIcon, ChevronRight } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>
        <h1 className='uppercase text-6xl font-bold tracking-tighter text-center'>we are guerrilla</h1>
        <button className='uppercase bg-amber-300 px-5 py-2 text-black text-sm font-bold flex items-center hover:bg-amber-400 cursor-pointer'>Explore <ChevronRight /></button>
    </div>
  )
}

export default HeroSection