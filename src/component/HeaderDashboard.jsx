import React from 'react'
import logoDiezy from '../Assets/logoDiezy.png'
import cart from '../Assets/cart.png'
import notif from '../Assets/notif.png'
import profile from '../Assets/profile.png'
import '../css/headerDashboard.css'
import { Link } from 'react-router-dom'

function HeaderDashboard() {
  return (
    <div className='flex justify-between px-5 py-1'>
        <div className='w-full flex'>
            <img className='logo-diezy' src={logoDiezy} alt="" />
            <div className=''>
                <div className='mx-3 flex mt-3 mb-3'>
                    <Link to={''}><p className='mx-1 text-[20px] text-white'>Home</p></Link>
                    <Link to={''}><p className='mx-1 text-[20px] text-white'>Progress</p></Link>
                    <Link to={'/food-dashboard'}><p className='mx-1 text-[20px] text-white'>Food</p></Link>
                    <p className='mx-1 text-[20px] text-white'>Exercise</p>
                    <p className='mx-1 text-[20px] text-white'>History</p>
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='flex items-center justify-center mx-1'>
                <img className='cart-logo' src={cart} />
            </div>
            <div className='flex items-center justify-center mx-1'>
                <img className='notif-logo' src={notif} />
            </div>
            <div className='flex items-center justify-center mx-1'>
                <img src={profile} className='profil-logo' />
            </div>
        </div>
    </div>
  )
}

export default HeaderDashboard