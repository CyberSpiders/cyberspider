import React from 'react'

interface News {
  title: string
  desc: string
  id: string
}

const Newscomp: React.FC<News> = ({ title, desc, id }) => {
  return (
    <div>
      <div className="m-3 rounded-xl bg-gray-700 px-2 py-3">
        <div>
          <div className="flex items-center">
            <h1 className="font-ubuntu text-3xl">{title}</h1>
            <p className="ml-3">({id} comments)</p>
          </div>
          <p className="text-lg">
            {desc.length > 30 ? desc.substring(0, 150).concat('...') : desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newscomp
