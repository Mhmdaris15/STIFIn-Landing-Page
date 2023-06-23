import React, { useEffect } from "react";
import { Navbar } from "flowbite-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavbarHome = () => {
  const [ActiveAbout, SetActiveAbout] = useState(false);
  const [ActiveServices, SetActiveServices] = useState(false);
  const [ActivePricing, SetActivePricing] = useState(false);
  const [ActiveContact, SetActiveContact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [state, setState] = useState(false);

  const navHref = [
    {
      name: "FAQ",
      href: "faq",
    },
    {
      name: "Advantages",
      href: "advantage",
    },
    {
      name: "Pricing",
      href: "pricing",
    },
    {
      name: "Gallery",
      href: "gallery",
    },
  ];

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  });

  return (
    <div className="flex p-5 justify-between items-center w-full h-fit md:px-10 px-2 bg-gray-50 text-xl font-bold">
      <motion.a
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        href="/"
        className="font-extrabold font-satisfy text-3xl">
        STIFInTest
      </motion.a>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={
          `flex justify-between visible gap-10 ` +
          (isMobile ? "hidden" : "block")
        }>
        {navHref.map((item, index) => (
          <Link
            to={item.href}
            smooth={true}
            duration={800}
            key={index}
            href={item.href}
            className="group relative inline-block py-2 px-4 border border-transparent text-base font-medium text-gray-900 transition duration-200 ease-in-out">
            <span className="relative z-10 font-ubuntu text-lg">
              {item.name}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
          </Link>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <Link
          to="contactus"
          smooth={true}
          duration={800}
          className={`p-5 bg-gray-950 font-bold text-gray-50 my-3 hover:bg-gray-50 hover:text-gray-950 outline transition-all `}>
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
};

export default NavbarHome;
