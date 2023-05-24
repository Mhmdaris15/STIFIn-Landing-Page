import React from "react";
import { Accordion } from "flowbite-react";

const FAQ = () => {
  const questionAnswers = [
    {
      q: "What is Flowbite?",
      a: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      q: "Is there a Figma file available?",
      a: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
    },
    {
      q: "What is React JS?",
      a: "React JS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      q: "What is best feature of React JS",
      a: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    },
    {
      q: "What is Vue JS?",
      a: "Vue JS is framework of Javascript",
    },
  ];

  return (
    <div className="bg-inherit">
      <h1 className="text-5xl text-gray-50 text-center mb-3 font-extrabold">
        Hal Yang Sering Ditanyakan
      </h1>
      <h2 className="text-2xl text-center mb-5 font-bold text-gray-600">FAQ</h2>
      <div className="lg:w-3/4 lg:mx-auto mx-10">
        <Accordion alwaysOpen={true}>
          {questionAnswers.map((qa, index) => (
            <Accordion.Panel className="bg-[#110e18]">
              <Accordion.Title className="bg-[#110e18] text-gray-50 hover:bg-[#110e18]">
                {qa.q}
              </Accordion.Title>
              <Accordion.Content className="bg-[#393342]">
                <p className="mb-2 text-gray-100 dark:text-gray-400">{qa.a}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
