"use client"

import { ArrowUpRightIcon, ChevronRightIcon, ZapIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen pt-32 md:pt-72 pb-12 md:pb-24 relative flex items-center justify-center text-content">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute -left-[20%] top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-3xl"></div>
        <div className="absolute -right-[20%] top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gradient-to-bl from-primary/30 via-primary/20 to-transparent blur-3xl"></div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/Home/hero-graphics.webp" 
          alt="Hero" 
          className="object-cover w-full h-full" 
          layout="fill" 
          priority
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center w-full flex flex-col items-center justify-center px-4 md:px-0"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HeroBanner />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:text-5xl/tight text-3xl/tight font-semibold w-full md:w-7/12 mt-4"
        >
          Empower Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-white -from-30% via-primary via-5% to-60% to-[#1f1f1f]">Local</span> Operations with Real-Time Employee Tracking
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base mt-4 px-4 md:px-0"
        >
          Integrated time tracking, productivity metrics, and HR for your distributed team.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-4 mt-8 w-full px-4 md:px-0"
        >
          <Button variant="secondary" className="w-full sm:w-auto cursor-pointer bg-gradient-to-b from-primary from-0% via-80% via-dark-blue to-100% to-[#666666] text-white">
            Start Now
          </Button>
          <Button variant="ghost" className="w-full sm:w-auto cursor-pointer hover:bg-transparent hover:opacity-80">Book a free Demo <ChevronRightIcon className="size-5" /></Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image src="/Home/bento-frame.webp" alt="Hero" className="mt-12 w-full max-w-5xl h-auto px-4 md:px-0" width={0} height={0} sizes="100vw" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-full flex flex-col items-center justify-center mt-10 gap-y-1.5 px-4 md:px-0"
        >
          <h3 className="text-xl md:text-2xl font-semibold">Empower Your Team with Real-Time Insights</h3>
          <p className="text-sm w-full md:w-2/5 text-center">Join thousands of growing companies that trust us to deliver top-notch digital solutions.Get started today - No commitment, No hidden fees.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

const HeroBanner = () => {
  return (
    <div className="rounded-full border flex items-center justify-center gap-2 py-2 px-3 bg-gray-400/30 cursor-pointer hover:translate-y-[-2px] hover:shadow transition-all duration-300 ease-in-out bg-clip-padding backdrop-filter backdrop-blur-md">
      <div className="flex items-center justify-center bg-gradient-to-b cursor-pointer from-white from-60% to-primary to-120% p-1 rounded-full"><ZapIcon className="size-2.5 text-black" /></div> 
      <p className="text-xs whitespace-nowrap">Sign Up for Beta Release</p>
      <ArrowUpRightIcon className="size-5" />
    </div>
  )
}

export default HeroSection