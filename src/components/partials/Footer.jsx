import React from "react";
import { RiWindyFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineMail, MdWhatsapp } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div
      className="bg-inherit w-full h-fit py-16 flex flex-col gap-y-10"
      id="contactus">
      <div className="lg:max-w-7xl w-full text-gray-900 mx-auto grid md:grid-cols-3 place-items-center items-center rounded-xl h-1/2">
        <div className="col-span-2 md:col-span-1 place-content-start flex flex-col gap-y-5 items-center md:items-start text-center md:text-left justify-center">
          <div className="flex items-center gap-x-5">
            <RiWindyFill
              size={70}
              className="text-sky-700 bg-slate-700 p-2 inline-block rounded-full"
            />
            <p className="text-xl inline-block">Temukan Potensi Terbaik Anda dengan Tes STIFIn</p>
          </div>
          <span className="px-16 md:px-0 pb-5">
            We are trying to find the best match for yourself. Where leads you
            to the best version of yourself.
          </span>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 col-span-2 gap-5 ">
          <a
            href="https://mail.google.com/mail/?view=cm&to=arie.mpra@gmail.com&su=Pemesanan%20STIFIn%20Test&body=Permisi,%20saya%20%5BNama%20Client%5D%20tertarik%20dengan%20Paket%20%5BNama%20Paket%5D.%20Bisa%20kita%20bicarakan%20lebih%20lanjut%3F"
            className="grid grid-cols-4 mx-auto outline px-10 py-16 outline-gray-50 rounded-lg cursor-pointer transition-all duration-500 hover:bg-gray-100 hover:text-gray-950 hover:outline-gray-600">
            <MdOutlineMail
              size={50}
              className="inline-block"
            />
            <div className="col-span-3">
              <p>Send Us an Email</p>
              <p>arie.mpra@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+6281318310354"
            className="grid grid-cols-4 mx-auto outline px-10 py-16 outline-gray-50 rounded-lg cursor-pointer transition-all duration-500 hover:bg-gray-100 hover:text-gray-950 hover:outline-gray-600">
            <IoMdCall
              size={50}
              className="inline-block"
            />
            <div className="col-span-3">
              <p>Give us a call</p>
              <p>+62 813-1831-0354</p>
            </div>
          </a>
        </div>
      </div>
      <a
        href={
          "https://wa.me/6281318310354?text=Permisi%20Mas,%20saya%20ingin%20bertanya-tanya%20mengenai%20Test%20STIFIn%20^^"
        }
        target="_blank"
        className="grid grid-cols-3 mx-5 place-items-center text-center max-w-xl text-gray-900 bg-green-500 hover:bg-green-700 hover:scale-105 transition-all md:mx-auto rounded-xl px-5 py-3">
        <MdWhatsapp
          size={100}
          className="inline-block"
        />
        <p className="cols-span-2 text-center">Contact Us Right Now!</p>
      </a>
      <a
        href={"https://www.instagram.com/ariempra/"}
        target="_blank"
        className="grid grid-cols-3 mx-5 place-items-center text-center max-w-xl text-gray-900 bg-gradient-to-tl from-indigo-900 via-red-600 to-yellow-500 hover:scale-105 transition-all md:mx-auto rounded-xl px-5 py-5">
        <BsInstagram
          size={90}
          className="inline-block"
        />
        <p className="cols-span-2 text-center">Contact Us Right Now!</p>
      </a>
    </div>
  );
};

export default Footer;
