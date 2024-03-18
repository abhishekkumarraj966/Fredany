import React from 'react'

const Card = ({imgUrl}) => {
    return (
        <div className='bg-[#D4B294] w-[30%] h-[155px] p-[15px] pt-[25px] flex flex-col gap-2  lg:gap-3 items-center justify-center  md:h-[250px] rounded-[12px] lg:w-[427px] lg:h-[570px] mt-[40px] lg:mt-[80px]'>
            <img src={`/assets/${imgUrl}`} className=' mx-auto h-[78px] mg:h-[120px] lg:h-[287px]' />
            <p className='font-normal text-[5px] lg:text-[24px] text-black self-start w-[84%] mx-auto'>Comfy Sofa</p>
            <p className='text-[#7D3C13] text-[5px] lg:text-[20px] font-light  w-[84%] mx-auto'>“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “</p>
        </div>
    )
}

export default Card