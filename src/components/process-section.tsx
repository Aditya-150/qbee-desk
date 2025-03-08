"use client"

import React from 'react'
import SectionHeader from './ui/section-header';
import SubHeader from './ui/sub-header';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
        <section className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
                <SubHeader title="How It Works" />
                <SectionHeader title="Get Started in Minutes" className="text-3xl sm:text-4xl lg:text-5xl w-full sm:w-3/4 lg:w-1/2 text-center mx-auto mt-2" />
                <p className="text-sm sm:text-base w-full sm:w-3/4 lg:w-1/2 mx-auto text-center text-content mt-4">
                    Our one-step solution effortlessly integrates HR and ERP tools, giving you real-time insights to streamline your workflow and drive success.
                </p>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6 sm:gap-8 lg:gap-x-40"
            >
                {process.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center relative rounded-2xl shadow-lg overflow-hidden bg-white/5 backdrop-blur-sm"
                    >
                        <div className="absolute z-10 top-0 left-0 py-1.5 px-4 bg-white rounded-br-xl aspect-square flex items-center justify-center">
                            <p className="text-[#CE5158] text-xl sm:text-2xl font-bold">0{item.id}</p>
                        </div>
                        <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px]">
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-6">
                            <p className="text-lg sm:text-xl font-semibold">{item.title}</p>
                            <p className="text-sm text-content mt-1">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default ProcessSection;