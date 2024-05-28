import React from 'react'

const CompanyInfoBox = () => {
    return (
        <div className='bg-[#7D3C13] ' id='about'>
            <div className='w-[90vw] pt-[12px] sm:pt-[25px] lg:pt-[43px] mx-auto h-[192px] sm:h-[300px] lg:h-[520px] flex flex-col  items-center ' >
                <img src='/assets/unsplash_uoZGGnbBqmE.svg' className='w-[74p] h-[74px] rounded-[100%] sm:w-[120px] sm:h-[120px] lg:w-[184px]  lg:h-[184px] bg-[#00000046] mt-[-40px]' />
                <h2 className='font-bold text-[16px] sm:text-[25px] text-white lg:text-[40px] mt-[7px] sm:mt-[20px] lg:mt-[25px]'>Vishant Thakur</h2>
                <p className='text-[12px] font-bold sm:text-[14px] text-white lg:text-[24px] mt-[8px] lg:mt-[10px]'>Fred Home Decors</p>
                <p className='font-normal text-[11px] text-center sm:text-[16px] lg:text-[28px] text-white mt-[8px] sm:mt-[20px] lg:mt-[34px]'>“ It is a long established fact that a reader will be tracked distracted by the readable
                    content of a page is when looking at its layout. The point of using Lorem of distribution
                    it look like readable English “</p>
               <div className='flex space-x-[15px] sm:space-x-[20px] lg:space-x-[30px] mt-[10px] sm:mt-[15px] lg:mt-[20px]'>
                <a href=''>
                    <img src='/assets/WhatsApp (1).png' className='w-[25px] lg:w-[50px] sm:w-[35px] sm:h-[35px] h-[25px] lg:h-[50px]'/>
                </a>
                <a href=''>
                    <img src='/assets/Facebook (1).png' className='w-[25px] lg:w-[50px] sm:w-[35px] sm:h-[35px] h-[25px] lg:h-[50px]'/>
                </a>
                <a href=''>
                    <img src='/assets/Instagram (1).png' className='w-[25px] lg:w-[50px] sm:w-[35px] sm:h-[35px] h-[25px] lg:h-[50px]'/>
                </a>
                
               </div>
            </div>
        </div>
    )
}

export default CompanyInfoBox