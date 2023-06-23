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
      title: "Akurat",
      description:
        "Memiliki akurasi dengan tingkat Validitas (Paper & Pencil) dan Reliabilitas (Finggerprint) Tinggi yaitu 95% saat dilakukan uji coba tes. STIFIn menguraikan cara kerja otak berdasarkan sistem operasi, bukan kapasitas hardwarenya.",
      image: image2,
    },
    {
      title: "Aplikatif",
      description:
        "STIFIn memiliki keunggulan yang sifatnya Multi Angle Field dimana hasilnya ini dapat di terapkan dalam segala bidang seperti Learning, Teaching, Parenting, Bisnis, Profesi, Suri Rumah, Couple, Health.",
      image: image3,
    },
    {
      title: "1x SEUMUR HIDUP",
      description:
        "Dari Miliaran Manusia, STIFIn di kelompokkan hanya dalam 5 Mesin Kecerdasasn dan 9 Personaliti Genetik. Kita hanya perlu mengingat satu diantaranya dan menjadikannya kekuatan utama fokus satu hebat.",
      image: image4,
    },
    {
      title: "DERIVASI AL QUR'AN",
      description:
        "Konsep STIFIn dikompilasi dari teori-teori 3 Ahli Psikologi yang riset ilmiahnya sudah diakui dan di ajarkan dikampus. Hasil kompilasi tersebut disesuaikan dengan Al-Qur’an & Hadits. Jika ada teori yang tidak sesuai dengan Al-Qur’an & Hadits maka Konsep STIFInnya di revisi.",
      image: image5,
    },
    {
      title: "Metode Tes STIFIn",
      description:
        "Menggunakan Tes Sidik Jari sehingga hasil tes tidak di pengaruhi oleh faktor kondisi fisik dan psikis seseorang. Sehingga hanya perlu dilakukan 1x seumur hidup, karena hasilnya tetap sama tidak akan berubah.",
      image: image6,
    },
  ];
  return (
    <div
      id="advantage"
      className="bg-inherit text-gray-50 py-5">
      <h1 className="font-extrabold text-center text-4xl">Advantages</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mx-5 pt-7 lg:gap-5 max-w-7xl md:mx-auto">
        {advantages.map((advantage, index) => (
          <div
            className="flex flex-col gap-y-6 md:flex-row items-start gap-x-4 card p-5 border-2 rounded-lg border-transparent transition-colors duration-700 hover:border-yellow-200 from-gold via-slate-50 to-black"
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
              <p className="text-justify text-sm font-ubuntu md:text-start">
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
