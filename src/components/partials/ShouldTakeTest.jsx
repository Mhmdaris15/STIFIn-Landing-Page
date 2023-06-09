import React from "react";
import image1 from "../../assets/images/users/business-2.png";
import image2 from "../../assets/images/users/business.png";
import image3 from "../../assets/images/users/career.png";
import image4 from "../../assets/images/users/leadership.png";
import image5 from "../../assets/images/users/money.png";
import image6 from "../../assets/images/users/portfolio.png";
import image7 from "../../assets/images/users/profile.png";
import image8 from "../../assets/images/users/service.png";
import image9 from "../../assets/images/users/talk.png";
import image10 from "../../assets/images/users/termination.png";
import image11 from "../../assets/images/users/work.png";
import image12 from "../../assets/images/users/growth.png";
import image13 from "../../assets/images/users/motivation.png";

const ShouldTakeTest = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];
  const users = [
    "Rekomendasi Pemilihan Jurusan Sekolah / Kuliah",
    "Rekomendasi Pemilihan Pasangan Ideal",
    "Rekomendasi Pemilihan Profesi dan Karir",
    "Pola Komunikasi sesuai Personaliti Genetik",
    "Pola Belajar sesuai Personaliti Genetik",
    "Mengenal Perilaku dan Kepribadian Diri",
    "Pola Sirkulasi Hubungan Keluarga / Organisasi",
    "Mengetahui Kelebihan dan Kekurangan Diri",
    "Mengetahui Motivasi dan Semangat Belajar Anak",
    "Mengetahui Pola Asuh Anak yang tepat",
    "Cara Belajar dan Mengajar tepat dan Nyaman",
    "Rekomendasi Bisnis yang sesui Genertik",
    "Mengetahui Kekuatan Jasmani dan Organ Tubuh",
  ];
  // List directory

  return (
    <div className="bg-inherit text-gray-50 pt-24 md:pt-0">
      <h1
        className="font-extrabold text-center text-4xl mb-5"
        id="whoshouldtakethistest">
        Who should Take this Test?
      </h1>
      <div className="flex flex-wrap justify-evenly gap-x-2 mt-3">
        {/* card */}
        {/* looping with for loop then create a card */}
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-start lg:w-1/4 w-full md:max-w-xl h-16 mb-4 px-4 bg-[#FFB218] rounded-md">
            <img
              src={images[index]}
              alt="user"
              className="object-cover w-12 h-12 rounded-full"
            />
            <h3 className="font-bold">{user}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShouldTakeTest;
