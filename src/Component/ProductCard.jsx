import React from "react";
// import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import AppLayout from "./AppLayout";
const sofasData = [
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
];

const ProductCard = () => {
  return (
   
      <div
        className=" w-full bg-[#7D3C13] pb-14"
        id="shop"
      >
         <AppLayout>
        <h2 className="font-bold text-[15px] pb-10 text-center sm:text-[28px] lg:text-[32px] sm:pt-[40px] pt-[15px] lg:pt-[50px] text-white ">
          Products
        </h2>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          modules={[Navigation]}
          navigation
          className="mySwiper"
        >
          <div className="flex gap-2">
            {sofasData.map((sofa, index) => (
              <SwiperSlide key={index}>
                 <div className="w-[320px] bg-[#D4B294]  lg:w-[280px] rounded-md border shadow-xl gap-2  mx-auto">
                <img
                  src={sofa.imageUrl}
                  alt="Laptop"
                  className="h-48 w-full sm:w-[100%] lg:w-[100%] p-[5px] rounded-xl object-cover"
                />
                <div className="py-4 pb-10 px-2">
                  <h1 className="text-lg font-bold tracking-0.5 cursor-pointer   text-[20px] text-black self-start  mx-auto">
                    {sofa.title}
                  </h1>
                  <p className="mt-3 text-sm text-[#7D3C13] text-[5px] sm:text-[14px] lg:text-[20px] font-light   mx-auto tracking-0.5 leading-6">
                    {sofa.description}
                  </p>
                </div>
              </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        </AppLayout>
      </div>
  
  );
};

export default ProductCard;

// <Card imgUrl={"unsplash_vE7JbyPGxfA.jpg"} />
// <Card imgUrl={"ptest.jpg"} />
// <Card imgUrl={"unsplash_lhO9WgObmNY.svg"} />

{/* <div className="bg-[#D4B294]  h-[155px] sm:h-[400px] p-[15px]  pt-[25px] sm:pt-[10px]  flex flex-col  lg:gap-3 items-center justify-center  rounded-[12px] lg:w-[427px] lg:h-[570px] mt-[40px] sm:mt-[20px] lg:mt-[80px]">
                  <img
                    src={sofa.imageUrl}
                    alt={sofa.title}
                    className="mx-auto h-[78px] sm:h-[160px]  lg:h-[287px] mb-2"
                  />
                  <p className="font-normal text-[5px] lg:text-[24px] sm:text-[18px] text-black self-start  mx-auto">
                    {sofa.title}
                  </p>
                  <p className="text-[#7D3C13] text-[5px] sm:text-[14px] lg:text-[20px] font-light   mx-auto">
                    {sofa.description}
                  </p>
                </div> */}