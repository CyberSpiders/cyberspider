import React from 'react'
import Footer from './Footer'
import { Navbar } from './NavBar'

interface layout {
  children: any
}

const Layout: React.FC<layout> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
