import React from 'react'
import { AiFillApi } from 'react-icons/ai'
import { BsFillFileEarmarkZipFill } from 'react-icons/bs'
import { FaDiscord, FaGithub, FaGithubAlt } from 'react-icons/fa'
import Header from '../components/Header'
import Resource from '../components/Resource'

const resource = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header
        name="Resource"
        description="CyberSecurity Resources Page"
        url="resource"
      />
      <div className="bg-slate-700 p-10 text-center">
        <h1 className="text-3xl">About CyberSpider</h1>
      </div>

      <div className="m-12 flex items-center justify-center">
        <div>
          <Resource
            name="Website Source Code"
            description="CyberSpider's Website Source Code Available on GitHub"
            url="https://github.com/CyberSpiders/cyberspider"
          >
            <BsFillFileEarmarkZipFill className="mx-auto text-orange-600" />
          </Resource>
          <Resource
            name="Python Simplified Discord Server"
            description="The Official PythonSimplified's Discord Server"
            url="https://discord.gg/Mq8xpfWV"
          >
            <FaDiscord className="mx-auto text-blue-700" />
          </Resource>
        </div>
        <div>
          <Resource
            name="News Scraper"
            description="News Scraper Source Code on GitHub"
            url="https://discord.gg/Mq8xpfWV"
          >
            <AiFillApi className="mx-auto text-emerald-500" />
          </Resource>
          <Resource
            name="CyberSpiders GitHub Page"
            description="CyberSpiders GitHub Organisation"
            url="https://discord.gg/Mq8xpfWV"
          >
            <FaGithub className="mx-auto text-black" />
          </Resource>
        </div>
      </div>
    </div>
  )
}

export default resource
