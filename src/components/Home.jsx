import React from "react";
import NavbarHome from "./partials/NavbarHome";
import StuckAtHome from "../assets/images/Stuck at Home - Brainstorming.png";
import LogoImage from "../assets/images/morphis-personal-data-protection.png";
import { motion } from "framer-motion";

const Home = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="h-screen bg-inherit">
      <NavbarHome />

      <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          class="px-4 mx-auto flex flex-col justify-center gap-y-10 max-w-screen-xl text-center min-h-screen">
          {isMobile ? (
            ""
          ) : (
            <img
              src={LogoImage}
              alt="Logo Image"
              width={200}
              className="mx-auto"
            />
          )}
          <h1 class="text-4xl font-philosopher font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Apa itu STIFIn?
          </h1>
          <p class="font-ubuntu text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            STIFIn adalah sebuah konsep untuk mengidentifikasi mesin kecerdasan
            manusia berdasarkan sistem operasi otak yang dominan, yang dapat
            diidentifikasi dengan memindai sidik jari. Terdiri dari teori-teori
            dari psikologi, neuroscience, dan ilmu sumber daya manusia, metode
            STIFIn akan membantu kita mengenali dan memahami karakter dan
            kepribadian setiap individu. Seperti namanya, dalam konsep STIFIn
            yang diperkenalkan oleh Farid Poniman ini terdapat 5 mesin
            kecerdasan yaitu Sensing, Thinking, Intuiting, Feeling, dan Insting.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
