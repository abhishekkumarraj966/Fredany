import React from 'react'

const Appoinment = () => {
  return (
      <div className='bg-[#d6763b] pb-[20px] lg:pb-[60px]'>
          <p className='text-center font-normal text-white text-[15px] sm:text-[30px] lg:text-[40px] pt-[35px] sm:pt-[42px] lg:pt-[60px]'>Appointment</p>
          <div className='w-[90%] sm:w-[85%] lg:w-[80%]  h-[72px] sm:h-[100px] lg:h-[196px] items-center rounded-[10px] bg-[#D4B294] flex justify-around mx-auto mt-[30px]  sm:mt-[40px] lg:mt-[60px]'>
             <div className=''>
                <p className='font-bold text-[10px]  sm:text-[20px] lg:text-[32px] text-[#7D3C13] '>Pick a Date</p>
                <input type='date' placeholder='Date' className='font-bold text-[13px]  sm:text-[18px] w-[162px] sm:w-[300px] lg:w-[601px] h-[30px]  sm:h-[40px] lg:h-[65px] bg-[#7D3C13] rounded-[5px] px-3 text-white'/>
             </div>
             <div className=''>
                <p className='font-bold text-[10px] sm:text-[20px] lg:text-[32px] text-[#7D3C13] '>Select Hour</p>
                <input type='time' placeholder='Date' className='font-bold text-[13px]  sm:text-[18px]  w-[92px] lg:w-[343px] sm:w-[300px] h-[30px] sm:h-[40px] lg:h-[65px] bg-[#7D3C13] rounded-[5px] px-3 text-white'/>
             </div>
          </div>
      </div>
  )
}

export default Appoinment