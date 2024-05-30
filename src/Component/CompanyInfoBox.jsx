import React from "react";
import p1 from "./assites/imge.jpg";
import what from "./assites/WhatsApp.png";
import fac from "./assites/Facebook Circled.png";
import you from "./assites/YouTube.png";
import inst from "./assites/Instagram.png";
import amo from "./assites/amo.png";
import big from "./assites/big.png";
import im from "./assites/im-logo-512X512.png";
import link from "./assites/Linkdin.png";
import flip from "./assites/flip.png";
import Xi from "./assites/Xa.png";
const CompanyInfoBox = () => {
  return (
    <div className="bg-[#7D3C13] " id="about">
      <div className="w-[90vw] pt-[12px] sm:pt-[25px] lg:pt-[43px] mx-auto h-[302px] sm:h-[300px] lg:h-[520px] flex flex-col  items-center ">
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
        <div className=" ml-2 mt-5 sm:hidden block  ">
          <div className="flex gap-2 pb-2 mx-[5%]">
            <img src={what} alt="facebook logo" className="h-[35px] w-[35px]" />
            <img src={fac} alt="facebook logo" className="h-[35px] w-[35px]" />
            <img src={you} alt="facebook logo" className="h-[35px] w-[35px]" />
            <img
              src={inst}
              alt="facebook logo"
              className="h-[35px] w-[35px]"
            />
            <img src={amo} alt="facebook logo" className="h-[35px] w-[35px]" />
            <img src={big} alt="facebook logo" className="h-[35px] w-[35px]" />
   
          </div>
          <hr className="bg-black h-1 mx-[3%]" />
          <div className="flex gap-2 pt-2 mx-[18%]">
            <img src={im} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={Xi} alt="facebook logo" className="h-[40px] w-[38px]" />
            <img
              src={link}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img
              src={flip}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
          </div>
        </div>
        <div className="items-center mt-[-5px] lg:mt-[15px]  mb-4 mx-[15%] hidden sm:block">
          <ul className="flex gap-[10px] lg:gap-[15px] px-4">
            <img src={what} className="h-[50px] w-[50px] " alt="whataap" />
            <img src={fac} alt="facbook" className="h-[50px] w-[50px]" />
            <img src={inst} alt="instagram" className="h-[50px] w-[50px]" />
            <img
              src={you}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[60px]"
            />
            <img
              src={flip}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[60px]"
            />
            <img
              src={big}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[60px]"
            />
            <img
              src={im}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[60px]"
            />
            <img
              src={amo}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[60px]"
            />
            <img
              src={Xi}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[60px]"
            />
            <img
              src={link}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[60px]"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoBox;
