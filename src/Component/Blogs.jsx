import React from 'react'

const Blogs = () => {
  return (
    <div className='bg-[#d6763b] p-[37px] lg:p-[100px]'>
        <div className=' h-[190px] lg:h-[503px]'>
         <p className='text-center font-bold text-[15px] text-white lg:text-[32px] '>Blogs</p>
         <div className='flex justify-between mt-[25px] lg:mt-[50px] '>
            <div>
                <img src='/assets/unsplash_eg726v9y3iA.svg' className='w-[111px] h-[117px] rounded-[20px] lg:w-[325px] lg:h-[342px]'/>
                <p className='font-bold text-center text-[7px] lg:text-[20px] text-white mt-[10px] lg:mt-[20px]'>HandMade Decor</p>
            </div>
            <div>
                <img src='/assets/unsplash_j_14082_3G0.svg' className='w-[111px] h-[117px] rounded-[20px] lg:w-[325px] lg:h-[342px]'/>
                <p className='font-bold text-center text-[7px] lg:text-[20px] text-white mt-[10px] lg:mt-[20px]'>Crafted Things</p>
            </div>
            <div>
                <img src='/assets/unsplash_3gwB2d1puxk.svg' className='w-[111px] h-[117px] rounded-[20px] lg:w-[325px] lg:h-[342px]'/>
                <p className='font-bold text-center text-[7px] lg:text-[20px] text-white mt-[10px] lg:mt-[20px]'>Rope Crafted Decor</p>
            </div>
            
         </div>
        </div>
    </div>
  )
}

export default Blogs