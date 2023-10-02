import React from "react";
import HeaderDashboard from "../component/HeaderDashboard";
import ImageCarousel from "../component/ImageCarousel";
import imageCar1 from "../Assets/imageCar1.png";
import imageCar2 from "../Assets/imageCar2.png";
import imageCar3 from "../Assets/imageCar3.png";
import Carousel from "react-bootstrap/Carousel";

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
    </div>
  );
}

export default FoodDashboard;
