'use client'
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle2Icon, HeadsetIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import FAQSection from '@/components/faq-section';
import { motion } from 'framer-motion';

const freePlan = [
    "Real-time employee tracking",
    "Real-time dashboard",
    "Unlimited integrations",
    "HR systems",
    "Admin access"
];
const enterprisePlan = [
    "Real-time employee tracking",
    "Real-time dashboard",
    "Unlimited integrations",
    "HR systems",
    "Admin access"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function Pricing() {
    return (
        <div>
            <section className="max-w-2xl mx-auto py-32 sm:py-48 lg:py-72 px-4 sm:px-6 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-3xl"></div>
                </div>
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/pricing/pricing-graphics.svg"
                        alt="pricing graphics"
                        className="object-contain w-1/2 h-1/2 absolute left-1/2 top-1/2"
                        layout="fill"
                        priority
                    />
                </div>
                <motion.div 
                    className='z-10 w-full flex flex-col items-center justify-center'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="text-2xl sm:text-3xl lg:text-5xl/tight text-content text-center font-semibold max-w-3xl"
                        variants={itemVariants}
                    >
                        Start for Free
                    </motion.h1>
                    <motion.p 
                        className="text-content text-center mt-4 text-sm sm:text-base px-4"
                        variants={itemVariants}
                    >
                        Scale with what you need, not what you spend. Start with real time tracking.
                    </motion.p>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 w-full"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <Card className="h-fit">
                                <CardHeader className="space-y-2">
                                    <p className="text-base font-medium">Free</p>
                                    <h2 className="text-3xl sm:text-[40px] font-semibold">₹0</h2>
                                    <p className='text-sm'>Add upto 4 person</p>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="outline" className='cursor-pointer w-full'>Try Free</Button>
                                </CardContent>
                                <CardFooter>
                                    <div className='flex flex-col gap-y-2'>
                                        {freePlan.map((feature, index) => (
                                            <div key={index} className="flex items-center text-content gap-x-2 text-sm sm:text-base">
                                                <CheckCircle2Icon className="w-4 h-4 flex-shrink-0" />
                                                <p>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className='border-[#AE00E1] h-fit'>
                                <CardHeader className="space-y-2">
                                    <div className='flex flex-row items-center justify-between flex-wrap gap-2'>
                                        <p className="text-base font-medium">Enterprise</p>
                                        <div className='text-[10px] bg-primary text-white px-2 py-1 rounded-full whitespace-nowrap'>Early Bird Offer</div>
                                    </div>
                                    <h2 className="text-3xl sm:text-[40px] font-semibold">₹100 <span className='text-sm line-through text-gray-600'>₹200</span></h2>
                                    <p className='text-sm'>Per person / month</p>
                                </CardHeader>
                                <CardContent>
                                    <div className='flex flex-col gap-y-3'>
                                        <Button variant="secondary" className="cursor-pointer bg-gradient-to-b from-primary from-0% via-80% via-dark-blue to-100% to-[#666666] text-white w-full">Upgrade</Button>
                                        <Button variant="outline" className='cursor-pointer w-full'><HeadsetIcon className='w-3.5 h-3.5' /> <p>Connect with Us</p></Button>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className='flex flex-col gap-y-3'>
                                        <p className='text-gray-600 font-medium text-sm sm:text-base'>Everything in Free & Extra</p>
                                        {enterprisePlan.map((feature, index) => (
                                            <div key={index} className="flex items-center text-content gap-x-2 text-sm sm:text-base">
                                                <CheckCircle2Icon className="w-4 h-4 flex-shrink-0" />
                                                <p>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
            <FAQSection />
        </div>
    );
};


