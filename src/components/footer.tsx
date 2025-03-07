import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaXTwitter, FaLinkedinIn} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="text-content py-20 flex flex-col items-center justify-center max-w-7xl mx-auto">
      <div className="flex flex-row items-center justify-between w-full py-10 border-b border-content/20">
        <div className="flex flex-row items-center justify-center gap-4">
          <Link href="/"><Image src="/logo-dark.svg" width={72} height={72} alt="Logo" /></Link>
          <p className="font-medium text-content">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
            {/* <Link href="/"><FaGooglePlay size={20} className="text-black" /></Link>
            <Link href="/"><FaApple size={20} className="text-black" /></Link> */}
          <Link href="/"><FaXTwitter size={20} className="text-black" /></Link>
          <Link href="/"><FaLinkedinIn size={20} className="text-black" /></Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-4 py-4">
        <p className="font-medium text-sm text-black/60">Copyright © 2025 All rights reserved</p>
        <ul className="flex flex-row items-center justify-center gap-3 text-sm text-content">
            <li className="group"><Link href="/privacy" className="group-hover:underline transition-all duration-300 ease-in-out text-black">Privacy Policy</Link></li>
          <li className="group"><Link href="/terms-use" className="group-hover:underline transition-all duration-300 ease-in-out text-black">Terms of Use</Link></li>
          <li className="group"><Link href="/" className="group-hover:underline transition-all duration-300 ease-in-out text-black">FAQs</Link></li>
        </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer