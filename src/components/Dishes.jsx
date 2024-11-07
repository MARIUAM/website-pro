import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
// import img7 from "../assets/img/img7.jpg";
// import img8 from "../assets/img/img8.jpg";
// import img9 from "../assets/img/img9.jpg";
// import img10 from "../assets/img/img10.jpg";
// import img11 from "../assets/img/img11.jpg";
// import img12 from "../assets/img/img12.jpg";
// import img13 from "../assets/img/img13.jpg";
// import img14 from "../assets/img/img14.jpg";
// import img15 from "../assets/img/img15.jpg";
// import img16 from "../assets/img/img16.jpg";
// import img17 from "../assets/img/img17.jpg";
// import img18 from "../assets/img/img18.jpg";

import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our latest and unique watch 
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Latest Watch" price="$80.99" />
        <DishesCard img={img2} title="Latest Watch" price="$90.99" />
        <DishesCard img={img3} title="Latest Watch" price="$67.99" />
        <DishesCard img={img4} title="Latest Watch" price="$34.99" />
        <DishesCard img={img5} title="Latest Watch" price="$15.99" />
        <DishesCard img={img6} title="Latest Watch" price="$70.99" />
        {/* <DishesCard img={img7} title="Latest Watch" price="$70.99" />
        <DishesCard img={img8} title="Latest Watch" price="$70.99" /> 
        <DishesCard img={img9} title="Latest Watch" price="$70.99" /> 
        <DishesCard img={img10} title="Latest Watch" price="$70.99" /> 
        <DishesCard img={img11} title="Latest Watch" price="$70.99" />
        <DishesCard img={img12} title="Latest Watch" price="$70.99" />
        <DishesCard img={img13} title="Latest Watch" price="$70.99" />
        <DishesCard img={img14} title="Latest Watch" price="$70.99" />
        
        <DishesCard img={img15} title="Latest Watch" price="$70.99" />
        <DishesCard img={img16} title="Latest Watch" price="$70.99" />
        <DishesCard img={img17} title="Latest Watch" price="$70.99" />
        <DishesCard img={img18} title="Latest Watch" price="$70.99" /> */}

             </div>
    </div>
  );
};

export default Dishes;
