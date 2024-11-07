import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img
        src={img}
        alt="img"
        className="w-full lg:w-1/2 h-auto" // Adjust the size here
      />

      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
        Tick-Tock, Its Time for Something New
        </h1>
        <p>
        Every tick tells a story—find the perfect watch to express your individuality and embrace the art of timekeeping.
        </p>
        <p>
        Chic Timepieces: Discover Your Next Statement Watch  where timeless elegance awaits you! Discover the perfect timepiece for every moment, from classic designs to modern styles. Our exclusive collection features watches that elevate your wrist game, showcasing craftsmanship you can trust. Whether you’re looking for a statement piece or a practical everyday watch, we have something for everyone. Make every second count with our stunning selection and find your signature watch today. Experience luxury in every tick-tock, and let us help you express your unique style!
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
