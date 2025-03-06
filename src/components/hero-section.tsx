import { ArrowUpRightIcon, ChevronRightIcon, ZapIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="w-full h-full pt-72 pb-24 relative flex items-center justify-center text-content">
      {/* bg-gradient-to-br from-0% from-[#6C018A] via-80% via-[#00183C] to-100% to-[#666] */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute -left-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-3xl"></div>
        <div className="absolute -right-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-primary/30 via-primary/20 to-transparent blur-3xl"></div>
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
      <div className="relative z-10 text-center w-full flex flex-col items-center justify-center">
        <HeroBanner />
        <h1 className="md:text-5xl/tight text-3xl/tight font-semibold w-7/12 mt-4">Empower Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-white -from-20% via-primary via-20% to-60% to-[#1f1f1f]">Global</span> Operations with Real-Time ERP Tracking</h1>
        <p className="text-base mt-4">Integrated time tracking, productivity metrics, and HR for your distributed team.</p>
        <div className="flex items-center justify-center gap-x-4 mt-8">
          <Button variant="secondary" className="cursor-pointer bg-gradient-to-b from-primary from-0% via-80% via-dark-blue to-100% to-[#666666] text-white">
            Start Now
          </Button>
          <Button variant="ghost" className="cursor-pointer hover:bg-transparent hover:opacity-80">Book a free Demo <ChevronRightIcon className="size-5" /></Button>
        </div>
        <Image src="/Home/bento-frame.webp" alt="Hero" className="mt-12 w-5xl h-auto" width={0} height={0} sizes="100vw" />
        <div className="w-full flex flex-col items-center justify-center mt-10 gap-y-1.5">
          <h3 className="text-2xl font-semibold">Empower Your Team with Real-Time Insights</h3>
          <p className="text-sm w-2/5">Join thousands of growing companies that trust us to deliver top-notch digital solutions.Get started today - No commitment, No hidden fees.</p>
        </div>
      </div>
    </section>
  )
}

const HeroBanner = () => {
  return (
    <div className="rounded-full border flex items-center justify-center gap-2 py-2 px-3 bg-gray-400/30 cursor-pointer hover:translate-y-[-2px] hover:shadow transition-all duration-300 ease-in-out bg-clip-padding backdrop-filter backdrop-blur-md">
      <div className="flex items-center justify-center bg-gradient-to-b cursor-pointer from-white from-60% to-primary to-120% p-1 rounded-full"><ZapIcon className="size-2.5 text-black" /></div> 
      <p className="text-xs">Sign Up for Beta Release</p>
      <ArrowUpRightIcon className="size-5" />
    </div>
  )
}
export default HeroSection