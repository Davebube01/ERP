import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {link, animateScroll as scroll} from 'react-scroll'
import logo from '../assets/SydaSuite-Logo.png'
import ScrollToTopLink from '../components/ScrollTopLink'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [iconName, setIconName] = useState('menu-outline')

    // for menu bar on small screen and the icon to change on click
    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setIconName(mobileMenuOpen ? 'menu-outline' : 'close-outline')
    }

    // for the navbar transparent and colored
    useEffect(() => {
        const handleScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        // handle Scroll
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <>
        <header className={`font-[poppins] sm:absolute fixed md:w-[95%] lg:w-[90%] md:mx-auto md:rounded-xl inset-x-0 md:top-8 left-0 lg:py-3 py-2 md:px-8 px-1 lg:h-24 h-20 transition-colors duration200 ease-in-out z-50  border-b-2 border-gray-200 ${scrolled ? 'bg-white shadow-2xl' : 'bg-white '}`}>
            <nav className='flex items-center justify-between' aria-label='Global'>
                <div className='p-3'>
                    <ScrollToTopLink to='/'>
                        <img src={logo} alt=""  className='object-cover h-12'/>{/* <h4 className={`${scrolled ? 'text-black' : 'text-black'} leading-7 font-bold italic text-lg `}>SydaSuite</h4> */}
                    </ScrollToTopLink>
                </div>
                <div className=''>
                    <button
                        type='button'
                        className='flex md:hidden -m-2.5 inline-flex items-center text-3xl justify-center rounded-md p-3 '
                        onClick={toggleMenu} 
                        aria-controls='header-menu'
                        aria-expanded={mobileMenuOpen}
                        aria-label='menu-button'
                    >
                        <span ><ion-icon name={iconName} className="" ></ion-icon></span>
                    </button>
                    <div id="header-menu" className={`${mobileMenuOpen ? 'block flex-col shadow-xl' : 'hidden'}  flex md:flex md:gap-x-12 justify-center items-center md:static md:min-h-fit md:w-auto absolute min-h-[50vh] w-full ml-2 rounded-lg right-0 top-[4.5rem] item-center px-5 bg-white md:bg-transparent p-1 z-50 md:shadow-none`}>
                        <ul className='flex flex-col md:flex-row gap-12 md:items-center md:gap-[4vw]'>
                            <li>
                                <ScrollToTopLink
                                    to="/"
                                    className="sm:text-sm text-lg lg:text-lg"
                                    onClick={toggleMenu} 
                                >
                                    Home
                                </ScrollToTopLink>
                            </li>
                            <li>
                                <ScrollToTopLink
                                    to="/solutions"
                                    className="sm:text-sm text-lg lg:text-lg"
                                    onClick={toggleMenu} 
                                >
                                    Solutions
                                </ScrollToTopLink>
                            </li>
                            <li>
                                <ScrollToTopLink
                                    to="/company"
                                    className="sm:text-sm text-lg lg:text-lg"
                                    onClick={toggleMenu} 
                                >
                                    Company
                                </ScrollToTopLink>
                            </li>
                            <li>
                                <ScrollToTopLink
                                    to="/contact"
                                    className="sm:text-sm text-lg lg:text-lg"
                                    onClick={toggleMenu} 
                                >
                                    Contact
                                </ScrollToTopLink>
                            </li>
                            <li className='block md:hidden'>
                                <ScrollToTopLink
                                    to=""
                                    className="sm:text-base text-lg lg:text-base"
                                    onClick={toggleMenu} 
                                >
                                    Register
                                </ScrollToTopLink>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className='flex items-center gap-4 hidden md:flex'>
                    {/* <button className='btn rounded-lg border-2 border-[#2C4E80] px-8 py-2 hover:text-white'>Log In</button> */}
                    <button className='btn rounded-lg border px-6 py-2 text-white bg-[#0a97e3] hover:bg-[#34a7e5] transition-all duration-300 ease-in-out'>Register</button>
                </div>
            </nav>
            
        </header>
        </>
    );
}

export default Header;
