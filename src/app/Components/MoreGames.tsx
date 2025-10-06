import Image from 'next/image'
import React from 'react'

const MoreGames = () => {

    const gamesimage1 = [
        {
            src: "/posterimage/post1.png",
        },
        {
            src: "/posterimage/post2.png",
        },
        {
            src: "/posterimage/post3.png",
        },
    ]

    const gamesimage2 = [
        {
            src: "/posterimage/post4.png",
        },
        {
            src: "/posterimage/post5.png",
        },
        {
            src: "/posterimage/post6.png",
        },
        {
            src: "/posterimage/post7.png",
        }
    ]

  return (
    <div className='flex flex-col gap-5 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-5 w-full'>
            {
                gamesimage1.map((g, index) => (
                    <div className='cursor-pointer' key={index}>
                        <Image src={g.src} alt='i' width={1024} height={1024} className='hover:scale-110 duration-200' />
                    </div>
                ))
            }
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-0 gap-5'>
            {
                gamesimage2.map((g, index) => (
                    <div className='cursor-pointer' key={index}>
                        <Image src={g.src} alt='i' width={1024} height={1024} className='hover:scale-110 duration-200' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MoreGames