import React from "react";

const Disadvantages = () => {
  const listDisadvantages = [
    "Tidak Mengenal Jati Diri",
    "Tidak Punya Motivasi",
    "Cara Belajar Tidak Sesuai",
    "Tidak Punya Semangat Belajar",
    "Tidak Baik dalam Bersosial",
    "Oraganisasi Bermasalah",
    "Mengalami Trial Error",
    "Tidak Saling Memahami",
    "Salah Jurusan Sekolah",
    "Pola Asuh Anak Tepat",
    "Pola Komunikasi Tidak Sesuai",
    "Tidak Mendapatkan Karir yang Tepat",
  ];
  return (
    <div className="bg-inherit py-5">
      <h1 className="font-extrabold text-gray-50 py-5 text-center text-5xl">
        Kerugian jika kamu tidak mengikuti Test STIFIn
      </h1>
      <div className="flex flex-wrap justify-evenly md:gap-1">
        {listDisadvantages.map((item, index) => (
          <div
            key={index}
            className="flex p-4 md:mb-4 mb-1 lg:w-1/4 md:w-1/3 w-3/4 text-sm text-red-800 hover:bg-red-500 hover:text-red-100 transition-all rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert">
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Info</span>
            <div className="text-md font-bold">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disadvantages;
