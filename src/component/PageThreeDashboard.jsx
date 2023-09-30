import React from "react";
import page2ImageDashboard from "../Assets/page-2-dashboard.png";
import "../css/pageThreeDashboard.css";
import oatmeal from "../Assets/oatmeal-img.png";
import squat from "../Assets/squat.png";

function PageThreeDashboard() {
  return (
    <div className="page3">
      <div className="px-5 py-5 w-full h-[50px] text-white text-[40px] font-bold">
        <h3>Imbangi Dengan Olahraga Berikut</h3>
      </div>
      <div>
        <div className="wrap-all flex">
          {/* box redeclare */}
          <div className="box rounded mx-3">
            <div>
              <img src={squat} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Squat</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>10x, 2 repetisi</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Ikuti Latihan</p>
            </div>
          </div>
          <div className="box rounded mx-3">
            <div>
              <img src={squat} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Squat</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>10x, 2 repetisi</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Ikuti Latihan</p>
            </div>
          </div>
          <div className="box rounded mx-3">
            <div>
              <img src={squat} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Squat</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>10x, 2 repetisi</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Ikuti Latihan</p>
            </div>
          </div>
          <div className="box rounded mx-3">
            <div>
              <img src={squat} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Squat</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>10x, 2 repetisi</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Ikuti Latihan</p>
            </div>
          </div>
          <div className="box rounded mx-3">
            <div>
              <img src={squat} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Squat</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>10x, 2 repetisi</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Ikuti Latihan</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PageThreeDashboard;
