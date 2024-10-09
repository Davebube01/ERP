import React, {useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { initVantaWaves, destroyVantaWaves  } from './components/vantawaves.js';

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    initVantaWaves();
    
    // Cleanup function
    return () => {
      destroyVantaWaves();
    };
  }, []);

  const getHeaderBackgroundColor = () => {
    switch (location.pathname) {
      case '/contact':
        return 'white-bg'
      case '/':
        return 'bg-transparent'
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
      <div className={`${getHeaderBackgroundColor()} `} >
        <Header/>
      </div>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}
