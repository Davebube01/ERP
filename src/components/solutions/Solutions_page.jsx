import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ScrollToTopLink from '../ScrollTopLink'
import education from "../../assets/educationvector.jpg"
import accounting from "../../assets/accountingvector.jpg"
import hr from "../../assets/hrvector.jpg"
import crm from "../../assets/crmvector.jpg"
import inventory from "../../assets/inventoryvector.jpg"
import health from "../../assets/healthvector.jpg"

export default function Solutions_page() {
    const [showEducation, setShowEducation] = useState(true)
    const [showHealth, setShowHealth] = useState(false)

    const handleEducation = () => {
        setShowEducation(true);
        setShowHealth(false)
    }

    const handleHealth = () => {
        setShowEducation(false);
        setShowHealth(true)
    }


  return (
    <>
        <div className='lg:h-[700px] h-[470px] solution-bg bg-[#ecf5ff] lg:pt-52 pt-28'>
            <p className='md:text-7xl text-4xl text-center font-semibold text-gray-800 font-[Inter]'>Our Solution</p>
            <p className='lg:w-[60%] w-[95%] mx-auto md:text-xl text-center mt-10 font-[Roboto] text-gray-700'>
            We offer a full suite of features designed to streamline operations, improve efficiency, and provide deep insights. Whether you're managing a business, an educational institution, or a healthcare facility, SydaSuite has you covered
            </p>
            <div className='flex items-center justify-center mt-10'>
                <button className='text-xl text-white py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out'>
                    View our features
                </button>
            </div>
        </div>
        <div className='lg:mt-10 '>
            <p className='text-center md:text-2xl text-lg font-semibold font-[Inter] text-gray-700'>We meet your core business needs</p>
            <div className='grid grid-cols-2 md:my-20 my-10'>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <img src={accounting} alt="" className='object-cover w-full rounded-xl object-fill lg:h-[650px] h-[380px] md:h-[550px] md:w-[95%] mx-auto'/>
                </div>
                <div className='lg:flex items-center col-span-2 lg:col-span-1 lg:mt-0 mt-10'>
                    <div className='lg:w-[80%] w-[90%] lg:mx-auto ml-4'>
                        <p className='md:text-5xl text-3xl font-semibold text-gray-700 font-[Inter]'>Accounting & Financial Management</p>
                        <p className='md:text-xl text-base font-[Roboto] text-gray-700 md:mt-8 mt-5 border-b-2 pb-5'>Gain full control of your financials with accurate, real-time reporting. From automated invoicing to tax compliance, our solution simplifies financial management.</p>
                        <ul className='font-[Roboto] text-gray-500 md:text-xl text-lg mt-6'>
                            <div className='flex px-2'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='md:font-semibold font-medium'>Automated Invoicing:</span> Send and track invoices with minimal effort.</li>
                            </div>
                            <div className='flex px-2 mt-4'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='md:font-semibold font-medium'>Expense Tracking:</span> Manage budgets and control expenses with precision.</li>
                            </div>
                            <div className='flex px-2 mt-4'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='md:font-semibold font-medium'>Multi-Currency Support:</span> Ideal for global businesses with multi-currency transactions.</li>
                            </div>
                            <div className="flex px-2 mt-4">
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='md:font-semibold font-medium'>Financial Reporting:</span> Generate customized financial reports, balance sheets, and profit-loss statements with just a click.</li>
                            </div>
                        </ul>
                    </div>
                </div>
                
            </div>

            <div className='grid grid-cols-2 my-20'>
                <div className='lg:flex items-center col-span-2 lg:col-span-1 lg:mt-0 mt-10'>
                    <div className='lg:w-[80%] w-[90%] lg:mx-auto ml-4'>
                        <p className='md:text-5xl text-3xl font-semibold text-gray-700 font-[Inter]'>Human Resources & Payroll</p>
                        <p className='md:text-xl text-base font-[Roboto] text-gray-700 mt-5 border-b-2 pb-5'>Simplify employee management, from recruitment to payroll. Our HR module ensures you keep track of everything, from performance to compliance.</p>
                        <ul className='font-[Roboto] text-gray-500 md:text-xl text-lg mt-6 '>
                            <div className='flex px-2'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Payroll Automation:</span> Automatically calculate salaries, deductions, and taxes.</li>
                            </div>
                            <div className='flex px-2 mt-4'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Employee Attendance:</span> Track hours worked, leave days, and attendance with ease.</li>
                            </div>
                            <div className='flex px-2 mt-4'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Performance Reviews:</span> Schedule and manage performance reviews, tracking KPIs for employee growth.</li>
                            </div>
                        </ul>
                    </div>
                </div>
                
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <img src={hr} alt="" className='object-cover w-full rounded-xl object-fill'/>
                </div>
            </div>

            <div className='grid grid-cols-2 my-20'>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <img src={crm} alt="" className='object-cover w-full rounded-xl object-fill'/>
                </div>
                <div className='lg:flex items-center col-span-2 lg:col-span-1 lg:mt-0 mt-10'>
                    <div className='lg:w-[80%] w-[90%] lg:mx-auto ml-4'>
                        <p className='md:text-5xl text-3xl font-semibold text-gray-700 font-[Inter]'>Customer Relationship Management (CRM)</p>
                        <p className='md:text-xl text-base font-[Roboto] text-gray-700 mt-5 border-b-2 pb-5'>Strengthen customer relationships and close deals faster. From lead generation to after-sales support, our CRM module ensures smooth customer interactions.</p>
                        <ul className='font-[Roboto] text-gray-500 md:text-xl text-lg mt-6'>
                            <div className='flex px-2'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Lead Management:</span> Track and manage leads through the entire sales funnel.</li>
                            </div>
                            <div className='flex px-2 mt-4'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Customer Support:</span> Offer exceptional service with integrated helpdesk and ticketing systems.</li>
                            </div>
                            <div className='flex px-2 mt-4'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Marketing Automation:</span> Automate email campaigns and monitor customer engagement.</li>
                            </div>
                        </ul>
                    </div>
                </div>
                
            </div>

            <div className='grid grid-cols-2 my-20'>
                <div className='lg:flex items-center col-span-2 lg:col-span-1 lg:mt-0 mt-10'>
                    <div className='lg:w-[80%] w-[90%] lg:mx-auto ml-4'>
                        <p className='md:text-5xl text-3xl font-semibold text-gray-700 font-[Inter]'>Inventory & Supply Chain Management</p>
                        <p className='md:text-xl text-base font-[Roboto] text-gray-700 mt-5 border-b-2 pb-5'>Optimize your supply chain, monitor stock levels, and reduce waste. Ensure you always have the right amount of stock on hand with real-time inventory updates.</p>
                        <ul className='font-[Roboto] text-gray-500 md:text-xl text-lg mt-6'>
                            <div className='flex px-2'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Inventory Tracking:</span> Track items from procurement to sale with full transparency.</li>
                            </div>
                            <div className='flex px-2 mt-4'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Order Management:</span> Automate purchase orders, re-order points, and supplier communications..</li>
                            </div>
                            <div className='flex px-2 mt-4'>
                                <div className='h-10 w-10 bg-blue-500 rounded-full mr-4 flex justify-center items-center'>
                                    <span className='text-white mt-2 text-2xl'><ion-icon name="checkmark-sharp"></ion-icon></span>
                                </div>
                                <li className='w-[90%]'><span className='font-semibold'>Warehouse Management:</span> Manage multiple warehouses efficiently with location-based stock levels.</li>
                            </div>
                        </ul>
                    </div>
                </div>
                
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <img src={inventory} alt="" className='object-cover w-full rounded-xl object-fill'/>
                </div>
            </div>
        </div>



        <div className='lg:my-20 my-10 industry-bg py-10'>
            <p className='text-center md:text-2xl text-xl font-semibold font-[Inter] text-gray-700 underline'>We also have industry-specific solutions</p>
            <div className='md:flex justify-center md:gap-20 mt-20'>
                <button 
                    className={`${showEducation ? 'bg-blue-100  text-blue-700 border-2 border-transparent ' : 'bg-white border-gray-300 border-2 text-gray-400 hover:bg-blue-100 hover:text-blue-700 hover:border-transparent'} md:text-2xl text-xl font-semibold rounded-full px-10 py-4 transition-all duration-300 ease-in-out md:w-[220px] w-full`} onClick={handleEducation}>
                    
                    Education
                </button>
                <button className={`${showHealth ? 'bg-blue-100  text-blue-700 border-2 border-transparent ' : 'bg-white border-gray-300 border-2 text-gray-400 hover:bg-blue-100 hover:text-blue-700 hover:border-transparent'} md:text-2xl text-xl font-semibold rounded-full px-10 py-4 transition-all duration-300 ease-in-out md:w-[220px] w-full md:mt-0 mt-5`} onClick={handleHealth}>Healthcare</button>
            </div>

            <div>
                <div className={`${showEducation ? 'block' : 'hidden'} lg:w-[80%] w-[90%]  bg-white mx-auto mt-20 rounded-3xl border-2 border-gray-100 lg:px-28 lg:py-32 py-12 sm:px-12 px-4 transition-all duration-300 ease-in-out`}>
                    <p className='lg:text-5xl text-3xl font-semibold text-gray-800 font-[Inter]'>Education</p>
                    <p className='lg:text-xl text-lg lg:mt-8 mt-3 text-gray-800 font-semibold font-[Roboto] leading-relaxed'>Streamline Administrative and Learning Management</p>
                    <p className='lg:text-xl mt-4 text-gray-600 font-[Roboto] leading-relaxed'>In the fast-evolving world of education, institutions require a robust system that can handle administrative tasks while enhancing the learning experience. SydaSuite is designed to meet the needs of schools, universities, and training centers.</p>
                    <ul className='list-disc lg:text-xl text-lg text-gray-600 ml-4 lg:mt-6 mt-3 md:leading-relaxed'>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Student Information System (SIS):</span> Keep detailed records of student data, from enrollment to graduation.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Learning Management System (LMS):</span> Deliver courses, manage assignments, and track student progress, all from a single platform.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Timetable & Scheduling:</span> Automate the scheduling of classes, exams, and events with ease.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Examination Management:</span> Manage online exams, grading, and report generation effortlessly.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Fee Management:</span> Simplify fee collection with automated invoicing and payment tracking.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Communication Portal:</span> Foster communication between teachers, students, and parents with messaging tools and notifications.</li>
                    </ul>

                    <div className=' bg-blue-600 mx-auto rounded-2xl my-20 '>
                        <img src={education} alt="" className='object-cover w-full rounded-xl'/>
                    </div>

                    <div>
                        <p className='text-2xl text-gray-800 font-semibold font-[Roboto] leading-relaxed'>Key Benefits for Education:</p>
                        <ul className='list-disc lg:text-xl text-lg text-gray-600 mt-6 ml-4 md:leading-relaxed'>
                            <li><span className='text-gray-800 lg:font-semibold font-medium'>Personalized Learning:</span> Support different learning styles with flexible course and exam structures.</li>
                            <li><span className='text-gray-800 lg:font-semibold font-medium'>Real-Time Data</span> Make informed decisions with instant access to student performance metrics.</li>
                            <li><span className='text-gray-800 lg:font-semibold font-medium'>Remote Learning Ready:</span> Seamlessly manage hybrid learning environments with cloud-based access.</li>
                        </ul>
                    </div>
                </div>


                <div className={`${showHealth ? 'block' : 'hidden'} lg:w-[80%] w-[90%]  bg-white mx-auto mt-20 rounded-3xl border-2 border-gray-100 lg:px-28 lg:py-32 py-12 sm:px-12 px-4 transition-all duration-300 ease-in-out`}>
                    <p className='lg:text-5xl text-3xl font-semibold text-gray-800 font-[Inter]'>Healthcare</p>
                    <p className='lg:text-xl text-lg lg:mt-8 mt-3 text-gray-800 font-semibold font-[Roboto] leading-relaxed'>Optimize Patient Care and Facility Management</p>
                    <p className='lg:text-xl text-lg lg:mt-8 mt-3 text-gray-600 font-[Roboto] leading-relaxed'>For hospitals, clinics, and other healthcare providers, operational efficiency is crucial to providing quality care. SydaSuite is tailored to the needs of healthcare facilities, ensuring that you can manage both patient care and back-office operations effectively.</p>
                    <ul className='list-disc lg:text-xl text-lg text-gray-600 ml-4 mt-6 leading-relaxed'>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Patient Management:</span> Keep detailed records of patient history, appointments, and treatment plans in one centralized system.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Electronic Medical Records (EMR):</span> Store and retrieve medical records digitally, ensuring compliance and easy access for healthcare providers.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Billing & Insurance Claims:</span> Simplify the billing process, handling insurance claims and payments quickly and accurately.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Appointment Scheduling:</span> Manage doctor availability and patient appointments to optimize workflows.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Inventory & Medical Supplies:</span> Track medicine, equipment, and other medical supplies to avoid shortages or overstocking.</li>
                        <li><span className='text-gray-800 lg:font-semibold font-medium'>Compliance Management:</span> Ensure that all healthcare standards and regulations are met, with automatic alerts for renewal dates and compliance checks.</li>
                    </ul>

                    <div className='mx-auto rounded-2xl my-20 '></div>
                        <img src={health} alt="" className='object-cover w-full rounded-xl '/>
                    <div>
                        <p className='text-2xl text-gray-800 font-semibold font-[Roboto] leading-relaxed'>Key Benefits for Healthcare:</p>
                        <ul className='list-disc list-inside lg:text-xl text-lg text-gray-600 mt-6 leading-relaxed'>
                            <li><span className='text-gray-800 lg:font-semibold font-medium'>Improved Patient Experience:</span> Streamlined processes mean more time focused on patient care.</li>
                            <li><span className='text-gray-800 lg:font-semibold font-medium'>Accurate Data:</span> Minimize human error in record-keeping and enhance decision-making with reliable data.</li>
                            <li><span className='text-gray-800 lg:font-semibold font-medium'>Regulatory Compliance:</span> Stay compliant with local healthcare regulations through automated updates and alerts.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='sm:w-[90%] w-full mx-auto md:h-56 h-44 gradient-bg mb-20 py-8 lg:px-8 lg:flex items-center rounded-2xl text-white font-semibold justify-between'>
                <div className='md:mt-4 lg:mt-0'>
                    <p className='lg:text-3xl md:text-2xl text-xl font-bold lg:text-left text-center'>No matter the industry, We’ve Got You Covered!</p>
                    <p className='lg:text-2xl md:text-xl lg:text-left text-center font-semibold md:block hidden mt-2'>Ready to learn more?</p>
                </div>
                
                <div className='flex justify-center mt-2 md:mt-4'>
                    <div className='bg-white text-black w-[250px] md:py-4 py-3 md:text-xl text-gray-700 rounded-full font-[Inter] font-semibold text-center'>
                        <ScrollToTopLink to="/book-demo">
                            Book a Demo
                        </ScrollToTopLink>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
