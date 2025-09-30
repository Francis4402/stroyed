import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Services = () => {

    const servicesCard = [
        {
            name: 'Staff Augmentation',
            description: 'Add the right talent to your team quickly, ensuring smooth progress and success.',
            bgcolor: 'bg-gradient-to-br from-slate-800 via-slate-800 to-orange-300'
        },
        {
            name: 'Dedicated Team',
            description: 'Get a team fully focused on your game, handing everything from start to finish.',
            bgcolor: 'bg-gradient-to-br from-slate-800 via-slate-800 to-cyan-700'
        },
        {
            name: 'Fixed Bid',
            description: 'We set a clear price and timeline, providing exactly what you asked for.',
            bgcolor: 'bg-gradient-to-br from-slate-800 via-slate-800 to-green-800'
        }
    ]

  return (
    <div className='flex flex-col gap-14 items-center mt-10'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='uppercase text-4xl tracking-tighter font-semibold text-center'>Your Idea, <span className='text-red-500'>Our Power</span></h1>
            <p className='text-sm text-gray-300'>Different teams, different flow, we adapt.</p>
        </div>

        <div className='grid md:grid-cols-3 w-full lg:gap-0 gap-5 items-center justify-center'>
            {
                servicesCard.map((s, index) => (
                    <Card key={index} className={`${s.bgcolor} h-52 lg:w-md`}>
                        <CardHeader>
                            <CardTitle>{s.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{s.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    </div>
  )
}

export default Services