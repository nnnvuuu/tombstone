import './App.css';
import React from "react";
import LiveChat from './LiveChat/LiveChat';
import Header from './Header/Header';
import HomePage from './HomePgae/HomePage';
import Carousels from './HomePgae/Carousels/Carousels';
import FlatMarkers from './Gallery/FlatMarkers/FlatMarkets';
import AboutUs from './CompanyOverview/AboutUs/AboutUs';
import ProductAndService from './CompanyOverview/ProductAndService/ProductAndService';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} /> 
          </Routes>
          <Routes>
            <Route path="/FlatMarkers" element={<FlatMarkers/>} /> 
          </Routes>

            {/* Company Overview */}
          <Routes>
            <Route path="/About_us" element={<AboutUs/>} /> 
          </Routes>

          <Routes>
            <Route path="/ProductAndService" element={<ProductAndService/>} /> 
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;