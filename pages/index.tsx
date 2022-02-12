import Link from 'next/link'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
import Header from '../components/Header'
import { Navbar } from '../components/NavBar'

const Homepage = () => {
  return (
    <div className="min-h-screen animate-grad_xy flex-col items-center bg-gradient-to-tr from-slate-600 to-slate-900">
      <Header
        name="Homepage"
        url=""
        description="CyberSpiders - A Hacker\'s Warehouse"
      />
      <Navbar />
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div>
          <div className="text-center">
            <div>
              <h1 className="animate-pulse bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text font-ubuntu text-8xl text-transparent">
                CyberSpiders
              </h1>
              <p className="font-mono text-xl text-teal-200">
                A Hacker's Warehouse
              </p>
            </div>
            <div>{/* Maybe the side image */}</div>
          </div>
        </div>
        <div className="absolute bottom-7">
          <Link href="#further">
            <BsChevronDoubleDown className="animate-bounce text-3xl font-bold" />
          </Link>
        </div>
      </section>
      <section
        id="further"
        className="flex min-h-screen flex-col items-center justify-center text-center"
      >
        <div>
          <div>
            <div className="">
              <h1 className="font-ubuntu text-5xl">What is CyberSpider?</h1>
              <p className="break-normal">
                CyberSpider is a project that links the frequently used websites
                and sources that a Cyber Security Enthusiast visits.
              </p>
            </div>
            <div className="m-10 mx-2 grid grid-cols-2 items-center justify-center">
              <div className="m-3 border-4 border-slate-800 px-2 py-3">
                <h1>News</h1>
                <p>
                  All the news that you need releated to cyber at just one stop!
                </p>
                <Link href="/">
                  <a className="flex items-center justify-center">
                    Read More <FaArrowRight className="ml-3" />
                  </a>
                </Link>
              </div>
              <div className="m-3  border-4 border-slate-800 py-3 px-2">
                <h1>Tools</h1>
                <p>A few tools to make your day hackable</p>
                <Link href="/">
                  <a className="flex items-center justify-center">
                    Read More <FaArrowRight className="ml-3" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
