import { ChevronRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='relative flex flex-col gap-4 justify-center items-center h-screen overflow-hidden'>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      >
        <source src="/herosectionvide.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className='absolute top-0 left-0 w-full h-full bg-black/20 z-10'></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      
      <div className='bg-gray-800 rounded-tr-2xl p-4 z-20 absolute bottom-0 right-5 space-y-2'>
        <p className='uppercase'>Become a <br/> guerrilla</p>
        <p className='text-sm underline text-yellow-400'>8 openings</p>
      </div>
    </div>
  )
}

export default HeroSection