import React from "react";
import HeroSlider from "react-slick";

import food2 from "../Components/images/food2.jpg";
import food3 from "../Components/images/food4.jpg";
import food from "../Components/images/food.jpg";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container">
        <HeroSlider {...settings}>
          <div className=" h-56 md:h-80 py-3 ml-2">
            <h3>
              <img className="img1 ml-5 gap-4 rounded-lg" src={food} alt="" />
            </h3>
          </div>
          <div className=" h-56 md:h-80 py-3 ml-2">
            <h3>
              <img className="img2 ml-5 gap-4 rounded-lg" src={food2} alt="" />
            </h3>
          </div>
          <div className=" h-56 md:h-80 py-3 ml-2 ">
            <h3>
              <img className="img3 ml-5 gap-4 rounded-lg" src={food3} alt="" />
            </h3>
          </div>
        </HeroSlider>
      </div>
    </>
  );
};

export default Slider;
