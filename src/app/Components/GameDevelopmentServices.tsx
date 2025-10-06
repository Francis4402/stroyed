import Image from 'next/image'
import React from 'react'

const GameDevelopmentServices = () => {
  return (
    <div className='relative'>
      <Image src={"/gameservices.png"} alt='i' width={2048} height={2048} />
      <Image src={"/crystall.png"} alt='i' width={250} height={250} className='absolute top-1/2 left-1/2 -translate-x-44 -translate-y-1/2' />
    </div>
  )
}

export default GameDevelopmentServices