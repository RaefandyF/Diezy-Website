import React from "react";
// import './App.css';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import buttonGif from "../Assets/button.gif";
import loadingGif from "../Assets/loading1.gif";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import InputCustomerData from "./InputCustomerData";
import IntroductionPage from "./introduction";

function Home() {
  return (
    // Halaman 1    
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/input-customer-data" element={<InputCustomerData />} />
          <Route path="/introduction" element={<IntroductionPage/>}/>
          
        </Routes>
      </Router>
  );
}

export default Home;
