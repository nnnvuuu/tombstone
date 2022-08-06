import './App.css';
import React from "react";
import LiveChat from './LiveChat/LiveChat';
import Header from './Header/Header';
import HomePage from './HomePgae/HomePage';
import Carousels from './HomePgae/Carousels/Carousels';
import FlatMarkers from './Gallery/FlatMarkers/FlatMarkets';
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
       </BrowserRouter>
    </div>
  );
}

export default App;