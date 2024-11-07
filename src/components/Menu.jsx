import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
import menu4 from "../assets/img/menu4.jpg";
 import menu5 from "../assets/img/menu5.jpg";
 import menu6 from "../assets/img/menu6.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        uniqe expensive watch 
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Unique watch" price="$16.99" />
        <DishesCard img={menu2} title="Unique watch" price="$18.99" />
        <DishesCard img={menu3} title="Unique watch" price="$14.99" />
        <DishesCard img={menu4} title="Unique watch" price="$14.99" />
        <DishesCard img={menu5} title="Unique watch" price="$14.99" />
        <DishesCard img={menu6} title="Unique watch" price="$14.99" />


      </div>
    </div>
  );
};

export default Menu;
