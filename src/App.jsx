// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Insights from "./pages/insights/Insights";
import Careers from "./pages/careers/Careers";
import Contact from "./pages/contact/Contact";
import Industries from "./pages/industries/Industries";
import Services from "./pages/services/Services";
import Terms from "./layouts/components/terms/Terms";
import Privacy from "./layouts/components/privacy/Privacy";
import WhoWeAre from "./pages/about/whoWeAre/WhoWeAre";
import ScrollToTop from "./layouts/components/ScrollToTop";

function App() {
  // const router = createBrowserRouter (
  //   createroutesFromElements(

  //   )
  // )

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/who we are" element={<WhoWeAre />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
