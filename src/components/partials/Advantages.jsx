import React from "react";
import { Card } from "flowbite-react";
import image1 from "../../assets/images/advantages/cloud-network.gif";
import image2 from "../../assets/images/advantages/computer.gif";
import image3 from "../../assets/images/advantages/connection.gif";
import image4 from "../../assets/images/advantages/meteor-rain.gif";
import image5 from "../../assets/images/advantages/mortarboard.gif";
import image6 from "../../assets/images/advantages/shield.gif";
import "../../App.css";

const Advantages = () => {
  const advantages = [
    {
      title: "Simple",
      description:
        "Dari Miliaran Manusia, STIFIn di kelompokkan hanya dalam 5 Mesin Kecerdasasn dan 9 Personaliti Genetik. Kita hanya perlu mengingat satu diantaranya dan menjadikannya kekuatan utama fokus satu hebat.",
      image: image1,
    },
    {
      title: "Simple",
      description:
        "Dari Miliaran Manusia, STIFIn di kelompokkan hanya dalam 5 Mesin Kecerdasasn dan 9 Personaliti Genetik. Kita hanya perlu mengingat satu diantaranya dan menjadikannya kekuatan utama fokus satu hebat.",
      image: image2,
    },
    {
      title: "Simple",
      description:
        "Dari Miliaran Manusia, STIFIn di kelompokkan hanya dalam 5 Mesin Kecerdasasn dan 9 Personaliti Genetik. Kita hanya perlu mengingat satu diantaranya dan menjadikannya kekuatan utama fokus satu hebat.",
      image: image3,
    },
    {
      title: "Simple",
      description:
        "Dari Miliaran Manusia, STIFIn di kelompokkan hanya dalam 5 Mesin Kecerdasasn dan 9 Personaliti Genetik. Kita hanya perlu mengingat satu diantaranya dan menjadikannya kekuatan utama fokus satu hebat.",
      image: image4,
    },
    {
      title: "Simple",
      description:
        "Dari Miliaran Manusia, STIFIn di kelompokkan hanya dalam 5 Mesin Kecerdasasn dan 9 Personaliti Genetik. Kita hanya perlu mengingat satu diantaranya dan menjadikannya kekuatan utama fokus satu hebat.",
      image: image5,
    },
    {
      title: "Simple",
      description:
        "Dari Miliaran Manusia, STIFIn di kelompokkan hanya dalam 5 Mesin Kecerdasasn dan 9 Personaliti Genetik. Kita hanya perlu mengingat satu diantaranya dan menjadikannya kekuatan utama fokus satu hebat.",
      image: image6,
    },
  ];
  return (
    <div className="bg-inherit text-gray-50 py-5">
      <h1 className="font-extrabold text-center text-4xl">Advantages</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mx-5 pt-7 max-w-7xl md:mx-auto gap-10">
        {advantages.map((advantage, index) => (
          <div
            className="flex flex-col gap-y-6 md:flex-row items-start gap-x-4"
            key={index}>
            <img
              src={advantage.image}
              alt={advantage.title}
              width={100}
              className="bg-gray-50 p-2 rounded-full"
            />
            <div className="flex flex-col justify-start items-start">
              <h3 className="font-bold font-philosopher text-2xl">
                {advantage.title}
              </h3>
              <p className="text-justify font-ubuntu md:text-start">
                {advantage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
