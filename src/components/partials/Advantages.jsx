import React from "react";
import { Card } from "flowbite-react";
import image1 from "../../assets/images/advantages/cloud-network.gif";
import image2 from "../../assets/images/advantages/computer.gif";
import image3 from "../../assets/images/advantages/connection.gif";
import image4 from "../../assets/images/advantages/meteor-rain.gif";
import image5 from "../../assets/images/advantages/mortarboard.gif";
import image6 from "../../assets/images/advantages/shield.gif";

const Advantages = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="my-5">
      <h1 className="font-extrabold text-4xl">Advantages</h1>
      {images.map((image, index) => {
        <div className="max-w-sm">
          <Card
            horizontal={true}
            imgSrc={image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>;
      })}
    </div>
  );
};

export default Advantages;
