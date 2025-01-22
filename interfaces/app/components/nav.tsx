
"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.jpg"


export default function nav() {
  return (
    <nav className="max-w-{120px} w-full mx-auto h-{80px} flex items-center justify-between p-5 border-b border-gray-300 ">
      
      <div>
        <Link href="/" >
        <Image width={30} height={30} src={logo} alt="logo" className="w-12 h-12" />
        </Link>
      </div>
      

    </nav>
  )
}
