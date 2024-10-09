import React from 'react'
import logo from '../assets/transparentLogo.png'
import { Link } from 'react-router-dom'
// import ScrollToTopLink from '../ScrollTopLink'
import ScrollToTopLink from './ScrollTopLink'

export default function Footer() {
  return (
    <>
      <div className=' min-h-[500px] lg:flex gap-24 items-center foot px-4 py-10'>
        <div className='lg:w-[80%] md:mt-0 mt-6 text-white col-span-2 lg:col-span-1'>
          <div className=''>
              <Link to='/'>
                  <img src={logo} alt=""  className='object-cover h-20'/>{/* <h4 className={`${scrolled ? 'text-black' : 'text-black'} leading-7 font-bold italic text-lg `}>SydaSuite</h4> */}
              </Link>
          </div>
          <p className='mt-8 md:text-lg font-[inter]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, facere.</p>
          <div className='flex mt-10 gap-8'>
            <div className= 'rounded-full'>
              <a href="https://www.instagram.com/sydanigroup/">
              <span className='md:text-4xl text-3xl'>
                <ion-icon name="logo-instagram"></ion-icon>
              </span>
              </a>
            </div>
            <div className='h-10 w-10 rounded-full'>
              <a href="">
                <span className='md:text-4xl text-3xl'>
                  <ion-icon name="logo-twitter"></ion-icon>
                </span>
              </a>
            </div>
            <div className='h-10 w-10 rounded-full'>
              <a href="https://www.facebook.com/sydanigrp">
                <span className='md:text-4xl text-3xl'>
                  <ion-icon name="logo-facebook"></ion-icon>
                </span>
              </a>
            </div>
            <div className='h-10 w-10 rounded-full'>
            <a href="https://www.linkedin.com/company/sydani-group">
              <span className='md:text-4xl text-3xl'>
                <ion-icon name="logo-linkedin"></ion-icon>
              </span>
            </a>
            </div>
          </div>
        </div>


        <div className='lg:w-[60%] md:mt-0 text-white lg:mt-0 mt-6 mt-10 lg:mt-0'>
          <p className='text-2xl font-[Inter]'>Get in touch</p>
          <div className='flex md:mt-10 mt-6'>
            <div className='h-10 w-10  rounded-full flex justify-center items-center'>
              <span className='md:text-4xl text-3xl'>
              <ion-icon name="call-outline"></ion-icon>
              </span>
            </div>
            <div className='ml-6'>
              <p className='text-lg font-[Inter]'>Call now</p>
              <p className='text-lg mt-1 font-[Roboto]'>(+234) 800 000 0000</p>
            </div>
          </div>
          <div className='flex  lg:mt-10 mt-5'>
            <div className='h-10 w-10 rounded-full flex justify-center items-center'>
              <span className="md:text-4xl text-3xl">
              <ion-icon name="mail-open-outline"></ion-icon>
              </span>
            </div>
            <div className='ml-6'>
              <p className='text-lg font-[Inter]'>Email us</p>
              <p className='text-lg mt-1 font-[Roboto]'>sydanitech@gmail.com</p>
            </div>
          </div>
        </div>


        <div className='w-[50%] lg:mt-0 mt-10 text-white '>
          <p className='md:text-2xl text-xl font-[Inter]'>Quick links</p>
          <div className='mt-5'>
            <ScrollToTopLink to="/" className='lg:text-lg font-[Roboto] transition-all duration-300 ease-in-out'>
              Home
            </ScrollToTopLink>
            <div className='mt-4'>
              <ScrollToTopLink to='/solutions' className='lg:text-lg font-[Roboto]'>Solutions</ScrollToTopLink>
            </div>
            <div className='mt-4'>
              <ScrollToTopLink to='/company' className='lg:text-lg font-[Roboto]'>Company</ScrollToTopLink>
            </div>
            <div className='mt-4'>
              <ScrollToTopLink to='/contact' className='lg:text-lg font-[Roboto]'>Contact Us</ScrollToTopLink>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}
