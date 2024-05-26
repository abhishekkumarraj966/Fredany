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
const Layout = () => {
  return (
    <div className="">
      <Home />
      <CompanyInfoBox />
      <ServiceBox />
      <ProductCard />
      <Blogs />
      <Gallery />
      <BussinessHours />
      <EnquiryForm />
      <Appoinment />
    </div>
  );
};

export default Layout;
