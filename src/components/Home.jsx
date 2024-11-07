import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-background text-orange-700 font-semibold text-6xl">
      Timeless  <br></br>  Your <br></br> Ultimate <br></br>Watch <br></br>design 
        </h1>
        <p className="text-background text-white">
        Discover a curated collection of luxury<br></br> watches, blending classic craftsmanship <br></br> with modern design. From elegant<br></br> timepieces to sporty chronographs,
        {/* <br></br> we have something for every style and occasion. <br></br> */}
        {/* Shop now and elevate your wrist game */}
           {/* Our extensive menu boasts a wide variety of game-day favorites, including unique Vietnamese appetizers, that only a thrilling game night can bring!? */}
        </p>
        <div className="lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
