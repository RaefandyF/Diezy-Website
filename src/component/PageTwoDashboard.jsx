import React from "react";
import page2ImageDashboard from "../Assets/page-2-dashboard.png";
import "../css/pageTwoDashboard.css";
import oatmeal from "../Assets/oatmeal-img.png";

function PageTwoDashboard() {
  return (
    <div className="page2">
      <div className="px-5 py-5 w-full h-[50px] text-white text-[40px] font-bold">
        <h3>Makanan yang Cocok Buat Kamu</h3>
      </div>
      <div>
        <div className="wrap-all flex">
          {/* box redeclare */}
          <div className="box rounded mx-3">
            <div>
              <img src={oatmeal} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Oatmeal</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>200 cal</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Lihat Resep</p>
            </div>
          </div>
          <div className="box rounded mx-3">
            <div>
              <img src={oatmeal} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Oatmeal</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>200 cal</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Lihat Resep</p>
            </div>
          </div>
          <div className="box rounded mx-3">
            <div>
              <img src={oatmeal} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Oatmeal</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>200 cal</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Lihat Resep</p>
            </div>
          </div>
          <div className="box rounded mx-3">
            <div>
              <img src={oatmeal} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Oatmeal</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>200 cal</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Lihat Resep</p>
            </div>
          </div>
          <div className="box rounded mx-3">
            <div>
              <img src={oatmeal} className="px-2 py-1" alt="" />
            </div>
            <div className="px-2 py-1 text-2xl">
              <p>Oatmeal</p>
            </div>
            <div className="px-2 py-1 text-sm">
              <p>200 cal</p>
            </div>
            <div className="lihat-resep px-2 py-1 text-sm">
              <p className="text-right text-green-500">Lihat Resep</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PageTwoDashboard;
