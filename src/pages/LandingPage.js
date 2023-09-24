import React from "react";
import buttonGif from "../Assets/button.gif";
import "../css/home.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
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
            <Link to="/introduction">
              <img src={buttonGif} alt="gif1" className="w-20 h-20 py-0" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
