import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const socials = [
    {
      icon: Facebook,
      url: '/',
    },
    {
      icon: Instagram,
      url: '/',
    },
    {
      icon: Youtube,
      url: '/',
    }
  ]
    
  return (
    <div>
      <div className='bg-gradient-to-br from-slate-900 via-slate-680 to-slate-600'>
        <div className='container mx-auto md:px-0 px-5 mt-10'>
          <div className='flex flex-col gap-4 py-10'>
            <h1 className='uppercase text-5xl font-medium tracking-tighter'>GET IN TOUCH</h1>
            <div className='flex flex-wrap gap-4'>
              {
                socials.map((social, index) => (
                  <Link href={social.url} key={index}>
                    <social.icon />
                  </Link>
                ))
              }
            </div>

            <p className='uppercase mb-20'>Contact Us</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer