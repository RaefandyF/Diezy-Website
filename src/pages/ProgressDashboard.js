import React, { useState } from "react";
import HeaderDashboard from "../component/HeaderDashboard";
import ProgressSemiCircularBar from "../component/ProgressSemiCircularBar";
import svgTambah from '../Assets/tambah-svg.svg'
import svgEdit from '../Assets/svg-edit.svg'
import '../css/progressDashboard.css'
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,

  //bar component chart js
  BarElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, 
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

export const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}

const barLabels = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", 
"Sabtu", "Minggu"]

const primaryBarData = [
  {kalori: 900},
  {kalori: 800},
  {kalori: 850},
  {kalori: 750},
  {kalori: 690},
  {kalori: 600},
  {kalori: 100}
]

export const barData = {
  labels: barLabels,
  datasets: [
    {
      label: 'jumlah kalori',
      data: primaryBarData.map((pb)=>pb.kalori),
      backgroundColor: 'rgba(36, 145, 65)'
    }
  ]
}


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
      <div className="progressDash2 py-[100px] w-full h-screen">
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
      <div className="progressDash3 w-full h-screen">
        <div className="py-[50px] px-[20px] font-bold text-5xl text-white">
          <h3>Jumlah Kalori Minggu Ini</h3>
        </div>
        <div className="w-full h-[500px] flex items-center justify-center mt-[50px]">
          <div className="w-[900px] h-full mt-[90px]">
            <div className="bg-white rounded">
              <Bar options={optionsBar} data={barData} />
            </div>
          </div>
        </div>
      </div>
        <div className="progressDash4 w-full h-screen">
          <div className="w-full flex px-[30px] py-[50px] justify-between">
            <div>
              <h1 className="font-bold text-5xl text-white">Progress Berat Badan Kamu</h1>
            </div>
            <div className="flex">
              <div>
                <button className="flex mx-2">
                  <img src={svgTambah} className="w-[20px] h-[20px] mx-2" />
                  Tambah
                </button>
              </div>
              <div className="flex mx-2">
                <button className="flex mx-2">
                  <img src={svgEdit} className="w-[20px] h-[20px] mx-2" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProgressDashboard;
