import React from 'react'
import MobileStoreButton from 'react-mobile-store-button';
import apple from '../assets/store.png'
import google from '../assets/google.png'



const Page7 = () => {
  return (
    <>
      <div className='md:mt-24 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 md:px-28 px-6'>
          <div className=' col-span-2 '>
            <div className='md:text-4xl text-4xl md:pl-0 pl-10  font-bold md:pt-20'>
              <h1>It'a Now  <span className='text-[#f0494a]'>More Easy</span> To</h1>
              <h1><span className='text-[#f0494a]'>Purchase Plan</span>by Our</h1>
              <h1>Mobile <span className='text-[#f0494a]'>App</span></h1>

            </div>
            <div className='md:text-[13px] text-[8px] md:pl-0 pl-10  mt-6'>
              <p>When your purchase Plan “Jaha Jao Waha Khao”  you can easily eat</p>
              <p> by only scan Qr Code in restaurants helo he hha lorem hee jhihuh</p>
              <p> by only scan Qr Code in restaurants.</p>

            </div>
            <div className='flex gap-8 mt-6 md:flex-row flex-col'>
              <img src={google} alt="" />
              <img src={apple} alt="" />

            </div>
          </div>
          <div className='relative'>
            <div className='w-[350px] h-[350px] mt-64 md:ml-0 ml-[-18px] rounded-full bg-[#c4c4c4]'>

            </div>
            <img className='h-[80%] w-[65%] top-[5%] md:left-[14%] left-[18%] absolute' src="https://s3-alpha-sig.figma.com/img/058a/2f94/2334ce244570ad50ffa35a072caef34c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8QwKoOL-nk9qZeLd85H0-ZI4n5EpM7zhpt2xX6aRmks7HHLhf56IvkDk4DvogV9nlWrGs3MSivsoRFLPKOI-C7IjlNetQ3wojRubcuqYtW6UQiFaEf9Q5dPjEsh~7PW1nplq~bAeDQzeGR8iI~keLB14DGhktCCVhHdJUYwMqi-Z8~79S4jyF6mNTWqwCRyni8Eh9JkY318leObZMQPsoGsuYFam5uUrATWsWIrF6~M-8LlDQAdyPvVBoQBjFr-zzCZf02wudCJdxH8~ZuR33yCEdUdVhPAKYDGCw1-zEAsh3-7~je~2VkJzil0lvyzid-3IG4O2OEwCUsOJBuckA__" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page7