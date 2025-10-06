import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const ServicesSection = () => {

  const accordionItems = [
    {
      title: 'Prototyping And UX Design',
    },
    {
      title: 'Ui Design',
    },
    {
      title: 'ui motion design',
    },
    {
      title: 'marketing material design',
    },
  ]

  return (
    <div className='mt-10'>
      <h1 className='uppercase md:text-6xl text-3xl mb-5'>Services</h1>
      <div className='flex md:flex-row flex-col md:justify-between md:gap-5 gap-10 items-center'>
        <Image src={"/serviceimage.png"} alt='i' width={400} height={400} />

        <div className='uppercase flex flex-col lg:gap-10 gap-5 max-w-3xl w-full'>
          <div>
            {
              accordionItems.map((item, index) => (
                <div key={index}>
                  <div className='flex justify-between items-center lg:mb-10 mb-5'>
                    <h1 className='lg:text-4xl md:text-lg'>{item.title}</h1>
                    <Button className='bg-yellow-200 text-black px-6 rounded-full'>+</Button>
                  </div>
                  <Separator/>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection