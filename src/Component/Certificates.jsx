import React, { useState } from "react";
import CertificatesAlbum from "./CertificatesAlbum";
import Slider from "react-slick";
import AppLayout from "./AppLayout" 
const Certificates = () => {
  let [isPopOpen, setIsPopupOpen] = useState(false);
  let [imsg, setImage] = useState(0);

  let openPopup = (ImageNo) => {
    setIsPopupOpen(true);
    setImage(ImageNo);
  };
  return (
    <div className="p-[50px] lg:p-[120px] bg-[#7D3C13]" id="gal">
      <AppLayout>
      <p className="font-bold text-[15px] text-center sm:text-[28px] lg:text-[32px]   text-white ">
      Certificates
      </p>

      <div className="mt-[30px] sm:mt-[50px] lg:mt-[100px]">
        <div className="flex space-x-[9px] sm:space-x-[20px] lg:space-x-[30px] ">
          <img
            src="/assets/unsplash_-aCDwxLAlzI (1).jpg"
            className="w-[112px] h-[149px] sm:h-[360px] sm:w-[300px] lg:w-[413px] lg:h-[549px]"
            onClick={() => openPopup(0)}
          />
          <div className=" ">
            <img
              src="/assets/unsplash_SVb7lJc1tZ0.jpg"
              className="w-[168px] h-[44px] sm:w-[380px]  sm:h-[125px] lg:w-[621px] lg:h-[156px] 
                     "
              onClick={() => openPopup(1)}
            />
            <img
              src="/assets/unsplash_7tOV35hnkao.jpg"
              className="w-[168px] h-[99px] mt-[8px] sm:mt-[15px] sm:h-[220px] sm:w-[380px] lg:w-[621px] lg:h-[366px] lg:mt-[20px] "
              onClick={() => openPopup(0)}
            />
          </div>
        </div>
        <div className="flex space-x-[9px] sm:space-x-[20px] lg:space-x-[30px] mt-[7px] sm:mt-[10px] lg:mt-[20px]">
          <div>
            <img
              src="/assets/unsplash_ea-Vg1hWjEI.jpg"
              className="w-[168px] h-[95px] sm:w-[310px] sm:h-[220px] lg:w-[620px] lg:h-[349px] "
              onClick={() => openPopup(1)}
            />
            <img
              src="/assets/unsplash_tuJtzghMuEw.jpg"
              className="w-[168px] h-[46px] mt-[8px] sm:mt-[12px]  sm:w-[310px] sm:h-[200px] lg:w-[620px] lg:h-[185px] lg:mt-[15px]"
              onClick={() => openPopup(0)}
            />
          </div>
          <div>
            <img
              src="/assets/unsplash_W5dsm9n6e3g.jpg"
              className="w-[112px] h-[149px] sm:w-[380px] sm:h-[430px] lg:w-[413px] lg:h-[549px]"
              onClick={() => openPopup(1)}
            />
          </div>
        </div>
      </div>
      {isPopOpen && (
        <CertificatesAlbum
          setIsPopupOpen={setIsPopupOpen}
          imsg={imsg}
          setImage={setImage}
        />
      )}
      </AppLayout>
    </div>
  );
};



export default Certificates