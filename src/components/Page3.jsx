import React from 'react'

const Page3 = () => {
  return (
    <>
      <div className=' md:mt-24 mt-10'>
        <div className='text-center'>

          <p className='text-[11px] font-bold text-[#f0494a]'>Partners</p>
          <h1 className='font-bold text-2xl'>Featured Restaurents</h1>

        </div>
        <div className='flex md:flex-row flex-col items-center justify-around relative'>
          <div className='bg-red-500 w-[32px] absolute md:left-[7%] left-[14%] md:top-[45%] top-[50%] h-[32px] text-white rounded-full py-1 px-2'><i className="ri-arrow-left-line"></i></div>
          <div className='bg-red-500 w-[32px] absolute left-[77%] md:left-[90.7%] md:top-[45%] top-[50%] h-[32px] text-white py-1 px-2 rounded-full'><i className="ri-arrow-right-line"></i></div>
          <div className='bg-[#ffffff] mt-12 shadow-xl rounded-2xl w-[230px]'>

            <div>
              <img className='rounded-t-2xl ' src="https://s3-alpha-sig.figma.com/img/cee0/f739/7a3ac712628f791e3594f461cc7fe648?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUmU~xP-L-pXsccVT62Gvv2p54D4ZIeE8prHUOH99UNFfFZiUr7KzTfsbqJNaJrXxMED6iI09jvOtwNZP3dJSPu83dcOVAAOhVjWVQmdoPQ1TOT8LSzjlegvGwlH9SLKE-KNOAwi108aP9t1XLo8X5Yb~SlmxA4z22hlaQDT~bZG3IcIKcLCVs-Vaj10WWU0N18l6O7M4VCwkGSTBm-xI8R6HnScHeLg3D1F5PM7yqZRMmytOw4ZMgT8n6Z1~L5bw91CES0bswRYOjBZ84XchkGHSdNaJqTVGlWrJSGmfoajgboey1Q3bo18epwgGtYN7wplnnJ9GVmztA8Uqts92g__" alt="" />
              {/* <button></button> */}
            </div>
            <h1 className='font-bold pl-2'>Guru Kripa Restaurent</h1>
            <div className='flex gap-2 py-2 pl-2'>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
            </div>
          </div>

          <div className='bg-[#ffffff] mt-12 shadow-xl rounded-2xl w-[230px]'>

            <div>
              <img className='rounded-t-2xl ' src="https://s3-alpha-sig.figma.com/img/cee0/f739/7a3ac712628f791e3594f461cc7fe648?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUmU~xP-L-pXsccVT62Gvv2p54D4ZIeE8prHUOH99UNFfFZiUr7KzTfsbqJNaJrXxMED6iI09jvOtwNZP3dJSPu83dcOVAAOhVjWVQmdoPQ1TOT8LSzjlegvGwlH9SLKE-KNOAwi108aP9t1XLo8X5Yb~SlmxA4z22hlaQDT~bZG3IcIKcLCVs-Vaj10WWU0N18l6O7M4VCwkGSTBm-xI8R6HnScHeLg3D1F5PM7yqZRMmytOw4ZMgT8n6Z1~L5bw91CES0bswRYOjBZ84XchkGHSdNaJqTVGlWrJSGmfoajgboey1Q3bo18epwgGtYN7wplnnJ9GVmztA8Uqts92g__" alt="" />
              {/* <button></button> */}
            </div>
            <h1 className='font-bold pl-2'>Guru Kripa Restaurent</h1>
            <div className='flex gap-2 py-2 pl-2'>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
            </div>
          </div>
          <div className='bg-[#ffffff] mt-12 shadow-xl rounded-2xl w-[230px]'>

            <div>
              <img className='rounded-t-2xl ' src="https://s3-alpha-sig.figma.com/img/cee0/f739/7a3ac712628f791e3594f461cc7fe648?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUmU~xP-L-pXsccVT62Gvv2p54D4ZIeE8prHUOH99UNFfFZiUr7KzTfsbqJNaJrXxMED6iI09jvOtwNZP3dJSPu83dcOVAAOhVjWVQmdoPQ1TOT8LSzjlegvGwlH9SLKE-KNOAwi108aP9t1XLo8X5Yb~SlmxA4z22hlaQDT~bZG3IcIKcLCVs-Vaj10WWU0N18l6O7M4VCwkGSTBm-xI8R6HnScHeLg3D1F5PM7yqZRMmytOw4ZMgT8n6Z1~L5bw91CES0bswRYOjBZ84XchkGHSdNaJqTVGlWrJSGmfoajgboey1Q3bo18epwgGtYN7wplnnJ9GVmztA8Uqts92g__" alt="" />
              {/* <button></button> */}
            </div>
            <h1 className='font-bold pl-2'>Guru Kripa Restaurent</h1>
            <div className='flex gap-2 py-2 pl-2'>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
              <button className='border-2 px-1 rounded-xl border-[#313131]'>
                <div className='flex gap-1 mt-1'>
                  <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/6ad7/c397/4c1b43b8243a0bc710970b820964567a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHxuKngdxLsoFjQPKI-TTaZT26H-MSupYvVgYSYmDldVqvvUS0~fLAV4Al3Eu4Y8Fod9S2uQKw1Hg2lbqKFpI1o0D1Rbu51pS9STl7awk5Fa6HxUJ1js~G7vZdgxQgCmi187axAfQ6xNVmifGZnrM310BdyYfEjmHaCjZYR9GxuWzz17WDsTndZhjdBnqP8xh-ZiHpoebKqU6i~J0qsxPaIo9CLYr~A0i3WMsWl0eQBxKMjRN5jmqs0kkvRD9-27ZYmZeLuui2XXRkz4sb09wrV2giMQSEulQ2AH4U1HqOt-bnS9k8Xd6VH-OLJoOOfW85VZm-u4JrOoVjkXWFsC3Q__" alt="" />
                  <h1 className='text-[8px] font-bold'>₹ 1500</h1>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Page3