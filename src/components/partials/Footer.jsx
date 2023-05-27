import React from "react";
import { RiWindyFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-inherit w-full h-fit py-16 flex flex-col gap-y-10">
      <div className="lg:max-w-7xl text-gray-50 mx-auto grid grid-cols-3 items-end rounded-xl h-1/2">
        <div className="col-span-1 place-content-start flex flex-col justify-center gap-y-5">
          <div className="flex items-center gap-x-5">
            <RiWindyFill
              size={100}
              className="text-sky-700 bg-slate-700 p-3 inline-block rounded-full"
            />
            <p className="inline-block">Just Produce</p>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit
          nostrum rerum beatae maiores doloremque voluptates, sint aperiam!
        </div>
        <div className="col-span-2 place-content-end flex gap-x-10 items-center">
          <div className="flex gap-x-6 p-10 outline outline-gray-50 rounded-lg w-fit cursor-pointer transition-all duration-500 hover:bg-gray-100 hover:text-gray-950 hover:outline-gray-600">
            <MdOutlineMail
              size={50}
              className="inline-block"
            />
            <div>
              <p>Send Us an Email</p>
              <p>muhammadaris1945@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-x-6 p-10 outline outline-gray-50 rounded-lg w-fit cursor-pointer transition-all duration-500 hover:bg-gray-100 hover:text-gray-950 hover:outline-gray-600">
            <IoMdCall
              size={50}
              className="inline-block"
            />
            <div>
              <p>Give us a call</p>
              <p>+62 858-1404-5755</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full">
        <div className="flex justify-between mx-auto lg:max-w-7xl items-center h-44">
          <h2 className="font-extrabold text-3xl text-gray-50">
            Subscribe Our Newsletter
          </h2>
          <div className="flex gap-x-2">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent border-b-2 h-12 w-96 rounded-lg border-gray-50 text-gray-50 placeholder-gray-200 focus:outline-none focus:border-gray-50 transition-all duration-500"
              placeholder="Email Address"
            />
            <button className="bg-slate-50 text-gray-900 h-12 rounded-lg px-5 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="lg:max-w-7xl flex mx-auto bg-gray-50">
        <div className="w-1/2">
          <div className="grid grid-cols-3 uppercase">
            <p>Product</p>
            <p>Resources</p>
            <p>Company</p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-gray-50 w-full h-full text-5xl text-left">
            Build Your Ideal Workspace Today
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
