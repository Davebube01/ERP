import React from 'react'

export default function Demo_page() {
  return (
    <>
        <div className='lg:flex bg-[#ecf5ff] min-h-[800px] px-6 pb-24 md:pt-48 pt-28 items-center gap-1'>
            <div className='lg:w-[60%]'>
                <div className='flex items-center'>
                    <div>
                    <p className='text-blue-800 font-semibold font-[Inter] bg-blue-100 w-40 text-center py-4 rounded-full'>Product demo</p>
                    <p className='text-6xl font-medium text-gray-800 font-[Roboto] md:text-center lg:text-left mt-5'>Request a 1-on-1 demo</p>
                    <p className='text-xl mt-8 text-[#7174a5] md:text-center lg:text-left md:w-[600px] lg:w-auto mx-auto'>Experience our product first-hand and discover how SydaSuite can transform your business.</p>
                    <hr className='mt-10'/>
                    <p className='text-2xl text-gray-700 font-bold font-[Roboto] mt-5'>Book a personalized demo today.</p>
                    </div>
                </div>
                
            </div>

            
            <div className='lg:w-[65%] bg-white min-h-[600px] rounded-[30px] shadow-xl p-12 lg:ml-6 mt-10 lg:mt-0'>
                <form action="">
                    <div className='lg:flex gap-2 mt-6'>
                        <div className='w-[100%]'>
                            <label className='text-lg text-[#7174a9]'>Full name</label><br />
                            <input type="text" name="" id="" placeholder='Full name' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                        
                        <div className='w-[100%] lg:mt-0 mt-6'>
                            <label className='text-lg text-[#7174a9]'>Email</label><br />
                            <input type="email" name='' id='' placeholder='Email address' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                        
                    </div>
                    <div className='mt-6 lg:flex gap-4'>
                        <div className='w-[100%]'>
                            <label className='text-lg text-[#7174a9]'>Phone</label> <br />
                            <input type="text" name="" id=""  placeholder='1 (888) 1234-5678' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                        
                        <div className='w-[100%] lg:mt-0 mt-6'>
                            <label className='text-lg text-[#7174a9]'>Company</label><br />
                            <input type="text" name='' id=''placeholder='Company name' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                    </div>

                    <div className='mt-6 lg:flex gap-4'>
                        <div className='w-[100%]'>
                            <label className='text-lg text-[#7174a9]'>Website</label> <br />
                            <input type="text" name="" id=""  placeholder='company.com' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                        
                        <div className='w-[100%] lg:mt-0 mt-6'>
                            <label className='text-lg text-[#7174a9]'>Position</label><br />
                            <input type="text" name='' id=''placeholder='Head of Marketing' className='py-4 px-6 mt-3 border w-[100%] rounded-lg text-lg'/>
                        </div>
                    </div>

                    

                    <div className='mt-6 mb-2 flex justify-center '>
                        <button className='bg-blue-500 text-white px-10 py-3 text-lg font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out '>Book Now</button>
                    </div>


                </form>
            </div>
        </div> 
    </>
  )
}
