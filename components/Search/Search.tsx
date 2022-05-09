import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { MdArrowBack, MdSearch } from 'react-icons/md'
import { useGlobalContext } from '../../store/context'

const Search = () => {
  const { closeSearch } = useGlobalContext()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="fixed top-0 z-20 w-full h-screen bg-gray-100">
      <div className="flex items-center p-4 mt-1 bg-white">
        <MdArrowBack
          className="text-3xl cursor-pointer"
          onClick={() => {
            closeSearch()
            router.push('/')
          }}
        />

        <input
          ref={inputRef}
          className="flex-1 p-2 outline-0 placeholder:tracking-wider"
          type="text"
          placeholder="search products, brands and categoies"
        />
        <MdSearch className="text-3xl cursor-pointer" />
      </div>
    </div>
  )
}

export default Search
