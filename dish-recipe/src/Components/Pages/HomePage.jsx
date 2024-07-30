import React from "react";
import Slider from "../Slider.Component";
import Card1 from "../CardSlider/Card1.Component";
import Card2 from "../CardSlider/Card2.Component";
import Card3 from "../CardSlider/Card3.Component";


const HomePage = () => {
  return (
    <>
      <div className="container font-2xl font-bold font-sans flex justify-center pt-10">
        <h1>Food Recipe from around the world!</h1>
      </div>
      <Slider />
      <div className="pt-12">
        <Card1 />
      </div>
        <Card2 />
        <Card3 />
      
    </>
  );
};

export default HomePage;
