import React, { useState } from "react";
import HeaderDashboard from "../component/HeaderDashboard";
import ProgressSemiCircularBar from "../component/ProgressSemiCircularBar";
import '../css/progressDashboard.css'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const primaryData = [
  {weight: 70},
  {weight: 65},
  {weight: 62},
  {weight: 55},
  {weight: 50}
]

const labels = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

export const data = {
  labels: labels, 
  datasets: [
    {
      label: 'Weight',
      data: primaryData.map((da)=>da.weight),
      borderColor: 'rgb(255, 99, 132)',
    }
  ]
}

function ProgressDashboard() {
  return (
    <div>
      <div className="progressDashboard w-full h-screen bg-[#7ed957]">
        <HeaderDashboard />
        <div className="w-full flex items-center justify-center mt-5">
          <div className="text-[40px] text-green-800 font-bold">
            <h3>PROGRESS DIET KAMU</h3>
          </div>
        </div>
        <div>Tes 1</div>
        <div className="w-full flex items-center justify-center">
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
      <div className="progressDash2 w-full h-screen">
        <div className="flex justify-between px-4">
          <div>
            <h1 className="font-bold text-5xl text-white">Progress Berat Badan Kamu</h1>
          </div>
          <div>
            <button className="text-3xl bg-[#2C832A] px-2 py-2 rounded text-white">Tambah</button>
          </div>
        </div>
        <div className="w-full h-[500px] flex items-center justify-center mt-[50px]">
          <div className=" w-[900px] h-full mt-[90px]">
            <div className="bg-white rounded ">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressDashboard;
