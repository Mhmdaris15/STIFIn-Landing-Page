import { Container } from "postcss";
import React, { useState, Fragment } from "react";
import star from "../../assets/images/users/star.png";
import { Dialog, Transition } from "@headlessui/react";
import Certificate from "../../assets/images/sertifikat-promotor.jpg";

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
        "Lovro is an exceptional designer who has worked on multiple e-commerce projects with great success. His designs are sleek, and user-friendly, and have won awards. He also prioritizes the user experience and understands business goals. Lovro is communicative, collaborative, and the real deal for taking e-commerce sites to the next level.Anyway, if you're looking for a designer who will take your e-commerce site to the next level, Lovro is the real deal.",
      image: "https://picsum.photos/200/300",
      name: "John Doe",
      job: "CEO",
      rows: 2,
    },
    {
      star: 5,
      argument:
        "Lovro's Amazing attention to detail and well-organized Figma boards make the collaborations really pleasurable. Highly recommended!",
      image: "https://picsum.photos/200/300",
      name: "John Doe",
      job: "CEO",
      rows: 1,
    },
    {
      star: 5,
      argument:
        "Lovro has been an exceptional addition to our design team, bringing unparalleled skills and expertise to the table. Not only is he a highly reliable and dependable professional, but he consistently delivers outstanding results, which is truly a rare find in today's fast-paced industry. We couldn't be more thrilled to have Lovro as a part of our team and are excited to witness his continued success.",
      image: "https://picsum.photos/200/300",
      name: "John Doe",
      job: "CEO",
      rows: 1,
    },
    {
      star: 5,
      argument:
        'Lovro is a great guy to work with. I had worked with him as a "team extender", where he helped our team by providing his UI skills when our team was overbooked. He listens carefully and responds professionally. He is well-versed in design knowledge, web/app tech capabilities, and last but not least talking to and handing over his work to developers. He is a great asset!',
      image: "https://picsum.photos/200/300",
      name: "John Doe",
      job: "CEO",
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
      <div>
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
