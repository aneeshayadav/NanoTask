import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Page1 = () => {
  return (
    <>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 md:px-28 px-6'>
          <div className=' col-span-2 '>
            <div className='md:text-6xl text-5xl md:pl-0 pl-10  font-semibold md:pt-20'>
              <h1>Eat Any</h1>
              <h1>where</h1>
              <div className='flex md:gap-6 gap-2'>
                <h1 className='text-[#61605e]'>at just</h1>
                <h1 className='text-[#f0494a]'>₹350</h1>
              </div>
            </div>
            <div className='md:text-[13px] text-[8px] md:pl-0 pl-10  mt-6'>
              <p>When your purchase Plan “Jaha Jao Waha Khao”  you can easily eat</p>
              <p> by only scan Qr Code in restaurants.</p>
            </div>
            <div className='flex gap-8 mt-6 '>
              <button className=' text-[12px] rounded-3xl px-4  bg-[#f0494a] text-white font-normal'>Download App</button>
              <div className='bg-[#ffffff] rounded-full px-3 py-2 shadow-xl text-[#f0494a]'><i className="ri-play-fill"></i></div>
              <h5 className='mt-2 text-[#61605e]'>watch video</h5>
            </div>
          </div>
          <div className=''>

            <img className='' src="https://s3-alpha-sig.figma.com/img/42ec/f8de/9af7810ee18096de9cb4727dbba52472?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUZZuxu2Y31BYDPWnalBkMmz9FOSV6SM~G-GwQg-E94SwHmL6ox6GRTAvgXsInG7VK~fjTEejwL3AqCk3UxzkkJFl6QPVKZKh8XCnpUSFFoLrMfORYAOd78~OZYCbMAjtE4AoM7sAXsN0ZKm4yKjTGK0PGmhH1XNqVef6gWsTbImZNKRHN7dBLY5WflkSbB6jFvxH1Wq4HbebH6tHvR9mOLr~CfqU5KXoJl-otu~Lfv2RAyknmCp7dH-NptYap2OMbUI297OYg29~YzpHfAEiUu0yX06OSYFER0EJay1ra0mHS~VTjGY8bmojFMJibb1QpftleB2xRp3AYb0jZif0g__" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page1