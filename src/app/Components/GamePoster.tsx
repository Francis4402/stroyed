import Image from 'next/image'
import React from 'react'

const GamePoster = () => {
  const images = [
    {
      src: '/posterimage/A1.png',
      alt: 'game1',
      width: 500,
      height: 500,
    },
    {
      src: '/posterimage/A2.png',
      alt: 'game2',
      width: 500,
      height: 500,
    },
    {
      src: '/posterimage/A3.png',
      alt: 'game3',
      width: 500,
      height: 500,
    },
    {
      src: '/posterimage/A4.png',
      alt: 'game4',
      width: 500,
      height: 500,
    },
    {
      src: '/posterimage/A5.png',
      alt: 'game5',
      width: 500,
      height: 500,
    },
    {
      src: '/posterimage/A6.png',
      alt: 'game6',
      width: 500,
      height: 500,
    },
  ]

  return (
    <div className="relative w-full mt-10">

      <div className='hidden lg:block'>
        <div className="grid md:grid-cols-6 overflow-x-hidden w-full scrollbar-hide">
          {images.map((image, index) => (
            <div 
              key={`${image.src}-${index}`}
              className="relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black to-transparent" />
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={image.width} 
                height={image.height}
                className="w-full h-auto object-cover"
              />
              
              {/* Bottom Gradient Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div className='lg:hidden block'>
        <div className="grid grid-cols-4 overflow-x-hidden w-full scrollbar-hide">
            {images.slice(0, 4).map((image, index) => (
              <div key={`${image.src}-${index}`} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black to-transparent" />
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={image.width} 
                  height={image.height}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default GamePoster