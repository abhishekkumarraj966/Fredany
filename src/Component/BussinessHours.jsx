import React from 'react'

const BussinessHours = () => {
    return (
        <div className='bg-[#d6763b] h-[190px] lg:h-[416px] pt-[20px]  lg:pt-[50px]'>
            <p className='font-bold text-[15px] text-center sm:text-[28px] lg:text-[32px]   text-white '>Business Hours</p>
            <div className='w-[80%] h-[80px] sm:h-[140px] lg:h-[270px] mx-auto mt-[20px] bg-[#D4B294] shadow-[#00000077] flex flex-col items-center justify-center rounded-[8px]'>
                <p className=' text-[11px] sm:text-[20px] lg:text-[32px] text-center'>MONDAY - SATURDAY :- 9:00AM TO 9:00 PM</p>
                <p className='text-[11px] font-bold sm:text-[20px] lg:text-[32px] text-center'>SUNDAY - CLOSED</p>
            </div>
        </div>
    )
}

export default BussinessHours