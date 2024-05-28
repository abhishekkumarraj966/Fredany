import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Feedbackmock from "./MockData/Feedbackmock";
import AppLayout from "./AppLayout";
const Review = () => {
  return (
    <div className="bg-[#D6763B] py-10">
    <AppLayout>
    <div>
      {" "}
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
          750: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          770: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        {Feedbackmock.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mt-2 my-2 h-[210px] w-[350px] sm:w-[345px] lg:w-[380px] bg-[#7D3C13] text-[#A49FAF] rounded-xl mx-auto">
              <h1 className="pt-2 px-3 text-[15px] font-sans">
                {item.content}
              </h1>
              <div className="sm:pt-4 pt-[-8px] sm:pl-[170px] pl-[120px]">
                <h1 className="text-[16px] font-semibold sm:pl-10 pl-6 pb-2">
                  -{item.author}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </AppLayout>
    </div>
  );
};

export default Review;
