import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

import Navbar from "./components/navbar/Navbar";
import TravelServices from "./components/travel-services/TravelServices";
import HeroBanner from "./components/hero-banner/HeroBanner";
import TravelCategories from "./components/travel-categories/TravelCategories";
import PopularPackages from "./components/popular-packages/PopularPackages";
import PopularDarshan from "./components/popular-darshan/PopularDarshan";
import WhyBookUs from "./components/why-book-us/WhyBookUs";
import Footer from "./components/footer/Footer";

import Packages from "./pages/packages/Packages";
import Darshan from "./pages/darshan/Darshan";
import Cabs from "./pages/cabs/Cabs";
import CabResults from "./pages/cab-results/CabResults";
import PackageDetails from "./pages/package-details/PackageDetails";
import DarshanDetails from "./pages/darshan-details/DarshanDetails";
import Heritage from "./pages/heritage/Heritage";
import HeritageDetails from "./pages/heritage-details/HeritageDetails";
import HotelsListing from "./pages/hotels/HotelsListing";
import HotelDetails from "./pages/hotels/HotelDetails";
import HotelBooking from "./pages/hotels/HotelBooking";
import AboutContact from "./pages/about-contact/AboutContact"


import "./styles/_global.scss";

function Home() {
  return (
    <>
      <div className="app-layout">
        <Navbar />

      <main className="app-content">
        <TravelServices />
        <HeroBanner />
        <TravelCategories />
        
        <PopularPackages />
        <PopularDarshan />
        <WhyBookUs />
      </main>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/darshan" element={<Darshan />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/cab-results" element={<CabResults />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/darshan/:id" element={<DarshanDetails />} />
        <Route path="/heritages" element={<Heritage />} />
        <Route path="/heritages/:id" element={<HeritageDetails />} />
        <Route path="/hotels" element={<HotelsListing />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/hotels/:id/booking" element={<HotelBooking />} />
        <Route path="/about-us" element={<AboutContact />} />
        
    </Routes>
  
    </>
  );
}


export default App;
