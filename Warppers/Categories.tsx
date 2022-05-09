import React from 'react'
import { Category } from '../components'
import { categories } from '../data'
const Categories = () => {
  return (
    <ul className="flex w-full gap-4 px-4 mt-2 overflow-x-scroll bg-white">
      {categories.map((category, i) => (
        <Category image={category.image} text={category.text} />
      ))}
    </ul>
  )
}

export default Categories
