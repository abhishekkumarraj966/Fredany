import Footer from "./Component/Footer";
import "./App.css";
import Layout from "./Component/Layout";
import Navbar from "./Component/Navbar";
import Probuctpage from "./Component/Probuctpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogespag from "./Component/Blogespag";
function App() {
  return (
    <div className="bg-[#ECECEC]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/blogespag/:id" element={<Blogespag />} />
          <Route path="/productpage/:id" element={<Probuctpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
