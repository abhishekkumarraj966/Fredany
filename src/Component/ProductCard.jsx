import React from 'react'
import Card from './Card'

const ProductCard = () => {
  return (
    <div className='h-[250px] lg:h-[850px] w-full bg-[#7D3C13]'>
        <h2 className='font-bold text-[15px] text-center lg:text-[32px] pt-[15px] lg:pt-[50px] text-white '>Products</h2>
        <div className='flex gap-2 justify-around px-2'>
        <Card imgUrl={"unsplash_vE7JbyPGxfA.jpg"}/>
        <Card imgUrl={"unsplash_xZyTEtknY3E.jpg"}/>
        <Card imgUrl={"unsplash_lhO9WgObmNY.svg"}/>

        </div>
    </div>
  )
}

export default ProductCard