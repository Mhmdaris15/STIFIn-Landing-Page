import React from "react";

const PriceList = () => {
  const priceLists = [
    {
      category: "PERSONAL",
      nums: "1 - 2 Orang",
      price: "Rp 750.000",
    },
    {
      category: "KELUARGA / KELOMPOK",
      nums: "min. 3 Orang",
      price: "Rp 650.000",
    },
    {
      category: "SEKOLAH / INSTANSI",
      nums: "Lebih dari 20 Orang",
      price: "- Hubungi -",
    },
  ];

  const features =
    "Test STIFIn, Sertifikat + Map, Penjelasan / Konsultasi, PIN / GANCI, Buku Hasil Test STIFIn, Ebook Hasil Test STIFIn, Tanya Jawab, Grup Telegram, Tempat Sesuai Permintaan".split(
      ", "
    );

  return (
    <div className="bg-inherit pt-7">
      <h1 className="text-4xl font-philosopher text-center text-gray-50 font-extrabold">
        Price List
      </h1>

      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:pb-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl font-philosopher tracking-tight font-extrabold text-gray-100 dark:text-white">
              Pilihan Paket Terbaik Untuk Anda
            </h2>
            <p className="mb-5 font-light text-gray-200 sm:text-xl ">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 w-full lg:grid lg:grid-cols-3 sm:gap-6 lg:gap-10 lg:space-y-0">
            {priceLists.map((priceList, index) => (
              <div
                key={index}
                className="flex flex-col p-6 mx-auto font-philosopher max-w-lg w-full text-center rounded-xl shadow shadow-yellow-200 text-gray-50 hover:bg-gradient-to-br hover:from-gray-900 hover:from-30% hover:via-yellow-200 hover:via-100% hover:to-yellow-300 transition-all">
                <h3 className="mb-4 text-2xl font-semibold font-ubuntu">
                  {priceList.category}
                </h3>
                <p className="font-light text-gray-200 sm:text-lg font-ubuntu">
                  {priceList.nums}
                </p>
                <div className="flex flex-col justify-center items-center my-8">
                  <span className="mr-2 text-4xl font-extrabold font-philosopher">
                    {priceList.price}
                  </span>
                  <span className="text-gray-200 font-ubuntu">Per orang</span>
                </div>
                {/* List */}
                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left">
                  {features.map((feature, index) => (
                    <li
                      className="flex items-center space-x-3"
                      key={index}>
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-ubuntu">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-gray-900 font-ubuntu font-extrabold bg-yellow-300 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                  Interest to This Item
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceList;
