import React from "react";
import HeaderDashboard from "../component/HeaderDashboard";
import ProgressSemiCircularBar from "../component/ProgressSemiCircularBar";

function ProgressDashboard() {
  return (
    <div className="w-full h-screen bg-[#7ed957]">
      <HeaderDashboard />
      <div className="w-full flex items-center justify-center mt-5">
        <div className="text-[40px] text-green-800 font-bold">
          <h3>PROGRESS DIET KAMU</h3>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <div className="mx-2">
          <p className="text-white text-[40px]">10 Hari</p>
        </div>
        <div className="mx-2">
          <p className="text-red-600 text-[40px]">{`tersisa (20 Hari)`}</p>
        </div>
      </div>
      <div className="text-[70px]">
        <ProgressSemiCircularBar />
      </div>
    </div>
  );
}

export default ProgressDashboard;
