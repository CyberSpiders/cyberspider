import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaDiscord, FaGithub, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'

export const Navbar = () => {
  const [active, setActive] = useState(false)
  const [mount, setMount] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMount(true)
  }, [])
  const switchTheme = () => {
    if (mount) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="m-3 mt-0 flex flex-wrap items-center rounded-2xl bg-gray-800 p-3">
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <span className="text-xl font-bold tracking-wide text-white">
              CyberSpiders
            </span>
          </a>
        </Link>
        <button
          className=" ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-slate-700 hover:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-slate-700 hover:text-white lg:inline-flex lg:w-auto ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-slate-700 hover:text-white lg:inline-flex lg:w-auto">
                About
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-slate-700 hover:text-white lg:inline-flex lg:w-auto">
                News
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-slate-700 hover:text-white lg:inline-flex lg:w-auto">
                Contact
              </a>
            </Link>
            <div className="flex items-center justify-evenly">
              <Link href="/">
                <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-slate-700 hover:text-white">
                  <FaDiscord />
                </a>
              </Link>
              <Link href="https://github.com/CyberSpiders">
                <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-slate-700 hover:text-white">
                  <FaGithub />
                </a>
              </Link>
              <Link href="/">
                <a
                  onClick={switchTheme}
                  className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-slate-700 hover:text-white"
                >
                  {theme === 'light' ? <FaMoon /> : <FaSun />}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
