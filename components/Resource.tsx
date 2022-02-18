import Link from 'next/link'
import React from 'react'

interface Resource {
  name: string
  description: string
  url: string
  children: any
}

const Resource: React.FC<Resource> = ({ name, description, children, url }) => {
  return (
    <div className="m-12 hover:cursor-pointer">
      <Link href={url}>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-200 px-3 py-2 text-center">
          <div>
            <div className="m-3 text-4xl">{children}</div>
            <h1 className="font-ubuntu text-2xl font-bold text-gray-700">
              {name}
            </h1>
            <p className="m-2 font-mono text-sm font-semibold text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Resource
