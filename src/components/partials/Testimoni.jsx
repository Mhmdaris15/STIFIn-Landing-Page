import { Container } from "postcss";
import React, { useState, Fragment } from "react";
import star from "../../assets/images/users/star.png";
import { Dialog, Transition } from "@headlessui/react";
import Certificate from "../../assets/images/sertifikat-promotor.jpg";
import { motion } from "framer-motion";

import Image1 from "../../assets/images/IMG-20230619-WA0031.jpg";
import Image2 from "../../assets/images/IMG-20230619-WA0032.jpg";
import Image3 from "../../assets/images/IMG-20230619-WA0033.jpg";
import Image4 from "../../assets/images/IMG-20230619-WA0034.jpg";
import Image5 from "../../assets/images/IMG-20230619-WA0035.jpg";
import Image6 from "../../assets/images/IMG-20230619-WA0036.jpg";
import Image7 from "../../assets/images/IMG-20230619-WA0037.jpg";
import Image8 from "../../assets/images/IMG-20230619-WA0038.jpg";
import Image9 from "../../assets/images/IMG-20230619-WA0039.jpg";

const Testimoni = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const Images = [
    Certificate,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

  const testimonials = [
    {
      star: 5,
      argument:
        "Jika selama ini sidik jari hanya digunakan untuk melengkapi identitas, kepentingan kepolisisan, dan sebagai penanda kehadiran seseorang, maka dengan adanya analisis sidik jari dapat digunakan untuk menbaca potensi terpendam setiap anak. Dengan demikian, setiap anak akan mendapatkan hak sesuai dengan kecenderungan yang mereka miliki. Jangan paksa anak melukis, padahal ia senang menari. Mengetahui potensi anak sejak dini merupakan sebuah keharusan agar anak mendapat perlakuan yang berbeda dan khusus. Dengan melalui analisis sidik jari ini semakin membuka pikiran kita bahwa setiap anak dilahirkan dengan kecerdasan dan potensinya masing-masing.",
      image: "https://picsum.photos/200/300",
      name: "Prof. Dr. Arief Rahman, M.Pd",
      job: "Praktisi Pendidikan",
      rows: 2,
    },
    {
      star: 5,
      argument:
        "Saya telah membaca laporan riset yang dipimpin Prof. Dr. Mohammed Zin Nordin dan timnya tentang Tes STIFIn. Mereka telah melakukan riset yang baik.",
      image: "https://picsum.photos/200/300",
      name: "Prof. Dr. Kumaidi, MA.",
      job: "Univ. Muhammadiyah Surakarta, Ahli Psikometrik.",
      rows: 1,
    },
    {
      star: 5,
      argument:
        "Hasil Tes STIFIn ini sangat cocok dengan saya. Penjelasannya sangat ilmiah, detail, dan praktis untuk saya pahami. Jadi menurut saya, tes ini sangat penting dilakukan sedini mungkin agar kita sebagai orang tua tidak salah dalam mengarahkan anak untuk memilih jalur pendidikan dan profesi yang sesuai dengan bahkan dan potensinya. Sehingga anak-anak menemukan cara belajar yang menyenangkan.",
      image: "https://picsum.photos/200/300",
      name: "Prof. Dr. Kuswandi, S.U., M.Phill., Apt.",
      job: "Guru Besar UGM. Pakar Genetika, Pemerhati Pendidikan",
      rows: 1,
    },
    {
      star: 5,
      argument:
        "Banyak cara untuk memahami diri sendiri & orang lain. Dengan STIFIn kita akan lebih mengerti & memahami diri sendiri dengan orang lain. Kerjasama dalam keluarga dan dunia kerja menjadi lebih baik.",
      image: "https://picsum.photos/200/300",
      name: "Kris Pujiatni",
      job: "Psikolog, Dosen Psikologi Fakultas UMS",
      rows: 2,
    },
  ];

  const showStar = (num) => {
    const listStar = [];
    for (let i = 0; i < num; i++) {
      listStar.push(i);
    }
    return listStar;
  };

  return (
    <div className="bg-inherit">
      <h1 className="font-extrabold text-center text-gray-50 text-4xl py-5">
        Testimoni
      </h1>
      <div className="grid lg:grid-cols-2 lg:grid-rows-3 lg:w-2/3 lg:grid-flow-col mx-auto lg:gap-4 gap-y-2 text-left text-white">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              testimonial.rows > 1
                ? "row-span-2 justify-center"
                : "justify-start"
            } bg-[#100E18] p-10 rounded-lg hover:bg-gradient-to-br hover:from-gray-900 hover:from-30% hover:via-yellow-200 hover:via-100% hover:to-yellow-300 transition-all`}>
            <span className="flex">
              {showStar(testimonial.star).map((s, index) => (
                <img
                  src={star}
                  key={index}
                  className="w-5 h-5"
                  alt="Star"
                />
              ))}
            </span>
            <p className="my-5 text-justify">{testimonial.argument}</p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-20 h-20 my-5"
            />

            <span className="font-bold">{testimonial.name}</span>
            <span className="text-gray-300">{testimonial.job}</span>
          </div>
        ))}
      </div>
      <div id="gallery">
        <h1 className="font-extrabold text-4xl text-gray-50 text-center font-philosopher py-10 pt-32">
          Galeri Kami
        </h1>
        <h2 className="font-extrabold text-3xl text-gray-50 text-center font-philosopher py-7">
          Jangan Ragu, Promoter kami sudah tersertifikasi!
        </h2>
        {/* <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md p-5 bg-gradient-to-r from-yellow-600 to-red-600 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img
              src={Certificate}
              alt="Sertifikat Promotor"
              className="rounded-md"
              width={200}
            />
            <h3 className="py-2">Klik Disini!</h3>
          </button>
        </div> */}
        <div className="grid md:grid-cols-4 justify-items-center items-center md:max-w-6xl w-full mx-auto gap-5">
          {Images.map((image, index) => (
            <div
              // initial={{ opacity: 0, y: 100 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5 }}
              key={index}
              className={
                `p-2 border-2 border-gray-50 ` +
                (index == Images.length - 1
                  ? "md:w-[30em] md:translate-x-32"
                  : "md:w-64")
              }>
              <img
                src={image}
                className={
                  `rounded-md w-full ` +
                  (index == Images.length - 1 ? "col-span-3" : "")
                }
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
        {/* <Transition
          appear
          show={isOpen}
          as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900">
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}>
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition> */}
      </div>
    </div>
  );
};

export default Testimoni;
