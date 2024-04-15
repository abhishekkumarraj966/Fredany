import React from "react";
import  img1 from "./assites/img1.png"
import  img2 from "./assites/img2.png"
import  img3 from "./assites/img3.png"
const Blogs = () => {
  return (
    <div className="bg-[#d6763b] p-[37px] lg:p-[100px] mx-auto" id="blogs">
      <div className=" h-[190px] sm:h-[400px] lg:h-[503px]">
        <p className="font-bold text-[15px] text-center sm:text-[28px] lg:text-[32px] pt-[15px]  text-white ">
          Blogs
        </p>
        <div className="flex justify-between mt-[25px] sm:mt-[35px] lg:mt-[50px] ">
          <div>
            <img
              src={img1}
              className="w-[111px] h-[117px] rounded-[20px] lg:w-[325px] sm:w-[200px] sm:h-[250px] lg:h-[342px] "
            />
            <p className="font-bold text-center text-[7px] sm:text-[16px] lg:text-[20px] text-white mt-[10px] sm:mt-[14px] lg:mt-[20px]">
              HandMade Decor
            </p>
          </div>
          <div>
            <img
              src={img2}
             
              className="w-[111px] h-[117px] rounded-[20px] lg:w-[325px] sm:w-[200px] sm:h-[250px] lg:h-[342px] "
            />
            <p className="font-bold text-center text-[7px] sm:text-[16px] lg:text-[20px] text-white mt-[10px] sm:mt-[14px] lg:mt-[20px]">
              Crafted Things
            </p>
          </div>
          <div>
            <img
            src={img3}
              className="w-[111px] h-[117px] rounded-[20px] lg:w-[325px] sm:w-[200px] sm:h-[250px] lg:h-[342px] "
            />
            <p className="font-bold text-center text-[7px] sm:text-[16px] lg:text-[20px] text-white mt-[10px] sm:mt-[14px] lg:mt-[20px]">
              Rope Crafted Decor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
