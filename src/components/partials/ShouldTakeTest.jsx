import React, { useEffect } from "react";
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
import { motion } from "framer-motion";

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
    "Mengetahui Kekuatan Jasmani dan Organ Tubuh",
  ];
  // List directory

  return (
    <div className="bg-inherit block text-gray-900 pt-16 md:pt-24">
      <h1 className="font-extrabold text-center text-4xl mb-5 lg:mb-12 md:mb-0 font-philosopher" id="whoshouldtakethistest">
        Manfaat Tes STIFIn
      </h1>
      <div className="grid grid-cols-3 gap-4 mx-5">
        {users.map((user, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-start h-16 mb-4 px-4 bg-[#FFB218] rounded-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={images[index]}
              alt="user"
              className="object-cover w-12 h-12 rounded-full"
            />
            <h3 className="font-bold font-ubuntu">{user}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShouldTakeTest;
