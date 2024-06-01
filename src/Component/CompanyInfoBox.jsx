import React from "react";
import p1 from "./assites/imge.jpg";
import fl from "./assites/A.png";
import what from "./assites/B.png";
import fac from "./assites/c.png";
import you from "./assites/D.png";
import inst from "./assites/E.png";
import amo from "./assites/F.png";
import big from "./assites/G.png";
import im from "./assites/H.png";
import link from "./assites/i.png";
import flip from "./assites/J.png";
import Xi from "./assites/K.png";
import Ax from "./assites/L.png";
import Zo from "./assites/M.png";
const CompanyInfoBox = () => {
  return (
    <div className="bg-[#7D3C13] " id="about">
      <div className="w-[90vw] pt-[12px] sm:pt-[25px] lg:pt-[43px] mx-auto h-[100%] flex flex-col  items-center ">
        <img
          src={p1}
          className="w-[60px] h-[60px] rounded-[100%] sm:w-[120px] sm:h-[120px] lg:w-[184px]  lg:h-[184px] bg-[#00000046] mt-[-40px]"
        />
        <h2 className="font-bold text-[16px] sm:text-[25px] text-white lg:text-[40px] mt-[7px] sm:mt-[20px] lg:mt-[25px]">
          Vishant Thakur
        </h2>
        <p className="text-[12px] font-bold sm:text-[14px] text-white lg:text-[24px] mt-[8px] lg:mt-[10px]">
          Fred Home Decors
        </p>
        <p className="font-normal text-[11px] text-center sm:text-[16px] lg:text-[28px] text-white mt-[8px] sm:mt-[20px] lg:mt-[34px] sm:pb-8">
          “ It is a long established fact that a reader will be tracked
          distracted by the readable content of a page is when looking at its
          layout. The point of using Lorem of distribution it look like readable
          English “
        </p>
        <div className=" ml-2 mt-5 md:hidden block pb-8 ">
          <div className="flex gap-2 md:gap-4 pb-2 mx-[3%]">
            <img src={what} alt="Lodinge.." className="h-[35px] w-[35px]" />
            <img src={fac} alt="Lodinge.." className="h-[40px] w-[35px]" />
            <img src={you} alt="Lodinge.." className="h-[35px] w-[35px]" />
            <img src={inst} alt="Lodinge.." className="h-[35px] w-[35px]" />
            <img src={amo} alt="Lodinge.." className="h-[35px] w-[35px]" />
            <img src={big} alt="Lodinge.." className="h-[35px] w-[35px]" />
            <img src={fl} alt="Lodinge.." className="h-[45px] w-[45px] " />
          </div>
          <hr className="bg-black h-[1px] mx-[3%]" />
          <div className="flex gap-2 pt-2 mx-[3%]">
            <img src={im} alt="Lodinge.." className="h-[40px] w-[40px] " />
            <img src={Xi} alt="Lodinge.." className="h-[40px] w-[40px]" />
            <img src={link} alt="Lodinge.." className="h-[40px] w-[40px] " />
            <img src={flip} alt="Lodinge.." className="h-[40px] w-[40px] " />
            <img src={Ax} alt="Lodinge.." className="h-[40px] w-[40px] " />
            <img src={Zo} alt="Lodinge.." className="h-[40px] w-[40px] " />
          </div>
        </div>
        <div className="items-center mt-[-5px] lg:mt-[15px] pb-[20px]  mx-[10%] hidden md:block">
          <ul className="flex gap-[10px] lg:gap-[15px] px-4">
            <img src={what} className="h-[50px] w-[50px] " alt="Lodinge.." />
            <img src={fac} alt="Lodinge.." className="h-[50px] w-[50px]" />
            <img src={inst} alt="Lodinge.." className="h-[50px] w-[50px]" />
            <img src={you} alt="Lodinge.." className="h-[50px] w-[50px] " />
            <img src={flip} alt="Lodinge.." className="h-[50px] w-[50px] " />
            <img src={big} alt="Lodinge.." className="h-[50px] w-[50px] " />
            <img src={im} alt="Lodinge.." className="h-[50px] w-[50px] " />
            <img src={amo} alt="Lodinge.." className="h-[50px] w-[50px]" />
            <img src={Xi} alt="Lodinge.." className="h-[50px] w-[50px] " />
            <img src={link} alt="Lodinge.." className="h-[50px] w-[50px] " />
            <img src={Ax} alt="Lodinge.." className="h-[50px] w-[50px] " />
            <img src={Zo} alt="Lodinge.." className="h-[50px] w-[50px] " />
            <img src={fl} alt="Lodinge.." className="h-[50px] w-[50px] " />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoBox;
