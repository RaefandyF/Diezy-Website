import React from 'react'
import HeaderDashboard from '../component/HeaderDashboard'
import "../css/homeDashboard.css"
import SemiCircleProgressBar from 'react-progressbar-semicircle'

function HomeDashboard() {
  return (
    <div className='homeDashboard'>
        <HeaderDashboard />
        <div className='w-full flex items-center justify-center mt-5'>
          <div className='text-[40px]'>
            <div className='font-bold text-green-800'>
              <h3>PROGRESS DIET KAMU</h3>
            </div>
            <div>
              <h5>{"10 Hari (tersisa 20 Hari)"}</h5>
            </div>
            <div className='flex items-center justify-center mt-5'>
              <SemiCircleProgressBar percentage={65} showPercentValue />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeDashboard