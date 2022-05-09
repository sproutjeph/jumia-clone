import Link from 'next/link'
import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { FaBars, FaStar } from 'react-icons/fa'

const JumiaLogo = () => {
  return (
    <Link href="/">
      <div className="flex cursor-pointer">
        <span className="uppercase">jumia</span>
        <div className="relative">
          <BsCart4 className="text-2xl" />
          <span className="absolute top-[-6px] right-[-6px] z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#f68b1e]  text-sm text-white">
            <FaStar className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default JumiaLogo
