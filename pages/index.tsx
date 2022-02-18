import Image from 'next/image'
import Link from 'next/link'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import { IoNewspaperOutline } from 'react-icons/io5'
import Card from '../components/Card'
import Header from '../components/Header'

const Homepage = () => {
  return (
    <div className="min-h-screen animate-grad_xy flex-col items-center bg-gradient-to-tr from-slate-600 to-slate-900">
      <Header
        name="Homepage"
        url=""
        description="CyberSpiders - A Hacker\'s Warehouse"
      />
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div>
          <div className="flex items-center gap-10 text-center">
            <div>
              <h1 className=" bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text font-ubuntu text-8xl text-transparent">
                CyberSpiders
              </h1>
              <p className="font-mono text-xl text-teal-200">
                A Hacker's Warehouse
              </p>
            </div>
            <div>
              <Image
                src="/img/mascot.png"
                width={200}
                height={200}
                alt="Mascot"
                placeholder="blur"
                blurDataURL="/img/mascot.png"
              />
            </div>
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
          {/* <div className="flex items-center"> */}
          <div className="">
            <div className="">
              <h1 className="font-ubuntu text-5xl">What is CyberSpider?</h1>
              <p className="mx-auto w-1/2 break-words">
                CyberSpider is an News Aggregator that keeps Cyber Security
                Enthusiasts updated with the current news, via the HackerNew.
              </p>
            </div>
            <div className="m-10 mx-2 flex items-center justify-center sm:flex">
              <Card
                title="News"
                description="All the news that you need releated to cyber at just one stop!"
                url="news"
                ctitle="text-yellow-400 text-3xl font-ubuntu"
              >
                <IoNewspaperOutline className="ml-3" />
              </Card>
              {/* <Card
                title="Tools"
                description="A few tools to make your day hackable with ease!"
                url="tools"
                ctitle="text-sky-400 text-3xl font-ubuntu"
              >
                <FaTools className="ml-3" />
              </Card> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
