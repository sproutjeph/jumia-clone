import Link from 'next/link'
import React from 'react'
import { myAccountData, ourCategoriesData, ourServicesData } from '../../data'
import { FaTimes } from 'react-icons/fa'
import { MdChevronRight, MdOutlineCommentBank } from 'react-icons/md'
import { useGlobalContext } from '../../store/context'
import JumiaLogo from '../UI/JumiaLogo'
import SidebarItem from '../UI/SidebarItem'

const Sidebar = () => {
  const { toggleSidebar, isSidebarOpen, toggleLoading } = useGlobalContext()

  return (
    <>
      <aside
        className={`absolute top-0 z-30 h-screen w-[80vw] transform overflow-y-scroll bg-white py-4 transition-all duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-[101%]'
        }`}
      >
        <div className="flex gap-2">
          <FaTimes
            className="ml-4 text-2xl cursor-pointer"
            onClick={() => {
              toggleSidebar()
              toggleLoading()
            }}
          />
          <JumiaLogo />
        </div>
        <hr className="my-4" />
        <Link href="/">
          <div className="flex gap-2 ml-4 cursor-pointer">
            <MdOutlineCommentBank className="text-2xl" />
            <span>Live Help</span>
          </div>
        </Link>
        <hr className="my-4" />
        <div className="">
          <Link href="/customer">
            <div className="flex items-center justify-between gap-2 ml-4 uppercase cursor-pointer">
              <span className="text-mainColor">my jumia account</span>
              <MdChevronRight className="mr-2 text-2xl" />
            </div>
          </Link>
          <ul className="flex flex-col gap-8 mt-4 ml-4">
            {myAccountData.map((item, i) => (
              <SidebarItem Icon={item.icon} text={item.text} key={i} />
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div className="">
          <Link href="/customer">
            <div className="flex items-center justify-between gap-2 ml-4 uppercase cursor-pointer">
              <span className="text-mainColor">our categories</span>
              <span className="mr-4 text-xs underline capitalize">
                {' '}
                see All
              </span>
            </div>
          </Link>
          <ul className="flex flex-col gap-8 mt-4 ml-4">
            {ourCategoriesData.map((item, i) => (
              <SidebarItem Icon={item.icon} text={item.text} key={i} />
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div className="">
          <Link href="/customer">
            <div className="flex items-center justify-between gap-2 ml-4 uppercase cursor-pointer">
              <span className="text-mainColor">our services</span>
              <span className="mr-4 text-xs underline capitalize">
                {' '}
                see All
              </span>
            </div>
          </Link>
          <ul className="flex flex-col gap-8 mt-4 ml-4">
            {ourServicesData.map((item, i) => (
              <SidebarItem Icon={item.icon} text={item.text} key={i} />
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-8 ml-4">
          <Link href="/">
            <h4 className="cursor-pointer">Sell on Jumia</h4>
          </Link>
          <Link href="/">
            <h4 className="cursor-pointer">Contact us</h4>
          </Link>
          <Link href="/">
            <h4 className="cursor-pointer">Help Center</h4>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
