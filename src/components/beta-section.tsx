import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

const BetaSection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 relative">
            <div className="absolute -z-1 inset-0 w-full h-full">
                <Image
                    src="/testimonials/testimonials-bg.svg"
                    alt="beta"
                    className="object-cover w-full h-full"
                    layout="fill"
                    priority
                />
            </div>
            <div className="relative z-10 text-center w-full py-20 px-24 max-w-7xl mx-auto rounded-3xl flex flex-col items-center justify-center bg-gradient-to-br from-0% from-[#6C018A] via-80% via-[#00183C] to-100% to-[#666]">
                <div className="absolute -z-1 inset-0 w-full h-full">
                    <Image
                        src="/beta/beta-bg.svg"
                        alt="beta"
                        className="object-cover w-full h-full"
                        layout="fill"
                        priority
                    />
                </div>
                <div className="flex flex-row items-center justify-center bg-gradient-to-r from-[#AAAAAA] via-[#FAFCFE] to-[#FAE4FF] rounded-3xl p-6">
                    <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.7917 5.0835L6.875 32.5835H27.5L25.2083 50.9168L48.125 23.4168H27.5L29.7917 5.0835Z" stroke="url(#paint0_linear_79_21304)" strokeWidth="4.58333" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_79_21304" x1="7.63889" y1="28.0002" x2="48.8889" y2="28.0002" gradientUnits="userSpaceOnUse">
                                <stop offset="0.15" stopColor="#1F1F1F" />
                                <stop offset="0.65" stopColor="#666666" />
                                <stop offset="0.985" stopColor="#B1AFAF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <h2 className="text-4xl mt-8 font-semibold text-white">Start Free from Today</h2>
                <p className="text-white w-1/2 text-sm text-center text-balance mt-2">Get started with our one-step solution and achieve results like others. Click &quot;Sign Up&quot; to join us.</p>
                <div className="flex flex-row items-center justify-center mt-6 gap-4">
                    <Button className="bg-gradient-to-b from-white to-[#666666] cursor-pointer" variant="secondary">Sign Up</Button>
                    <Button className="bg-transparent text-white border border-white hover:bg-white/20 cursor-pointer">Learn More</Button>
                </div>
            </div>
        </section>
    )
}

export default BetaSection;