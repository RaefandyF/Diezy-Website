import React from "react";
import HeaderDashboard from "../component/HeaderDashboard";
import ImageCarousel from "../component/ImageCarousel";
import imageCar1 from "../Assets/imageCar1.png";
import imageCar2 from "../Assets/imageCar2.png";
import imageCar3 from "../Assets/imageCar3.png";
import Carousel from "react-bootstrap/Carousel";
import oatmeal from "../Assets/oatmeal-img.png";
import DiezyPlusBanner from "../component/PageFourDashboard";
import Footer from "../component/Footer";
import "../css/pageTwoFood.css";

function FoodDashboard() {
  return (
    <div className="w-full bg-[#7ed957]">
      <HeaderDashboard />
      <div className="px-[50px] py-[50px]">
        <Carousel>
          <Carousel.Item>
            <div className="w-full h-full">
              <img src={imageCar1} />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <div className="w-full h-full">
                <img src={imageCar2} />
              </div>
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-full h-full">
              <img src={imageCar3} />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="page2Food">
        <div className="d-flex justify-content-center px-5 pt-10 w-full h-[50px] text-white text-[40px] font-bold">
          <h3>Kejar Target Dietmu dengan Menu-menu Berikut</h3>
        </div>
        <div>
          <div className="pt-20 flex d-flex justify-content-center">
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

            <br></br>
          </div>
          <div className="wrap-all pt-4 flex d-flex justify-content-center">

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

      <DiezyPlusBanner />
      <Footer />

    </div>



  );
}

export default FoodDashboard;
