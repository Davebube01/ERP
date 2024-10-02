import React from 'react'

import GMP from "../../assets/GMP.jpg"
import head from "../../assets/Head.jpg"
import project from "../../assets/project-lead.jpg"
import building from "../../assets/contact-building.jpg"
import agree from "../../assets/pexelsagree.jpg"
import bonding from "../../assets/bonding.jpg"

export default function Company_page() {
  return (
    <>
        <div className='mt-28 mb-20 pt-10'>
            <p className='text-center md:text-6xl text-4xl w-[90%] mx-auto font-bold text-gray-800 font-[Inter] '>Sydani Technologies</p>
            <div className='md:w-[60%] w-[90%] mx-auto mt-6'>
                <p className='text-center md:text-2xl text-xl font-[Roboto] text-gray-600'>Leading the Charge in the
                Information Technology Industry</p>
            </div>
            <div className='w-[90%] mx-auto lg:mt-28 mt-16'>
                <img src={building} alt="" className='object-cover w-full rounded-xl md:h-[600px] border-4'/>
            </div>
        </div>

        <div className='grid grid-cols-2 w-[95%] mx-auto my-20 gap-10'>
            <div className='col-span-2 lg:col-span-1 flex items-center'>
                <div className='md:p-6'>
                    <p className='md:text-5xl text-3xl text-gray-700 font-bold md:leading-snug leading-snug'>A great story always starts with a great team</p>
                    <p className='mt-6 md:text-xl text-lg font-[Roboto] text-gray-700 md:leading-loose leading-loose'>
                        Sydani Technologies is a proud member company of Sydani Group. As a player in the Information Technology (IT) sector, 
                        we are dedicated to driving innovation, efficiency, and transformation across various industries. Our expertise and commitment 
                        position us as a trusted partner for businesses seeking to navigate the complex digital landscape and harness the power of technology 
                        for sustainable growth. 
                    </p>
                    
                </div>
            </div>
            <div className='col-span-2 lg:col-span-1'>
                <div className=''>
                    <img src={agree} alt="" className='object-cover w-full rounded-xl md:h-[600px] border-4'/>
                </div>
            </div>
        </div>

        <div className='relative w-[95%] mx-auto my-20'>
            <div className='lg:w-[70%]'>
                <img src={bonding} alt="" className='object-cover w-full rounded-xl md:h-[600px] border-4'/>
            </div>
            <div className='bg-white lg:w-[700px] min-h-[400px] lg:absolute bottom-[-60px] border shadow-xl md:rounded-2xl right-10 flex items-center'>
                <p className='mt-4 text-xl font-[Roboto] text-gray-700 leading-loose md:p-16 px-3 py-10'>
                    Our mission is to empower organizations by providing cutting-edge technological solutions that enhance productivity, streamline processes, 
                    and foster innovation. We are not just service providers; we are strategic partners who understand your unique challenges and tailor our solutions 
                    to meet your specific needs. 
                </p>
            </div>
        </div>

        <div className='lg:py-20 py-10 lg:mt-40'>
            <div>
                <div className='bg-blue-100 py-3 md:w-[250px] w-[200px] mx-auto rounded-full'>
                    <p className='text-center md:text-2xl text-lg font-[Inter] text-blue-700'>Our Leadership</p>
                </div>
                <p className='text-center md:text-5xl text-2xl w-[90%] mx-auto mt-10 font-semibold text-gray-800 font-[Roboto]'>Meet our Seasoned Team of Experts</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-[95%] mx-auto mt-20 mb-20'>
                <div className=''>
                    <div className=''>
                        <img src={GMP} alt="" className='object-cover w-full rounded-xl object-fill'/>
                    </div>
                    <p className='text-center font-bold md:text-3xl text-2xl mt-8'>Sidney Sampson</p>
                    <p className='text-gray-500 md:text-xl text-center mt-2'>Group Managing Patner</p>
                </div>
                <div className=''>
                    <div className=''>
                        <img src={head} alt="" className='object-cover w-full rounded-xl object-fill'/>
                    </div>
                    <p className='text-center font-bold md:text-3xl text-2xl mt-8'>Noble Chinyere Ajuonu</p>
                    <p className='text-gray-500 md:text-xl text-center mt-2'>Head, Sydani Technologies</p>

                </div>
                <div className=''>
                    <div className=''>
                        <img src={project} alt="" className='object-cover w-full rounded-xl object-fill'/>
                    </div>
                    <p className='text-center font-bold md:text-3xl text-2xl mt-8'>Adedayo Odupitan</p>
                    <p className='text-gray-500 md:text-xl text-center mt-2'>Business Development Lead</p>

                </div> 
            </div>
        </div>

        <div className='py-24 bg-[#ecf5ff]'>
            <div className='bg-blue-100 py-3 md:w-[250px] w-[200px] mx-auto rounded-full'>
                <p className='text-center md:text-2xl text-lg font-[Inter] text-blue-700'>Our Services</p>
            </div>

            <div className='grid grid-cols-6 gap-8 p-6 mt-10'>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 lg:h-[450px] h-[450px] rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-11 p-10'>
                    <div className='lg:h-20 lg:w-20 h-16 w-16 bg-blue-100 flex items-center pt-1 justify-center rounded-full'>
                        <span className='text-blue-600 lg:text-5xl text-4xl'><ion-icon name="code-sharp"></ion-icon></span>
                    </div>
                    <div className='mt-9'>
                        <p className='text-2xl text-gray-700 font-[Inter] font-semibold'>Software Development</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>We specialize in developing custom software solutions. From web applications to mobile apps and enterprise systems, our team of skilled developers leverages the latest technologies to deliver robust, scalable, and user-friendly software.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 lg:h-[450px] h-[460px] rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-11 p-10'>
                    <div className='lg:h-20 lg:w-20 h-16 w-16 bg-blue-100 flex items-center pt-1 justify-center rounded-full'>
                        <span className='text-blue-600 lg:text-5xl text-4xl'><ion-icon name="people"></ion-icon></span>
                    </div>
                    <div className='mt-9'>
                        <p className='text-2xl text-gray-700 font-[Inter] font-semibold'>IT Consulting</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>We help you make informed decisions about your technology investments. We provide expert guidance on IT strategy, infrastructure planning, system integration, and digital transformation, ensuring your IT initiatives are aligned with your business objectives.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 lg:h-[450px] h-[460px]  rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-11 p-10'>
                    <div className='lg:h-20 lg:w-20 h-16 w-16 bg-blue-100 flex items-center pt-1 justify-center rounded-full'>
                        <span className='text-blue-600 lg:text-5xl text-4xl'><ion-icon name="cog"></ion-icon></span>
                    </div>
                    <div className='mt-9'>
                        <p className='text-2xl text-gray-700 font-[Inter] font-semibold'>Cybersecurity Solutions</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>Our cybersecurity solutions encompass risk assessments, vulnerability management, and implementation of advanced security measures to safeguard your business against potential threats.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 lg:h-[450px] h-[460px]  rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-11 p-10'>
                    <div className='lg:h-20 lg:w-20 h-16 w-16 bg-blue-100 flex items-center pt-1 justify-center rounded-full'>
                        <span className='text-blue-600 lg:text-5xl text-4xl'><ion-icon name="cloud-upload"></ion-icon></span>
                    </div>
                    <div className='mt-9'>
                        <p className='text-2xl text-gray-700 font-[Inter] font-semibold'>Cloud Services</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>We offer a range of cloud services, including cloud migration, management, and optimization. Whether you are looking to move to the cloud, manage your existing cloud infrastructure, or optimize your cloud operations for cost efficiency and performance, we have you covered.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 lg:h-[450px] h-[470px] rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-11 p-10'>
                    <div className='lg:h-20 lg:w-20 h-16 w-16 bg-blue-100 flex items-center pt-1 justify-center rounded-full'>
                        <span className='text-blue-600 lg:text-5xl text-4xl'><ion-icon name="construct"></ion-icon></span>
                    </div>
                    <div className='mt-9'>
                        <p className='text-2xl text-gray-700 font-[Inter]'>IT Support and Managed Services</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>Our IT support and managed services ensure the smooth operation of your IT environment. We provide round-the-clock monitoring, maintenance, and support to minimize downtime and maximize productivity, allowing you to focus on your core business activities.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 lg:h-[450px] h-[470px] rounded-3xl shadow-lg bg-white hover-grow lg:p-11 p-10'>
                    <div className='lg:h-20 lg:w-20 h-16 w-16 bg-blue-100 flex items-center pt-1 justify-center rounded-full'>
                        <span className='text-blue-600 lg:text-5xl text-4xl'><ion-icon name="podium"></ion-icon></span>
                    </div>
                    <div className='mt-8'>
                        <p className='text-2xl text-gray-700 font-[Inter]'>Enterprise Resource Planning (ERP) Solutions</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>Streamline your business processes with our ERP solutions. We implement and customize ERP systems that integrate various functions such as finance, HR, supply chain, and customer relations, providing a unified platform to manage your operations efficiently.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}
