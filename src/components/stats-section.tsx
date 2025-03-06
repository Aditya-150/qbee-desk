import React from 'react'

const StatsSection = () => {
    const stats = [
        { header: '10K+', description: 'Total hours tracked' },
        { header: '1000+', description: 'Active Users' },
        { header: '100+', description: 'Tasks Completed' },
    ]
    return (
        <section className='w-full py-12 flex flex-col items-center justify-center text-white bg-dark-blue'>
            <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</h2>
            <div className='flex flex-row items-center justify-center gap-20 mt-8'>
                {stats.map((stat) => (
                    <Stats key={stat.header} header={stat.header} description={stat.description} />
                ))}
            </div>
            <p className='text-sm font-normal mt-5 w-2/5 text-center'>Our all-in-one ERP and HR solution makes employee tracking, task management, and HR operations a breeze - so you can focus on what matters most.</p>
        </section>
    )
}


const Stats = ({ header, description }: { header: string; description: string }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-4xl font-semibold'>{header}</h3>
            <p className='text-sm font-normal'>{description}</p>
        </div>
    )
}



export default StatsSection