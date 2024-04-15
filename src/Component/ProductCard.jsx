import React from "react";
// import Card from "./Card";

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
];

const ProductCard = () => {
  return (
    <div className="h-[250px] sm:h-[600px] lg:h-[850px] w-full bg-[#7D3C13]" id="shop">
      <h2 className="font-bold text-[15px] text-center sm:text-[28px] lg:text-[32px] sm:pt-[40px] pt-[15px] lg:pt-[50px] text-white ">
        Products
      </h2>

      <div className="flex gap-2 sm:gap-1 lg:gap-2 justify-around px-2">
        {sofasData.map((sofa, index) => (
          <div
            key={index}
            className="bg-[#D4B294] w-[30%] h-[155px] sm:h-[400px] p-[15px]  pt-[25px] sm:pt-[10px]  flex flex-col  lg:gap-3 items-center justify-center  rounded-[12px] lg:w-[427px] lg:h-[570px] mt-[40px] sm:mt-[20px] lg:mt-[80px]"
          >
            <img
              src={sofa.imageUrl}
              alt={sofa.title}
              className="mx-auto h-[78px] sm:h-[160px]  lg:h-[287px] mb-2"
            />
            <p className="font-normal text-[5px] lg:text-[24px] sm:text-[18px] text-black self-start w-[84%] mx-auto">
              {sofa.title}
            </p>
            <p className="text-[#7D3C13] text-[5px] sm:text-[14px] lg:text-[20px] font-light  w-[84%] mx-auto">
              {sofa.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

// <Card imgUrl={"unsplash_vE7JbyPGxfA.jpg"} />
// <Card imgUrl={"ptest.jpg"} />
// <Card imgUrl={"unsplash_lhO9WgObmNY.svg"} />
