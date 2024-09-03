import React from 'react'

import Header from './Header'
import HeroBanner from './HeroBanner'
import HeaderInfo from './HeaderInfo'
import ScrollToTop from './ScrollToTop'

interface Layout {
  children: React.ReactNode
}

export default function Layout({ children }: Layout) {
  return (
    <div className='bg-gradient-to-b from-white to-[#CBDCFF] min-h-screen'>
      <Header />
      <HeroBanner />
      <HeaderInfo />
      <ScrollToTop />
      <main>{children}</main>
    </div>
  )
}
