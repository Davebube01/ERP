import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Layout() {
  const location = useLocation()

  const getHeaderBackgroundColor = () => {
    switch (location.pathname) {
      case '/contact':
        return 'white-bg'
      case '/':
        return 'nav-bg'
      case '/solutions':
        return 'solution-bg'
      case '/book-demo':
        return 'white-bg'
      default:
        return '' // Default case, no background color specified
    }
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className={`${getHeaderBackgroundColor()} md:pt-8 `}>
        <Header/>
      </div>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}
