import React, { useEffect } from "react";
import { Navbar } from "flowbite-react";
import { useState } from "react";
import { motion } from "framer-motion";

const NavbarHome = () => {
  const [ActiveAbout, SetActiveAbout] = useState(false);
  const [ActiveServices, SetActiveServices] = useState(false);
  const [ActivePricing, SetActivePricing] = useState(false);
  const [ActiveContact, SetActiveContact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navHref = [
    {
      name: "Advantage",
      href: "#advantage",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  });

  return (
    <div className="flex  justify-between items-center w-full md:px-10 px-2 bg-gray-50 text-xl font-bold">
      <motion.a
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        href="/"
        className="font-extrabold font-satisfy text-3xl">
        STIFInTest
      </motion.a>
      {isMobile ? (
        ""
      ) : (
        <div className="flex justify-between visible gap-10">
          {navHref.map((item, index) => (
            <a
              key={index}
              href={item.href}
              class="group relative inline-block py-2 px-4 border border-transparent text-base font-medium text-gray-900 transition duration-200 ease-in-out">
              <span class="relative z-10 font-ubuntu text-lg">{item.name}</span>
              <span class="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      )}
      <motion.a
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        href="#contactus">
        <button className="p-5 bg-gray-950 font-bold text-gray-50 my-3 hover:bg-gray-50 hover:text-gray-950 outline transition-all">
          Contact Us
        </button>
      </motion.a>
    </div>
  );
};

export default NavbarHome;
