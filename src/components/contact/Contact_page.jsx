import React from 'react'

export default function Contact_page() {
  return (
    <>
        <div className='lg:flex bg-[#ecf5ff] min-h-[800px] px-6 pb-24 md:pt-48 pt-28 items-center gap-1'>
            <div className='lg:w-[60%]'>
                <p className='lg:text-6xl text-4xl font-medium text-gray-800 font-[Roboto] md:text-center lg:text-left'>Connect with us</p>
                <p className='lg:text-lg lg:mt-8 mt-4 text-[#7174a5] md:text-center lg:text-left md:w-[600px] lg:w-auto mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id magna malesuada tempor mitellus eget auctor parturient montes dolor.</p>

                <div className='md:flex lg:block items-center justify-evenly lg:w-full'>
                    <div className='flex mt-10 items-center '>
                        <div className='lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-white flex justify-center items-center'>
                            <span className='lg:text-5xl text-3xl text-[#7174b9] lg:mt-0 mt-1'>
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                        </div>
                        <div className='ml-6'>
                            <p className='lg:text-lg text-gray-600 font-[inter] '>Email us:</p>
                            <p className='mt-1 md:text-lg lg:text-2xl md:font-bold lg:font-medium text-[#7174a5] font-[inter]'>info@example.com</p>
                        </div>
                    </div>

                    <div className='flex mt-8 items-center'>
                        <div className='lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-white flex justify-center items-center'>
                            <span className='lg:text-5xl text-3xl text-[#7174b9] lg:mt-0 mt-1'>
                            <ion-icon name="call-outline"></ion-icon>
                            </span>
                        </div>
                        <div className='ml-6'>
                            <p className='lg:text-lg text-gray-600 font-[inter]'>Call us:</p>
                            <p className='mt-1 lg:text-2xl font-medium text-[#7174a5] font-[inter]'>+234 910 000 0000</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-8 items-center md:justify-center lg:justify-start'>
                    <div className='lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-white flex justify-center items-center'>
                        <span className='lg:text-5xl text-3xl text-[#7174b9] lg:mt-0 mt-1'>
                        <ion-icon name="location-outline" className="font-light"></ion-icon>
                        </span>
                    </div>
                    <div className='ml-6'>
                        <p className='text-lg text-gray-600 font-[inter]'>Find us on:</p>
                        <p className='mt-1 lg:text-2xl font-medium text-[#7174a5] font-[inter]'>ATL express, CBD, Abuja</p>
                    </div>
                </div>
                
            </div>

            
            <div className='lg:w-[65%] bg-white min-h-[600px] rounded-[30px] shadow-xl lg:p-12 px-6 py-10 lg:ml-6 mt-10 lg:mt-0'>
                <p className='text-2xl font-medium text-gray-700 font-[Roboto]'>Send a message</p>
                <form action="">
                    <div className='lg:flex gap-2 mt-6'>
                        <div className='w-[100%]'>
                            <label className='text-lg text-[#7174a9]'>First name</label><br />
                            <input type="text" name="" id="" placeholder='James' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                        
                        <div className='w-[100%] mt-1'>
                            <label className='text-lg text-[#7174a9]'>Last name</label><br />
                            <input type="text" name='' id='' placeholder='Parker' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                        
                    </div>
                    <div className='lg:mt-6 lg:flex gap-4 mt-1'>
                        <div className='w-[100%]'>
                            <label className='text-lg text-[#7174a9]'>Email</label> <br />
                            <input type="text" name="" id=""  placeholder='info@example.com' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                        
                        <div className='w-[100%]'>
                            <label className='text-lg text-[#7174a9]'>Phone</label><br />
                            <input type="text" name='' id=''placeholder='1 (888) 1234-5678' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                    </div>

                    <div className='w-full mt-6'>
                        <label className='text-lg text-[#7174a9]'>Your message</label> <br />
                        <textarea type="text" className='w-full h-40 mt-3 border rounded-lg p-4 text-lg' placeholder='Type your text here.....' />
                    </div>

                    <div className='mt-6 mb-2 flex justify-center'>
                        <button className='bg-blue-500 text-white px-10 py-3 text-lg font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out'>Inquire now</button>
                    </div>


                </form>
            </div>
        </div>
    </>
  )
}
