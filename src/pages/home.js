import React from "react";
// import './App.css';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import "../css/home.css";
import buttonGif from "../Assets/button.gif";

function Home() {
  return (
    <div className="no-scrollbar">
      <div className="home-page1 py-5">
        <div className="h-3/4 flex justify-center items-center">
          <div className="text-light wrap1">
            <div>
              <h1 className="text-[50px]">Selamat Datang di Diezy</h1>
            </div>
            <div>
              <h3 className="text-[20px]">
                Personal Asisten Diet Kamu. Klik Tanda untuk Melanjutkan
              </h3>
            </div>
            <div className="flex justify-center items-center mt-5">
              <img src={buttonGif} alt="gif1" className="w-20 h-20 py-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div
          className="mainPage col-md-5 p-lg-5 mx-auto my-5"
          style={{ width: "70rem" }}
        >
          <h1 className="mainText display-4 fw-normal">
            Senang Bertemu Anda Kembali
          </h1>
          <p style={{ color: "white" }} className="mainText lead fw-normal">
            Jangan Menyerah Lanjutkan
          </p>
          <input
            className="mainSearch"
            style={{ borderRadius: "0.5rem" }}
            type="text"
            placeholder="Search"
          />
        </div>
        <img src={require("../Assets/login-bg.JPG")}></img>
      </div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
}

export default Home;
