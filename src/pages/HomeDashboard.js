import React from "react";
import HeaderDashboard from "../component/HeaderDashboard";
import "../css/homeDashboard.css";

import PageTwoDashboard from "../component/PageTwoDashboard";
import PageThreeDashboard from "../component/PageThreeDashboard";
import PageFourDashboard from "../component/PageFourDashboard";
import Footer from "../component/Footer";
import ProgressSemiCircularBar from "../component/ProgressSemiCircularBar";

function HomeDashboard() {
  return (
    <div>
      <div className="homeDashboard">
        <HeaderDashboard />
        <div className="w-full flex items-center justify-center mt-5">
          <div className="text-[40px]">
            <div className="font-bold text-green-800">
              <h3>PROGRESS DIET KAMU</h3>
            </div>
            <div>
              <h5>{"10 Hari (tersisa 20 Hari)"}</h5>
            </div>
            <ProgressSemiCircularBar />
          </div>
        </div>
      </div>
      <PageTwoDashboard />
      <PageThreeDashboard />
      <PageFourDashboard />
      <Footer />
    </div>
  );
}

export default HomeDashboard;
