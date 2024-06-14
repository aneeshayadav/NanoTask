import React from 'react'

const Page2 = () => {
  return (
    <>
      <div className=' md:mt-24 mt-10'>
        <div className='text-center relative'>
          <div className='w-[8px] h-[8px] bg-[#f0494a] absolute md:left-[36%] left-[6%] rotate-[20deg] top-[55%]'></div>
          <div className='w-[8px] h-[8px] bg-[#f6c66c] absolute md:left-[64%] left-[90%] rotate-[20deg] top-[40%]'></div>

          <p className='text-[11px] font-bold'>WHAT WE SERVE</p>
          <div className='mt-4'>
            <h1 className='text-2xl font-bold'> <span className='text-[#f0494a]'>Plans</span> That <span className='text-[#f6c66c]'>Always</span>  Make</h1>
            <h1 className='text-2xl font-bold'>You Fall In <span className='text-[#f0494a]'>Love</span> </h1>
          </div>

        </div>

        <div className='md:flex md:flex-row flex-col gap-4 items-center justify-around mt-6'>
          <div className='flex-col items-center flex'>
            <img className='md:w-40' src="https://s3-alpha-sig.figma.com/img/6ad5/afa2/fc3b78d7e90f03cc26e9305599d8494a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UKmA4YcZy2vS67sEfVwrUYarGgh-2dXz5RhS1QqFNf8m1sHd25jbZ~CQdujp4PxhZGCYnm6GHgj8jzdUH4DAVehB8FH20nXFyJgAHeSkqABCymjhvyJdYL-xjXJYBTGX8IpsQqAHhq06pMI1fWQI1wQXi9f3ojzP3rW7ffL3JmfVE0cuX49QuEJaWYQvGsJWuTKJ0Edt341vPg-F15MWBVO~j5V4v5jfuNpJbsoogtLMMP4LFzFkXTth8VrQlZdAJZn24IobpXMRynTv-D7JFhuttT~YsgHuO8xlx0iv~HXxOLJngzi4JyMoCNxoAOMptM2yIqDT1AkukDmJ1L97EA__" alt="" />
            <h1 className='md:text-xl text-3xl font-bold'>Eat Multiple restaurants</h1>
            <p className='text-[12px] mt-2 font-semibold'>You only need a few steps in ordering food</p>
          </div>
          <div className='flex-col items-center flex'>
            <img className='md:w-40' src="https://s3-alpha-sig.figma.com/img/6ad5/afa2/fc3b78d7e90f03cc26e9305599d8494a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UKmA4YcZy2vS67sEfVwrUYarGgh-2dXz5RhS1QqFNf8m1sHd25jbZ~CQdujp4PxhZGCYnm6GHgj8jzdUH4DAVehB8FH20nXFyJgAHeSkqABCymjhvyJdYL-xjXJYBTGX8IpsQqAHhq06pMI1fWQI1wQXi9f3ojzP3rW7ffL3JmfVE0cuX49QuEJaWYQvGsJWuTKJ0Edt341vPg-F15MWBVO~j5V4v5jfuNpJbsoogtLMMP4LFzFkXTth8VrQlZdAJZn24IobpXMRynTv-D7JFhuttT~YsgHuO8xlx0iv~HXxOLJngzi4JyMoCNxoAOMptM2yIqDT1AkukDmJ1L97EA__" alt="" />
            <h1 className='md:text-xl text-3xl font-bold'>Instant Meal service</h1>
            <p className='text-[12px] mt-2 font-semibold'>You only need a few steps in ordering food</p>
          </div><div className='flex-col items-center flex'>
            <img className='md:w-40' src="https://s3-alpha-sig.figma.com/img/2391/cb50/4f4e205b0f16998ff406ba0bfe0f4c65?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKDd7JFHf9r0x9XU6M6ICusQelt-g-XQ1gjGnEnSNY-0LMo2dNBNvKoS3YEhOhPsbSt2GJbX3qXIDRVE6NMvxAki26sLEoHLQBrwdTUf4xNNCk4LXjlq2OIihqIPbs5iRcbOA30y75FsssC3oDndG0Z7ODmdsG-c~iTLD8AtpydvpFmGpBBuJ8T3h~pr3uDMXD-0svONRhIk4Y1QUWPxYmrzpzUL5NGVfKSj1BPsnmsSPqiH-moi59eBa3c9-hVQFZ1UYytaxCoCDKv~~0V2NnfaMlfbiuZDMh65HzUiTk7Z2uVYkl6XhBPx03PUDc1Mzxa7d~j-INGQ5SeAB4CYjw__" alt="" />
            <h1 className='md:text-xl text-3xl font-bold'>Everyday New Meal</h1>
            <p className='text-[12px] mt-2 font-semibold'>You only need a few steps in ordering food</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page2