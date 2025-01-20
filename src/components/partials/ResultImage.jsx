import React from 'react';
import Image1 from "../../../public/mesin-kecerdasan-buatan.jpg";

const ResultImage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 py-5"> 
      <h1 
        className="font-extrabold font-philosopher text-white text-center text-4xl pt-2 mb-5 px-2" 
        id="results">
        Hasil Tes STIFIn
      </h1>
      <img src={Image1} alt="Image1" style={{ width: '40%' }} /> 
    </div>
  );
};

export default ResultImage;