import React from 'react'

const Page6 = () => {
  return (
    <>
      <div className='md:mt-24 mt-10'>
        <div className='text-center'>

          <p className='text-[11px] font-bold text-[#f0494a]'>Testimonials</p>
          <h1 className='font-bold text-2xl mt-4'>Our Happy Customers Says</h1>

        </div>
        <div className='flex items-center justify-center mt-10'>
          <div className='w-[70%] h-[50%] bg-[#ffffff] py-20 shadow-xl relative'>
            <div className='bg-red-500 w-[32px] absolute md:left-[-2%] left-[-5%] top-[45%] h-[32px] text-white rounded-full py-1 px-2'><i className="ri-arrow-left-line"></i></div>
            <div className='bg-red-500 w-[32px] absolute left-[94%] md:left-[98%] top-[45%] h-[32px] text-white py-1 px-2 rounded-full'><i className="ri-arrow-right-line"></i></div>

            <div className='flex items-center justify-center gap-4'>
              <img className='w-[50px] h-[50px] rounded-full' src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div>
                <h1 className='font-bold text-sm mt-1'>Williams johns</h1>
                <h2 className='text-[12px]'>ceo & co-founder</h2>
              </div>

            </div>
            <div className='text-center '>
              <p className='md:w-[77%] w-[80%]  md:text-sm text-[14px] font-semibold pl-10 pt-8 md:pl-60'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page6