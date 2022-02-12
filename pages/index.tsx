import Head from 'next/head'
import { Navbar } from '../components/NavBar'

const Homepage = () => {
  return (
    <div className="min-h-screen animate-grad_xy flex-col items-center bg-gradient-to-tr from-slate-600 to-slate-900">
      <Head>
        <title>CyberSpiders | Home</title>
      </Head>
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
      </section>
      {/* <section className="flex min-h-screen flex-col items-center justify-center">
        <div>
          <div>
            
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Homepage
