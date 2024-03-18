import './App.css';
import Appoinment from './Component/Appoinment';
import Blogs from './Component/Blogs';
import BussinessHours from './Component/BussinessHours';
import CompanyInfoBox from './Component/CompanyInfoBox';
import EnquiryForm from './Component/EnquiryForm';
import Footer from './Component/Footer';
import Gallery from './Component/Gallery';
import Home from './Component/Home';
import ProductCard from './Component/ProductCard';
import ServiceBox from './Component/ServiceBox';

function App() {
  return (
  <>
  <Home/>
  <CompanyInfoBox/>
  <ServiceBox/>
  <ProductCard/>
  <Blogs/>
  <Gallery/>
  <BussinessHours/>
  <EnquiryForm/>
  <Appoinment/>
 <Footer/>
  </>
  );
}

export default App;
