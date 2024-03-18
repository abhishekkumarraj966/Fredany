import React from 'react'

const Footer = () => {
    return (
        <>
        
        <div className='w-full h-[180px] lg:h-[330px] bg-[#D4B294] flex flex-col items-center justify-center'>
            <div className='w-[90%] lg:w-[60%] mx-auto flex justify-between text-[#7D3C13]'>
                <a href='' className='font-normal text-[12px] lg:text-[24px] list-none'>About us</a>
                <a href='' className='font-normal text-[12px] lg:text-[24px]' >Contact us</a>
                <a href='' className='font-normal text-[12px] lg:text-[24px] '>privacy policy</a>
                <a href='' className='font-normal text-[12px] lg:text-[24px] '>Terms & conditions</a>
            </div>
            <div className='w-full lg:w-[75%] flex justify-around ml-auto mt-[20px] lg:mt-[45px]'>
                <div className='flex items-center gap-2 lg:gap-6'>
                    <a href='' className='text-[#7D3C13] font-bold text-[16px] lg:text-[24px]'>Connect with us on :-</a>
                    <a href=''><img src='/assets/WhatsApp (2).png' className='w-[26px] lg:w-[56px] h-[26px] lg:h-[55px]' /></a>
                    <a href=''><img src='/assets/Instagram (2).png' className='w-[26px] lg:w-[55px] h-[26px] lg:h-[55px]' /></a>
                    <a href=''><img src='/assets/Facebook (2).png' className='w-[26px] lg:w-[55px] h-[26px] lg:h-[55px]' /></a>
                </div>
                <div>
                    <img src='/assets/Group 32968.png' className='w-[40px] lg:w-[107px] h-[40px] lg:h-[107px]' />
                </div>
            </div>
        </div>
            <p className='text-center pb-4 bg-[#D4B294] text-[#7D3C13] font-light text-[12px] lg:text-[20px] '>© 2023 All Right Reserved. Developed By FredDecor</p>
        </>
    )
}

export default Footer