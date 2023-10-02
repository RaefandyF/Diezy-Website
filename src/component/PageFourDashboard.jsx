import React from "react";
import "../css/pageFourDashboard.css";
import squat from "../Assets/squat.png";
import Button from "../component/Button";

function PageFourDashboard() {
  return (
    <div className="page4">
      <div className="flex">
        <div className="diezyPlusBanner">
          <Button
            className={"bg-white px-2 py-2 w-[80px] rounded text-[#2c832a] font-bold  buttonDaftar"}
            text={"Daftar"}
          />
        </div>
      </div>
    </div>
  );
}

export default PageFourDashboard;
