import React from "react";
import Home from "./Home";
import CompanyInfoBox from"./CompanyInfoBox";
import ServiceBox from"./ServiceBox"
import ProductCard from "./ProductCard"
import Blogs from"./Blogs"
import Gallery from"./Gallery"
import BussinessHours from"./BussinessHours"
import EnquiryForm from "./EnquiryForm"
import Appoinment from "./Appoinment"
import Service from "./Service";
import Feedbackform from "./Feedbackform";
import Review from "./Review";
import Certificates from "./Certificates";
import Offer from "./Offer";
const Layout = () => {
  return (
    <div className="">
      <Home />
      <CompanyInfoBox />
      <ServiceBox />
      <ProductCard />
      <Offer/>
      <Blogs />
      <Service/>
      <Gallery />
      <BussinessHours />
      <Certificates/>
      
      <EnquiryForm />
      <Feedbackform/>
      <Review/>
      <Appoinment />
    </div>
  );
};

export default Layout;
