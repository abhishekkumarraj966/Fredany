import React from 'react'

const CompanyInfoBox = () => {
    return (
        <div className='bg-[#7D3C13] '>
            <div className='w-[90vw] pt-[12px] lg:pt-[43px] mx-auto h-[192px] lg:h-[520px] flex flex-col  items-center ' >
                <img src='/assets/unsplash_uoZGGnbBqmE.svg' className='w-[74p] h-[41px] rounded-[50%] lg:w-[184px] lg:h-[102px] bg-[#00000046]' />
                <h2 className='font-bold text-[14px] text-white lg:text-[40px] mt-[7px] lg:mt-[30px]'>Vishant Thakur</h2>
                <p className='text-[8px] font-bold text-white lg:text-[24px] mt-[8px] lg:mt-[10px]'>Fred Home Decors</p>
                <p className='font-normal text-[8px] text-center lg:text-[28px] text-white mt-[12px] lg:mt-[34px]'>“ It is a long established fact that a reader will be tracked distracted by the readable
                    content of a page is when looking at its layout. The point of using Lorem of distribution
                    it look like readable English “</p>
               <div className='flex space-x-[15px] lg:space-x-[30px] mt-[10px] lg:mt-[20px]'>
                <a href=''>
                    <img src='/assets/WhatsApp (1).png' className='w-[25px] lg:w-[50px] h-[25px] lg:h-[50px]'/>
                </a>
                <a href=''>
                    <img src='/assets/Facebook (1).png' className='w-[25px] lg:w-[50px] h-[25px] lg:h-[50px]'/>
                </a>
                <a href=''>
                    <img src='/assets/Instagram (1).png' className='w-[25px] lg:w-[50px] h-[25px] lg:h-[50px]'/>
                </a>
                
               </div>
            </div>
        </div>
    )
}

export default CompanyInfoBox