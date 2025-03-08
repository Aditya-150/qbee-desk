import React from 'react'
import SubHeader from './ui/sub-header'
import SectionHeader from './ui/section-header'
import Image from 'next/image'
import FlipCarousel from './ui/flip-carousel'

const TestimonialsSection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 relative overflow-hidden">
            <div className="absolute -z-1 inset-0 w-full h-full">
                <Image
                    src="/testimonials/testimonials-bg.svg"
                    alt="Hero"
                    className="object-cover w-full h-full"
                    layout="fill"
                    priority
                />
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <SubHeader title="Testimonials" />
                    <SectionHeader title="Our Customers Love the Difference" className="mt-2 text-2xl sm:text-3xl lg:text-4xl px-4" />
                    <p className="text-sm sm:text-base w-full sm:w-4/5 lg:w-3/4 text-center text-content mt-4 px-4">
                        At Quantum Bee, We built to simplify your workday and keep you connected. But don&apos;t just take our word for it.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-primary rounded-lg py-4 sm:py-5 w-full max-w-[800px] mx-auto mt-8 sm:mt-10 lg:mt-12 px-2 sm:px-4">
                    <FlipCarousel />
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection