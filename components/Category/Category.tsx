import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProps {
  image: string
  text: string
}
const Category = ({ image, text }: IProps) => {
  return (
    <Link href="/">
      <article className="flex flex-col items-start justify-center w-20 gap-1 py-2 cursor-pointer">
        <img
          className="min-w-[80px] flex-1 rounded-3xl object-contain"
          src={image}
          alt="Product photo"
        />
        <h4 className="text-xs">{text}</h4>
      </article>
    </Link>
  )
}

export default Category
