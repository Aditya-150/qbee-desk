import React from 'react'
import SectionHeader from './ui/section-header';
import SubHeader from './ui/sub-header';
import Image from 'next/image';

const process = [
    {
        id: 1,
        title: "Quick Sign Up",
        description: "Create your account in minutes with our intuitive setup.",
        image: "/process/process-1.jpg"
    },
    {
        id: 2,
        title: "Workforce Setup",
        description: "Customise features such as geo-fencing, daily attendance, and expense tracking to suit your business needs",
        image: "/process/process-2.jpg"
    },
    {
        id: 3,
        title: "App Setup",
        description: "Setup all your HR and ERP functionalities work together in one simple, one-step solution.",
        image: "/process/process-3.jpg"
    }
]
const ProcessSection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 relative">
            <SubHeader title="How It Works" />
            <SectionHeader title="Get Started in Minutes" className="text-5xl w-1/2 text-center" />
            <p className="text-base w-1/2 text-center text-content mb-16">Our one-step solution effortlessly integrates HR and ERP tools, giving you real-time insights to streamline your workflow and drive success.</p>
            <div className="grid grid-cols-3 max-w-7xl mx-auto gap-x-40">
                {
                    process.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center relative rounded-2xl shadow-lg overflow-hidden">
                            <div className="absolute z-10 top-0 left-0 py-1.5 px-4 bg-white rounded-br-xl aspect-square flex items-center justify-center">
                                <p className="text-[#CE5158] text-2xl font-bold">0{item.id}</p>
                            </div>
                            <div className="relative w-full h-[300px]">
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col py-6 px-6">
                                <p className="text-xl font-semibold">{item.title}</p>
                                <p className="text-sm text-content mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProcessSection;