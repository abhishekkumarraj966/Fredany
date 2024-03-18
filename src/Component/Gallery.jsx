import React from 'react'

const Gallery = () => {
  return (
    <div className='p-[50px] lg:p-[120px] bg-[#7D3C13]'>
        <p className='font-bold text-[15px] lg:text-[32px] text-white text-center'>Gallery</p>
        <div className='mt-[30px] lg:mt-[100px]'>
            <div className='flex space-x-[9px] lg:space-x-[30px] '>
                <img src='/assets/unsplash_-aCDwxLAlzI (1).jpg' className='w-[112px] h-[149px] lg:w-[413px] lg:h-[549px]'/>
                <div className=' '>
                    <img src='/assets/unsplash_SVb7lJc1tZ0.jpg'  className='w-[168px] h-[44px] lg:w-[621px] lg:h-[156px]  '/>
                    <img src='/assets/unsplash_7tOV35hnkao.jpg' className='w-[168px] h-[99px] mt-[8px] lg:w-[621px] lg:h-[366px] lg:mt-[20px] '/>
                </div>
            </div>
            <div className='flex space-x-[9px] lg:space-x-[30px] mt-[7px] lg:mt-[20px]'>
                <div>
                    <img src='/assets/unsplash_ea-Vg1hWjEI.jpg' className='w-[168px] h-[95px] lg:w-[620px] lg:h-[349px] '/>
                    <img src='/assets/unsplash_tuJtzghMuEw.jpg' className='w-[168px] h-[46px] mt-[8px] lg:w-[620px] lg:h-[185px] lg:mt-[15px]'/>
                </div>
                <div>
                    <img src='/assets/unsplash_W5dsm9n6e3g.jpg' className='w-[112px] h-[149px] lg:w-[413px] lg:h-[549px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery