import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

interface CardType {
  title: string
  description: string
  url: string
  children: any
  ctitle: any
}

const Card: React.FC<CardType> = ({
  title,
  description,
  url,
  ctitle,
  children,
}) => {
  return (
    <div className="m-3 rounded-2xl bg-gray-600 px-3 py-4 hover:animate-pulse">
      <h1 className="flex items-center justify-center text-2xl">
        <div className={ctitle}>{title}</div>
        {children}
      </h1>
      <p>{description}</p>
      <Link href={'/'.concat(url)}>
        <a className="flex items-center justify-center border-b-2 border-gray-600">
          Read More <FaLongArrowAltRight className="ml-4" />
        </a>
      </Link>
    </div>
  )
}

export default Card
