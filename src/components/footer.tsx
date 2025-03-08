import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaXTwitter, FaLinkedinIn} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="text-content py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full py-6 sm:py-8 lg:py-10 border-b border-content/20 gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <Link href="/"><Image src="/logo-dark.svg" width={72} height={72} alt="Logo" className="w-16 sm:w-[72px]" /></Link>
            <p className="font-medium text-content">Where Every Field Move Counts.</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            {/* <Link href="/"><FaGooglePlay size={20} className="text-black" /></Link>
            <Link href="/"><FaApple size={20} className="text-black" /></Link> */}
            <Link href="/" className="hover:opacity-80 transition-opacity"><FaXTwitter size={20} className="text-black" /></Link>
            <Link href="/" className="hover:opacity-80 transition-opacity"><FaLinkedinIn size={20} className="text-black" /></Link>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between w-full gap-4 py-4 sm:py-6">
          <p className="font-medium text-xs sm:text-sm text-black/60 text-center sm:text-left">Copyright © 2025 All rights reserved</p>
          <ul className="flex flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-content flex-wrap">
            <li className="group"><Link href="/privacy" className="group-hover:underline transition-all duration-300 ease-in-out text-black px-2 sm:px-0">Privacy Policy</Link></li>
            <li className="group"><Link href="/terms-use" className="group-hover:underline transition-all duration-300 ease-in-out text-black px-2 sm:px-0">Terms of Use</Link></li>
            <li className="group"><Link href="/pricing#faq" className="group-hover:underline transition-all duration-300 ease-in-out text-black px-2 sm:px-0">FAQs</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer