import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

interface News {
  title: string
  author: string
  points: number
  comments: number
  link: string
}

const Newscomp: React.FC<News> = ({
  title,
  author,
  points,
  comments,
  link,
}) => {
  return (
    <div>
      <div className="m-3 rounded-xl bg-gray-800 px-2 py-3 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-slate-400 hover:text-gray-800">
        <Link href={link}>
          <div className="flex items-center">
            <div className="m-4 flex flex-col items-center text-center">
              <AiFillStar className="text-xl text-yellow-500" />
              <p>{points}</p>
            </div>
            <div>
              <h1 className="font-ubuntu text-2xl">{title}</h1>
              <div className="flex items-center text-sm">
                <p className="mr-3">{author}</p>
                <p>|</p>
                <p className="ml-3">({comments} comments)</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Newscomp
