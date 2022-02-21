import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'

const about = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <Header name="About" description="CyberSpiders About Page" url="about" />
      <div className="bg-slate-700 p-10">
        <h1 className="text-3xl">About CyberSpiders</h1>
      </div>

      <div className="m-12">
        <Image src="/img/mascot.png" width={400} height={400} />
        <p className="">
          CyberSpiders is an Open Source News Aggregator that keep CyberSecurity
          Enthusiasts up-to date with the current information, via the
          HackerNews. This project is an initiative made since the{' '}
          <Link href="https://www.youtube.com/c/PythonSimplified">
            <a className="text-yellow-400">PythonSimplified's</a>
          </Link>{' '}
          first ever CodeJam.
        </p>
      </div>
    </div>
  )
}

export default about
