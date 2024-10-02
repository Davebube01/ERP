import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTopLink from '../ScrollTopLink'
import Faq from './Faq'
import dashboard from '../../assets/dashboard.png'
import picture1 from '../../assets/analysis1.jpg'
import picture2 from '../../assets/solution1.jpg'
import picture3 from '../../assets/developer.jpg'
import picture4 from '../../assets/dashboard2.jpg'
import picture5 from '../../assets/hello.jpg'
import picture6 from '../../assets/analysis2.jpg'
import picture7 from '../../assets/tech.jpg'
import picture8 from "../../assets/start.png"
import accounting from "../../assets/accounting.png"
import hr from "../../assets/HR.png"
import crm from "../../assets/CRM.png"
import travel from "../../assets/travel.png"
import inventory from "../../assets/inventory.png"
import workflow from "../../assets/workflow.png"
import education from "../../assets/education.jpg"
import industry from "../../assets/industry.jpg"
import health from "../../assets/health.jpg"

export default function Homepage() {
    const [showFirstDiv, setShowFirstDiv] = useState(true)
    const [showSecondDiv, setShowSecondDiv] = useState(false)
    const [showThirdDiv, setShowThirdDiv] = useState(false)

    const handleFirstDiv = () => {
        setShowFirstDiv(true);
        setShowSecondDiv(false);
        setShowThirdDiv(false);
    }

    const handleSecondDiv = () => {
        setShowFirstDiv(false);
        setShowSecondDiv(true);
        setShowThirdDiv(false);
    }

    const handleThirdDiv = () => {
        setShowFirstDiv(false);
        setShowSecondDiv(false);
        setShowThirdDiv(true);
    }

    const faqData = [
        {
        question: "Is the software customizable for specific business needs? ",
        answer: "Yes, our solution is fully customizable, allowing you to modify modules, workflows, and processes to fit your unique business requirements."
        },
        {
        question: "What support options are available for new users?",
        answer: "We offer 24/7 customer support, onboarding assistance, and detailed user documentation to help you get started quickly and effectively."
        },
        {
        question: "How does the solution ensure data security?",
        answer: "Our cloud-based solution comes with advanced encryption, regular backups, and compliance with international data protection standards to ensure your data is secure."
        },
        {
        question: "Can the solution scale with my growing business?",
        answer: "Absolutely! The system is designed to scale seamlessly, accommodating increased users, locations, and operations as your business expands."
        }
    ]

  return (
    <>
    <section className='sm:mt-0 mt-20 relative'>
        <div className='md:h-[900px] lg:h-[977px]  hero relative main-bg'>
            <div className='xl:w-[60%] lg:w-[70%] md:w-[85%] w-[80%] w-full mx-auto md:pt-28 pt-20 text-container'>
                <p className='md:text-[50px] sm:text-[40px] text-[35px] text-center text-white font-bold font-[Roboto] bg-text-1'>Transform your business with SydaSuite</p>
                
            </div>
            <div className='lg:w-[50%] md:w-[55%] w-[90%] mx-auto mt-6 bg-text-2'>
                <p className='text-white text-lg text-center font-[Roboto]'>The complete entreprise software solution for growing businesses .</p>
                </div>
            <div className='mx-auto mt-10 gap-4 flex items-center justify-center button-div md:w-full w-[80%] sm:flex hidden' >
                <div >
                    <div className='hover-bg px-12 py-4 rounded-full text-lg border border-transparent'>
                        <Link to="/book-demo">
                            <span className="relative z-10 font-semibold font-[Inter]">Request Demo</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="hover-slide-bg relative overflow-hidden border border-white border-2 px-12 py-4 rounded-full text-white sm:mt-0 ">
                        <Link to="/solutions">
                            <span className="relative z-10 font-semibold font-[Inter]">Learn More</span>
                        </Link>
                    </div>
                </div>
                
            </div>

            {/* for buttons mobile */}
            <div className='mx-auto mt-10 gap-4 button-div md:w-full w-[100%] sm:hidden block' >
                <div className='w-[60%] mx-auto'>
                    <Link to='/book-demo'>
                        <button className='hover-bg px-12 md:py-4 py-3 rounded-full md:text-lg border border-transparent w-full'>
                            <span className="relative z-10 font-[Inter]">Request Demo</span>
                        </button>
                    </Link>
                </div>
                <div className='w-[60%] mx-auto'>
                    <Link to='/solutions'>
                        <button className="hover-slide-bg relative overflow-hidden border border-white px-12 md:py-4 py-3 rounded-full text-white mt-4 w-full">
                            <span className="relative z-10 font-[Inter]">Learn More</span>
                        </button>
                    </Link>
                </div>
                
            </div>

            {/* floating divs */}
            <div className='rev-div w-[180px] bg-white rounded-lg p-5 absolute left-4 top-[45%] lg:flex hidden'>
                <div className='bg-orange-500 h-[50px] w-[40%] rounded-lg flex justify-center'>
                    <span className='text-white text-4xl mt-2'>
                    <ion-icon name="airplane-outline"></ion-icon>
                    </span>
                </div>
                <div className='ml-2'>
                    <p className='font-bold'>$2,2234</p>
                    <p>Revenue</p>
                </div>
            </div>
            <div className='rev-div w-[180px] bg-white rounded-lg p-5 absolute right-4 top-[49%] lg:flex hidden'>
                <div className='bg-teal-500 h-[50px] w-[40%] rounded-lg text-white flex justify-center'>
                    <span className='text-white text-4xl mt-2'>
                    <ion-icon name="navigate-outline"></ion-icon>
                    </span>
                </div>
                <div className='ml-2'>
                    <p className='font-bold'>$3,234</p>
                    <p>Income</p>
                </div>
            </div>
            <div className='star-div absolute top-[27%] lg:flex hidden right-52'>
                <span className='text-white text-6xl mt-2'>
                    <ion-icon name="sparkles-sharp" className=""></ion-icon>
                </span>
            </div>
            
            <div className='dash w-[90%] mx-auto lg:absolute inset-0  lg:top-[60%] lg:mt-0 mt-10 '>
                <img src={dashboard} alt="" className='object-cover md:object-fill lg:h-[700px] p-5  bg-white w-full sm:rounded-2xl md:rounded-2xl z-10 shadow-xl rounded-xl'/>
            </div>
        </div>

        {/* seperator */}
        <div className='seperator '></div>

        {/* what we do div */}
        <div className='min-h-[800px] md:pt-36 pt-20'>
            <div className='text-container'>
                <h1 className='text-center title mx-auto py-3 rounded-3xl font-bold text-blue-700 bg-text-3 font-[Roboto]'>WHY SYDASUITE</h1>
            </div>

            <div className='mt-6 md:w-[60%] w-[90%] mx-auto text-container'>
                <p className='bg-text-4 text-gray-700 text-center text-3xl font-[Inter]'>Enjoy the power of automation without compromising quality</p>
            </div>

            <div className='grid grid-cols-4 gap-8 w-[95%] mx-auto my-20'>
                <div className='sm:h-[360px] bg-green-100 rounded-2xl sm:p-10 p-10 card-div sm:col-span-2 lg:col-span-1 col-span-4'>
                    <div className='h-20 bg-white w-20 mx-auto rounded-full flex justify-center items-center'>
                        <span className='text-green-500 text-5xl'>
                            <ion-icon name="briefcase-outline"></ion-icon>
                        </span>
                    </div>
                    <p className='text-center text-gray-600 font-bold text-2xl mt-8 font-[Inter]'>Comprehensive Modules</p>
                    <p className='text-center text-gray-500 mt-5 font-[Roboto]'>Manage accounting, HR, inventory, CRM, and more — all in one platform</p>
                </div>
                <div className='sm:h-[360px] bg-purple-100 rounded-2xl sm:p-10 p-10 card-div sm:col-span-2 lg:col-span-1 col-span-4'>
                    <div className='h-20 bg-white w-20 mx-auto rounded-full flex justify-center items-center'>
                        <span className='text-purple-500 text-5xl'>
                            <ion-icon name="hammer-outline"></ion-icon>
                        </span>
                    </div>
                    <p className='text-center text-gray-600 font-bold text-2xl mt-8 font-[Inter]'>Customizable & Scalable</p>
                    <p className='text-center text-gray-500 mt-5 font-[Roboto]'>Tailor the system to your unique business needs as you grow</p>
                </div>
                <div className='sm:h-[360px] bg-orange-100 rounded-2xl sm:p-10 p-10 card-div sm:col-span-2 lg:col-span-1 col-span-4'>
                    <div className='h-20 bg-white w-20 mx-auto rounded-full flex justify-center items-center'>
                        <span className='text-orange-500 text-5xl'>
                            <ion-icon name="cash-outline"></ion-icon>
                        </span>
                    </div>
                    <p className='text-center text-gray-600 font-bold text-2xl mt-8 font-[Inter]'>Cost-Effective</p>
                    <p className='text-center text-gray-500 mt-5 font-[Roboto]'>An affordable, open-source alternative with enterprise-level features</p>
                </div>
                <div className='sm:h-[360px] bg-teal-100 rounded-2xl p-10 card-div sm:col-span-2 lg:col-span-1 col-span-4'>
                    <div className='h-20 bg-white w-20 mx-auto rounded-full flex justify-center items-center'>
                    <   span className='text-teal-500 text-5xl'>
                            <ion-icon name="flash-outline"></ion-icon>
                        </span>
                    </div>
                    <p className='text-center text-gray-600 font-bold text-2xl mt-8 font-[Inter]'>Real-Time Insights</p>
                    <p className='text-center text-gray-500 mt-5 font-[Roboto]'>Gain actionable insights with robust reporting and analytic capabilities</p>
                </div>
            </div>
        </div>


        <div className='min-h-[690px] mt-16 mb-10'>
            <div className='lg:grid lg:grid-cols-5 xl:grid-cols-5'>
                <div className='lg:col-span-3 xl:col-span-3 relative sm:flex jusify-center back-g max-w-[650px] min-h-[659px] mx-auto lg:mx-0'>
                    <div className='sm:w-[380px] sm:absolute top-[0%] left-4 pic-1'>
                        <img src={picture1} alt="" className='object-cover sm:w-full w-[90%] mx-auto shadow-xl rounded-3xl'/>
                    </div>
                    <div className='sm:w-[300px] sm:absolute z-10 left-[46%] bottom-[15%] pic-2'>
                        <img src={picture2} alt="" className='object-cover shadow-2xl rounded-xl sm:w-full w-[90%] mx-auto mt-6'/>
                    </div>
                    <div className='sm:w-[350px] sm:absolute z-10 left-[50%] bottom-[65%] pic-3'>
                        <img src={picture3} alt=""className='object-cover shadow-2xl rounded-xl sm:w-full w-[90%] mx-auto mt-6' />
                    </div>
                </div>

                {/* for sm and above */}
                <div className='col-span-5 lg:col-span-2 xl:col-span-2 lg:ml-2 ml-6 lg:mt-2 mt-10 z-20 '>
                    <div className='w-[60%] text-container'>
                        <h1 className='text-center title py-3 rounded-3xl font-bold text-purple-500 bg-text-5 font-[Roboto]'>OVER 150K CLIENTS</h1>
                    </div>
                    <div className='mt-10 lg:w-[80%] w-[70%] text-container'> 
                        <p className='text-4xl text-gray-700 font-bold leading-10 py-1 bg-text-6 font-[Inter]'>Experience a New Level of Efficiency and Growth</p>
                    </div>
                    <div className='mt-6 w-[98%] text-container'>
                        <p className='leading-8 text-lg text-gray-500 bg-text-7 font-[Roboto]'>Automate, scale, and optimize your operations with ease and guaranteed results.</p>
                    </div>

                    <div className='flex mt-6 bg-text-8'>
                        <div className='w-8 h-8 rounded bg-blue-500 flex justify-center'>
                            <span className='text-white text-3xl '>
                                <ion-icon name="checkmark-sharp"></ion-icon>
                            </span>
                        </div>
                        <div className='ml-6'> 
                            <p className='text-2xl text-gray-700 font-semibold font-[Inter]'>Seamless Integration</p>
                            <p className='text-gray-500 w-[95%] mt-3 font-[Roboto]'>Integrates effortlessly with third-party apps to streamline workflows.</p>
                        </div>
                    </div>
                    <div className='flex mt-6 bg-text-9'>
                        <div className='w-8 h-8 bg-green-500 flex justify-center'>
                            <span className='text-white text-3xl '>
                                <ion-icon name="checkmark-sharp"></ion-icon>
                            </span>
                        </div>
                        <div className='ml-6'>
                            <p className='text-2xl text-gray-700 font-semibold font-[Inter]'>Cloud-Based & Secure</p>
                            <p className='text-gray-500 w-[95%] mt-3 font-[Roboto]'>Access your business data from anywhere with top-level encryption.</p>
                        </div>
                    </div>

                    {/* <div className='mt-8'>
                        <button className='px-12 py-3 rounded-full text-lg border bg-blue-500  text-white'>
                            <span  className='text-lg font-semibold'>Schedule a Personalized Demo</span>
                        </button>
                    </div> */}
                </div>

                
            </div>
        </div>

        

        <div className='my-10 service-container pt-20'>
            <div className='text-container'>
                <h1 className='text-center mx-auto text-gray-700 text-4xl font-bold bg-text-10 font-[Inter]'>Get all your business needs in one suite</h1>
            </div>

            {/* <div className='mt-6 lg:w-[60%] w-[90%] mx-auto text-container'>
                <p className='bg-text-11 text-gray-700 text-center text-lg font-[Roboto]'>Get all your business needs in one suite</p>
            </div> */}

            <div className='grid grid-cols-6 gap-8 p-6 mt-10'>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 h-96 rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-16 px-10 py-16'>
                    <div className='h-20 w-20'>
                        <img src={accounting} alt="" className=''/>
                        
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl text-gray-700 font-[Inter] '>Accounting</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>Streamline your financial operations with automated invoicing, expense tracking, and real-time reporting—simplifying complex accounting processes.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 h-96 rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-16 px-10 py-16'>
                    <div className='h-20 w-20'>
                        <img src={hr} alt="" className=''/>
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl text-gray-700 font-[Inter]'>HR/Payroll</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>Manage employee data, attendance, payroll, and benefits seamlessly with our all-in-one HR tool, ensuring compliance and accuracy.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 h-96  rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-16 px-10 py-16'>
                    <div className='h-20 w-20'>
                        <img src={crm} alt="" className=''/>
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl text-gray-700 font-[Inter]'>CRM</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>Boost sales and customer satisfaction with powerful lead management, real-time tracking, and automated follow-ups in one CRM system.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 h-96  rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-16 px-10 py-16'>
                    <div className='h-20 w-20 '>
                        <img src={travel} alt="" className=''/>
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl text-gray-700 font-[Inter]'>Travel Management</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'> Effortlessly manage business trips, approvals, expenses, and bookings with a complete travel solution for your team’s journeys.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 h-96  rounded-3xl shadow-lg bg-white transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[1.03] lg:p-16 px-10 py-16'>
                    <div className='h-20 w-20'>
                    <img src={inventory} alt="" />
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl text-gray-700 font-[Inter]'>Inventory</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>Stay in control of your stock with real-time updates, automated reorder points, and full traceability of every item across locations.</p>
                    </div>
                </div>
                <div className='service-div lg:col-span-2 sm:col-span-3 col-span-6 h-96  rounded-3xl shadow-lg bg-white hover-grow lg:p-16 px-10 py-16'>
                    <div className='h-20 w-20'>
                        <img src={workflow} alt="" />
                    </div>
                    <div className='mt-5'>
                        <p className='text-2xl text-gray-700 font-[Inter]'>Custom Workflows</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-gray-500 font-[Roboto]'>Design and automate tailored workflows for your unique business processes, enhancing efficiency and minimizing manual intervention.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-20'>
            <div className='grid grid-cols-2 p-6'>
                <div className='col-span-2 lg:col-span-1'>
                    <div className='text-container'>
                        <p className='text-xl text-yellow-500 text-center lg:text-left bg-text-12 font-semibold font-[Roboto]'>SHAPING FUTURES</p>
                    </div>
                    <div className='mt-6 lg:w-[90%] xl:w-[80%] sm:w-[614px] mx-auto lg:mx-0 text-container'>
                        <p className='md:text-4xl text-3xl text-gray-700 font-semibold text-center lg:text-left bg-text-13 font-[Inter]'>Built with strength and stretch</p>
                    </div>
                    <div className='mt-6 lg:w-[90%] xl:w-[80%] sm:w-[500px] mx-auto lg:mx-0 text-container'>
                        <p className='text-lg text-center lg:text-left text-gray-500 bg-text-14 font-[Roboto]'> Take control of your future and drive your success forward with our expert guidance.</p>
                    </div>

                    <div className='lg:block sm:flex sm:justify-evenly lg:w-full md:w-[90%] mx-auto '>
                        <div className='flex items-center justify center  shadow rounded-[40px] mt-6 w-[300px] sm:mx-0 mx-auto info-div'>
                            <div className='h-12 w-12 bg-blue-600 rounded-full text-white flex justify-center items-center text-2xl my-1'>1</div>
                            <div className='pl-6'>
                                <p className='lg:text-xl text-lg text-gray-700 font-semibold font-[Inter]'>Powered by ERPNext</p>
                            </div>
                        </div>
                        <div className='flex items-center justify center  shadow-lg rounded-[40px] mt-6 w-[370px] sm:mx-0 mx-auto info-div'>
                            <div className='h-12 w-12 bg-blue-600 rounded-full text-white flex justify-center items-center text-2xl my-1'>2</div>
                            <div className='pl-6'>
                                <p className='lg:text-xl text-lg text-gray-700 font-semibold font-[Inter]'>Used by 10,000+ Companies</p>
                            </div>
                        </div>
                        <div className='flex items-center justify center  shadow-lg rounded-[40px] mt-6 w-[290px] lg:flex hidden info-div'>
                            <div className='h-12 w-12 bg-blue-600 rounded-full text-white flex justify-center items-center text-2xl my-1'>3</div>
                            <div className='pl-6'>
                                <p className='lg:text-xl text-lg text-gray-700 font-semibold font-[Inter]'>Always Evolving</p>
                            </div>
                        </div>
                        
                    </div>
                        <div className='flex items-center justify center  shadow-lg rounded-[40px] mt-6 w-[300px] lg:hidden flex mx-auto'>
                            <div className='h-12 w-12 bg-blue-600 rounded-full text-white flex justify-center items-center text-2xl my-2'>3</div>
                            <div className='pl-6'>
                                <p className='text-lg text-gray-700 font-semibold font-[Inter]'>Always Evolving</p>
                            </div>
                        </div>
                </div>


                <div className='back-g col-span-2 lg:col-span-1 lg:mt-0 md:pt-20 relative min-h-[550px]'>
                    <div className='lg:relative md:absolute lg:left-0 left-[20%] mt-10 mr:10 lg:mt-0 flex  md:justify-normal'>
                        <img src={picture4} alt="" className='object-cover rounded-3xl lg:w-[80%] w-full md:h-[442px] md:w-full lg:h-auto md:mx-auto border-2 border-gray-300 sm:ml-10'/>
                    </div>
                    <div className='md:absolute lg:top-[65%] right-[35%] pic-4 mt-10 md:mt-0'>
                        <img src={picture6} alt="" className='object-cover md:w-[60%] rounded-xl'/>
                    </div>
                    <div className='md:absolute sm:bottom-[80%] right-2 pic-5 md:pr-8 mt-10 md:mt-0'>
                        <img src={picture5} alt="" className='object-cover w-full md:w-[52%] rounded-xl float-right '/>
                    </div>
                </div>
            </div>
        </div>


        {/* For all teams */}
        <div className='md:py-20 md:mt-10 pt-20 pb-10  spacer layer'>
            <div>
                <h1 className='text-center title mx-auto py-3 rounded-3xl font-bold text-blue-700 text-bg-15 font-[Roboto]'>FOR TEAMS</h1>
            </div>
            <div className='lg:w-[50%] w-[90%] mx-auto mt-8 text-container'>
                <p className='md:text-5xl text-3xl text-center font-semibold text-gray-800 text-bg-16 font-[Inter]'>Tailored Solutions for Diverse Industries</p>
            </div>

            {/* multiple divs */}
            <div className='lg:w-[90%] mx-auto'>
                {/* divs */}
                <div className='lg:block hidden'>
                    <div className={`${showFirstDiv ? 'block' : 'hidden'} rounded-[40px] min-h-[500px] bg-white mt-16`} >
                        <div className='grid grid-cols-2 p-16'>
                            <div className='pt-20 w-[80%] lg:col-span-1 col-span-2'>
                                <div className='h-24 w-24 rounded-2xl bg-teal-500 flex justify-center items-center'>
                                    <span className='text-white md:text-7xl text-2xl font-semibold mt-1'><ion-icon name="settings"></ion-icon></span>
                                </div>
                                <div>
                                    <p className='text-[40px] mt-10 font-semibold font-[Inter]'>Manufacturing & Retail</p>
                                    <p className='mt-5 text-lg font-[Roboto]'>Optimize production, inventory, and order management. Perfect for manufacturers, wholesalers, distributors, and retail businesses managing e-commerce, POS, and logistics.</p>
                                </div>

                            </div>
                            <div className=''>
                                <img src={industry} alt="" className='object-cover w-full md:w-full h-[490px] rounded-xl float-right ' />
                            </div>
                        </div>
                        
                    </div>
                    <div className={`${showSecondDiv ? 'block' : 'hidden'} rounded-[40px] min-h-[500px] bg-white mt-16`} id='secondDiv'>
                        <div className='grid grid-cols-2 p-16'>
                            <div className='pt-20 w-[80%] lg:col-span-1 col-span-2'>
                                <div className='h-24 w-24 rounded-2xl bg-yellow-500 flex justify-center items-center'>
                                    <span className='text-white md:text-7xl text-2xl font-semibold mt-1'><ion-icon name="settings"></ion-icon></span>
                                </div>
                                <div>
                                    <p className='text-[40px] mt-10 font-semibold font-[Inter]'>Healthcare & Pharmaceuticals</p>
                                    <p className='mt-5 text-lg font-[Roboto]'>Streamline patient care, medical inventory, and compliance management. Designed for hospitals, clinics, and pharmaceutical firms looking to enhance efficiency.</p>
                                </div>

                            </div>
                            <div className=''>
                                <img src={health} alt="" className='object-cover w-full md:w-full h-[490px] rounded-xl float-right ' />
                            </div>
                        </div>
                        
                    </div>
                    <div className={`${showThirdDiv ? 'block' : 'hidden'} rounded-[40px] min-h-[500px] bg-white mt-16`} id='thirdDiv'>
                        <div className='grid grid-cols-2 p-16'>
                            <div className='pt-20 w-[80%] lg:col-span-1 col-span-2'>
                                <div className='h-24 w-24 rounded-2xl bg-blue-500 flex justify-center items-center'>
                                    <span className='text-white md:text-7xl text-2xl font-semibold mt-1'><ion-icon name="school"></ion-icon></span>
                                </div>
                                <div>
                                    <p className='text-[40px] mt-10 font-semibold font-[Inter]'>Professional Services & Education</p>
                                    <p className='mt-5 text-lg font-[Roboto]'>Tailored solutions for project management, client communications, invoicing, and student management, ideal for consulting firms, legal services, and educational institutions.</p>
                                </div>

                            </div>
                            <div className=''>
                                <img src={education} alt="" className='object-cover w-full md:w-full h-[490px] rounded-xl float-right ' />
                            </div>
                        </div>
                    </div>
                </div>
                
                
                {/* togglers */}
                <div className='mt-20 grid grid-cols-3'>
                    <div className={`${showFirstDiv ? 'md:border-t-4 md:border-blue-800 border-b-2 md:border-gray-400 border-gray-300 md:pt-[14px] pb-[15px] md:border-b-transparent': 'md:border-t-2 md:border-gray-400 md:pt-[16px] pb-[16px] opacity-30 border-b-2 border-transparent md:border-b-transparent transition-all duration-300 ease-in-out'}  flex justify-center items-center md:col-span-1 col-span-3`}>
                        <button className='flex items-center' onClick={handleFirstDiv} id='firstDiv'>
                            <div className='md:h-12 md:w-12 w-9 h-9 rounded-xl bg-teal-500 flex justify-center items-center'>
                                <span className='text-white md:text-4xl text-2xl font-semibold mt-1 mx-2'><ion-icon name="settings-outline"></ion-icon></span>
                            </div>
                            <p className='pl-5 text-xl font-semibold font-[Roboto] md:w-[60%] lg:w-full'>Manufacturing & Retail</p>
                        </button>
                    </div>
                    <div className={`${showSecondDiv ? 'md:border-t-4 md:border-blue-800 border-b-2 md:border-gray-400 border-gray-300 md:pt-[14px] py-[16px] md:border-b-transparent': 'md:border-t-2 md:border-gray-400 md:pt-[16px] py-[17px] opacity-30  border-transparent md:border-b-transparent'} flex justify-center items-center md:col-span-1 col-span-3 transition-all duration-300 ease-in-out`}>
                        <button className='flex items-center' onClick={handleSecondDiv}>
                            <div className='md:h-12 md:w-12 w-9 h-9 rounded-xl bg-yellow-500 flex justify-center items-center'>
                                <span className='text-white md:text-4xl text-2xl font-semibold mt-1 mx-2'><ion-icon name="medkit-outline"></ion-icon></span>
                            </div>
                            <p className='pl-5 text-xl font-semibold font-[Roboto] md:w-[60%] lg:w-full'>Healthcare & Pharmaceuticals</p>
                        </button>
                    </div>
                    <div className={`${showThirdDiv ? 'md:border-t-4 md:border-blue-800 border-b-2 md:border-gray-400 border-gray-300 md:pt-[14px] py-[17px] md:border-b-transparent': 'md:border-t-2 md:border-gray-400 md:pt-[16px] py-[18px] opacity-30 border-b-2 border-transparent md:border-b-transparent'} flex justify-center items-center md:col-span-1 col-span-3 transition-all duration-300 ease-in-out`}>
                        <button className='flex items-center' onClick={handleThirdDiv}>
                            <div className='md:h-12 md:w-12 w-9 h-9 rounded-xl bg-blue-500 flex justify-center items-center'>
                                <span className='text-white md:text-4xl text-2xl font-semibold mt-1 mx-2'><ion-icon name="school-outline"></ion-icon></span>
                            </div>
                            <p className='pl-5 text-xl font-semibold font-[Roboto] md:w-[60%] lg:w-full'>Professional Services & Education</p>
                        </button>
                    </div>
                </div>

                <div className='lg:hidden block'>
                    <div className={`${showFirstDiv ? 'block' : 'hidden'} rounded-[40px] min-h-[500px] bg-white mt-16 pb-5`} >
                        <div className='md:pt-20 pt-10 px-10'>
                            <div className='md:h-20 md:w-20 h-16 w-16 rounded-2xl bg-teal-500 flex justify-center items-center'>
                                <span className='text-white md:text-7xl text-4xl font-semibold mt-1'><ion-icon name="settings"></ion-icon></span>
                            </div>
                            <div>
                                <p className='md:text-[35px] text-2xl mt-7 font-semibold font-[Inter]'>Manufacturing & Retail</p>
                                <p className='mt-5 text-base font-[Roboto]'>Optimize production, inventory, and order management. Perfect for manufacturers, wholesalers, distributors, and retail businesses managing e-commerce, POS, and logistics.</p>
                            </div>
                        </div>

                        <div className=''>
                            <img src={industry} alt="" className='object-cover mx-auto my-10 h-[300px] rounded-xl w-[85%]' />
                        </div>
            
                    
                    </div>
                    <div className={`${showSecondDiv ? 'block' : 'hidden'} rounded-[40px] min-h-[500px] bg-white mt-16 pb-5`} >
                        <div className='md:pt-20 pt-10 px-10'>
                            <div className='md:h-20 md:w-20 h-16 w-16 rounded-2xl bg-yellow-600 flex justify-center items-center'>
                                <span className='text-white md:text-7xl text-4xl font-semibold mt-1'><ion-icon name="medkit"></ion-icon></span>
                            </div>
                            <div>
                                <p className='md:text-[35px] text-2xl mt-7 font-semibold font-[Inter]'>Healthcare & Pharmaceuticals</p>
                                <p className='mt-5 text-base font-[Roboto]'>Streamline patient care, medical inventory, and compliance management. Designed for hospitals, clinics, and pharmaceutical firms looking to enhance efficiency.</p>
                            </div>
                        </div>

                        <div className=''>
                            <img src={health} alt="" className='object-cover mx-auto my-10 h-[300px] rounded-xl w-[85%]' />
                        </div>

                        
                    </div>
                    <div className={`${showThirdDiv ? 'block' : 'hidden'} rounded-[40px] min-h-[500px] bg-white mt-16 pb-5`} >
                        <div className='md:pt-20 pt-10 px-10'>
                            <div className='md:h-20 md:w-20 h-16 w-16 rounded-2xl bg-blue-500 flex justify-center items-center'>
                                <span className='text-white md:text-7xl text-4xl font-semibold mt-1'><ion-icon name="school"></ion-icon></span>
                            </div>
                            <div>
                                <p className='md:text-[35px] text-2xl mt-7 font-semibold font-[Inter]'>Professional Services & Education</p>
                                <p className='mt-5 text-base font-[Roboto]'>Tailored solutions for project management, client communications, invoicing, and student management, ideal for consulting firms, legal services, and educational institutions.</p>
                            </div>
                        </div>

                        <div className=''>
                            <img src={education} alt="" className='object-cover mx-auto my-10 h-[300px] rounded-xl w-[85%]' />
                        </div>

                    </div>
                </div>

                <div className='mt-20 mb-16 flex justify-center'>
                    <button className='text-white bg-blue-600 px-12 py-4 rounded-full text-xl hover:bg-blue-700 font-[Inter]'>
                        Get started
                    </button>
                </div>

                
            </div>
        </div>


        {/* For faqs */}
        <div className='pb-10 md:pt-10 layer2 spacer lg:min-h-[770px]'>
            {/* <div className=' text-container mb-10 py-2'> 
                <p className='text-5xl text-gray-700 font-bold leading-10 py-1 text-bg-17 font-[Inter] text-center'>Frequently asked questions</p>
            </div> */}
            <div className='lg:grid grid-cols-2'>
                <div className='md:col-span-1 col-span-2 relative lg:block hidden pic'>
                    <div className='w-[90%] mx-auto mt-8'>
                        <img src={picture7} alt="" className='object-cover sm:w-full shadow-xl rounded-3xl h-[650px]' />
                    </div>
                </div>
                
                <div className='flex items-center'>
                    <div className='lg:col-span-1 col-span-2 md:ml-10 w-[92%] lg:mx-0 mx-auto mt-4'>
                        <div className=' lg:w-[500px] w-[80%] text-container'> 
                            <p className='text-[45px] text-gray-700 font-bold leading-10 py-1 text-bg-17 font-[Inter]'>Frequently asked questions</p>
                        </div>
                        <div className='mt-5'>
                            <div className='faq'>
                            {faqData.map((item, index) => {
                                return <Faq 
                                            key={index} 
                                            question={item.question} 
                                            answer={item.answer} 
                                            isInitiallyOpen={index === 0}
                                            />
                            })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-1 col-span-2 relative block lg:hidden mt-10'>
                    <div className='w-[90%] mx-auto '>
                        <img src={picture7} alt="" className='object-cover sm:w-full shadow-xl rounded-3xl h-96 ' />
                    </div>
                </div>
            </div>
        </div>
        
        {/* contact us */}
        <div className='my-20 relative contact'>
            <div className='relative py-12 '>
                <div className='w-[90%] mx-auto bg-blue-600 lg:h-[550px] h-[480px] rounded-lg py-32 '>
                    <div className='lg:w-[50%] w-[90%] mx-auto'>
                        <p className='text-center text-white font-semibold md:text-5xl text-3xl font-[Inter]'>Experience our product first-hand</p>
                    </div>
                    <div className="lg:w-[50%] w-[90%] mx-auto mt-10">
                        <p className="text-center text-white md:text-xl text-lg font-[Roboto]">Discover how SydaSuite can transform your business. </p>
                    </div>
                    <div className='flex justify-center lg:mt-20 mt-10'>
                        <button className='bg-white px-10 py-4 rounded-lg text-blue-600 text-xl font-[Roboto]'>
                            <ScrollToTopLink to="/book-demo">
                                Book a Demo
                            </ScrollToTopLink>
                        </button>
                    </div>
                    
                </div>
                <div className='border-[30px] md:border-[40px] rounded-full border-white md:h-40 md:w-40 h-28 w-28 absolute top-0 left-0'></div>   
            </div>
            <div className='w-[90%] mx-auto h-[480px] rounded-lg py-28 z-[-10] absolute top-[10%] right-[3%] backing' >

            </div>
        </div>
    </section>
    </>
  )
}
