import React from 'react'

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-around mt-6'>
        <div className='flex md:gap-4 gap-2'>
          <img className='md:w-12 rounded-full w-8' src="https://s3-alpha-sig.figma.com/img/47cd/d9ac/c42642e25117c4c1900830382a32f75b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ioo3mzNFMIgYGApE1WM9XrFqx6Xy8FDsBDjqCHOapKIdL46bz~7OJKj2lCJKhwNLnl~SseoQV6wbT06hABlwRC5Bee3EJjz4d929N3U0T4xUHvBoHGCydARcAGpQIO5TFU~l~ZlU3133Mmi~C5gZGssLfJOh-R2V3~t-nMQXdRbuxd7jC-2h0vIgMOup~2iRtD5FjHzvNycA~6yKu6d0quDbE4zsZSyiCGlUuEm~q0ey54ukkts3630Kv3kkQGErUAjlt6PKVK-x3b-I1GtM043QoSovyQxiIcpCsIl0sjCK5QMeG1BOxG~cPPrWpqZlX~yE~v07TjY4Nt8-8GCiog__" alt="" />
          <div className='flex gap-2 font-bold text-[13px] md:text-2xl'>
            <h1 className='mt-2'>Apana</h1>
            <h1 className='text-[#f0494a] mt-2'>Thali</h1>
          </div>
        </div>
        <div>
          <button className='bg-[#f6dbbe] md:text-[10px] text-[5px] rounded-2xl font-bold md:px-4 md:py-2 px-2 py-1 text-[#f0494a]'>JHA JAO WHA KHAO</button>
        </div>
        <div className='md:flex gap-6 md:gap-14 font-semibold text-[13px] md:text-sm md:mt-[-15px]'>
          <h1>Home</h1>
          <h1>Plans</h1>
          <h1>Restaurent</h1>
          <h1>Shope</h1>
        </div>
      </div>
    </>
  )
}

export default Header