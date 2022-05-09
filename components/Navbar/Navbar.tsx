import React from 'react'
import { FaBars, FaCartPlus, FaSearch } from 'react-icons/fa'
import { BsPersonCheck } from 'react-icons/bs'
import Link from 'next/link'
import JumiaLogo from '../UI/JumiaLogo'
import { useGlobalContext } from '../../store/context'
import { Router, useRouter } from 'next/router'
const Navbar = () => {
  const { toggleSidebar, openSearch, toggleLoading } = useGlobalContext()
  const router = useRouter()
  return (
    <nav className="p-5 bg-white">
      <div className="flex justify-between ">
        <div className="flex cursor-pointer">
          <FaBars
            className="mr-4 text-2xl cursor-pointer"
            onClick={() => {
              toggleSidebar()
              toggleLoading()
            }}
          />
          <JumiaLogo />
        </div>
        <div className="flex gap-4">
          <Link href="/customer/login">
            <BsPersonCheck className="text-2xl cursor-pointer" />
          </Link>
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <FaCartPlus className="text-2xl" />
              <span className="absolute top-[-6px] right-[-6px] z-10 flex h-4 w-4 items-center justify-center rounded-full bg-mainColor  text-sm text-white">
                3
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div
        className="flex gap-4 px-4 py-2 mt-4 bg-white border border-gray-500 cursor-pointer rounded-3xl"
        onClick={() => {
          openSearch()
          // router.push('/search')
        }}
      >
        <FaSearch className="text-xl" />
        <span className="text-sm text-gray-500">
          Search products, brands and categories
        </span>
      </div>
    </nav>
  )
}

export default Navbar
