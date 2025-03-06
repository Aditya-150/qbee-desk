import React from 'react'
import SubHeader from './ui/sub-header'
import SectionHeader from './ui/section-header'
import Image from 'next/image'
import FlipCarousel from './ui/flip-carousel'
const TestimonialsSection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 relative">
            <div className="absolute -z-1 inset-0 w-full h-full">
                <Image
                    src="/testimonials/testimonials-bg.svg"
                    alt="Hero"
                    className="object-cover w-full h-full"
                    layout="fill"
                    priority
                />
            </div>
            <SubHeader title="Testimonials" />
            <SectionHeader title="Our Customers Love the Difference" />
            <p className="text-base w-1/2 text-center text-content">At Qbee Desk, our ERP and HR solution is built to simplify your workday and keep you connected. But don&apos;t just take our word for it.</p>

            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-primary rounded-lg py-5 w-full max-w-[800px] mt-12">
                <FlipCarousel />
            </div>
        </section>
    )
}

export default TestimonialsSection