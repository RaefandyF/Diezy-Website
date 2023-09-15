import React from 'react';
// import './App.css';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Home() {
    return(
        <>
        <div className="bg position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="mainPage col-md-5 p-lg-5 mx-auto my-5" style={{width:"70rem"}}>
            <h1 className="mainText display-4 fw-normal">Senang Bertemu Anda Kembali</h1>
            <p style={{color:"white"}} className="mainText lead fw-normal">Jangan Menyerah Lanjutkan</p>
            <input className='mainSearch' style={{borderRadius:"0.5rem"}} type="text" placeholder='Search'/>
            </div>
        <img src={require('../Assets/login-bg.JPG')}>
        </img>
        </div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </>

    )
}

export default Home;