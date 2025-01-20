import React from "react";
import { Card, Carousel } from "flowbite-react";
import image1 from "../../assets/images/results/agreement.gif";
import image2 from "../../assets/images/results/bank.gif";
import image3 from "../../assets/images/results/budgeting.gif";
import image4 from "../../assets/images/results/connection.gif";
import image5 from "../../assets/images/results/diagram.gif";
import image6 from "../../assets/images/results/tax.gif";
import image7 from "../../assets/images/results/line-chart.gif";
import image8 from "../../assets/images/results/money-bag.gif";
import image9 from "../../assets/images/results/profits.gif";
import { FaMoneyBillWave, FaPuzzlePiece, FaBook } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { ImStatsDots, ImStatsBars } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";

const Results = () => {
  const results = [
    {
      title: "Sensing Introvert",
      description:
        "Persistent, Detailed, Recorder, Discpiline, Careful, Spirited, Encyclopedic, Workaholic, Timeful, Indifferent",
      image: image1,
      icon: FaMoneyBillWave,
    },
    {
      title: "Sensing Extrovert",
      description:
        "Adventurous, Playful, Demonstrative, Generous, Repetitious, Show offs, Tune in order, Inoffensive, Endurance, Experienced",
      image: image2,
      icon: BsCreditCard2FrontFill,
    },
    {
      title: "Thinking Introvert",
      description:
        "Expert On Time, Scheduled, Independent, Focus, Through, Mechanistic, Prudent, Responsible, Scheme.",
      image: image3,
      icon: ImStatsDots,
    },
    {
      title: "Thinking Extrovert",
      description:
        "Thoughtful, Analytical, Competitive, Reserved, Planner, Positive, Argumentative, Forceful, Formal, Justice.",
      image: image4,
      icon: ImStatsBars,
    },
    {
      title: "Insting",
      description:
        "Balanced, Compromizing, Peaceful, Resourceful, Simple, Forgiving, Occupied, Flowing, Smooth, Intermediary.",
      image: image5,
      icon: RiEmotionHappyLine,
    },
    {
      title: "Intuiting Introvert",
      description:
        "Learner, Assertive, Perfectionist, Scholar, Hard to Please, Proud, Optimistic, Deep, Insistent, Capable, Selling.",
      image: image6,
      icon: FaBook,
    },
    {
      title: "Intuiting Extrovert",
      description:
        "Inspiring, Solver, Benchmarker, Expressive, Respectful, Assemblies, Detective, Seletive, Diesel, Romantic.",
      image: image7,
      icon: FaPuzzlePiece,
    },
    {
      title: "Feeling Introvert",
      description:
        "Influencing, Idealistic, Leader, Kindful, Reflective, Popular, Convincing, Promoter, Diplomatic, Friendship-appeal.",
      image: image8,
      icon: BsFillHeartFill,
    },
    {
      title: "Feeling Extrovert",
      description:
        "Emphaty, Tolerant, Communicative, Listener, Symphaty, Affectionate, Persuasive, Enable, Considerate, Guiding.",
      image: image9,
      icon: MdPeopleAlt,
    },
  ];

  return (
    <div className="bg-inherit text-white">
      <h1
        className="font-extrabold font-philosopher text-center text-4xl pt-5 md:pt-32 mb-5 px-2"
        id="results">
        Hasil Tes STIFIn
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 max-w-6xl mx-auto">
        {results.map((result, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-5 group hover:shadow-xl transition-all duration-150 rounded-lg hover:scale-105 hover:bg-[#be820a]"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]">
            <result.icon className="text-5xl text-[#FFB218] mb-3 group-hover:text-gray-900" />
            <h4 className="h4 mb-2 font-philosopher font-extrabold text-center">
              {result.title}
            </h4>
            <p className="text-lg font-ubuntu text-gray-400 text-center group-hover:text-gray-900">
              {result.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
