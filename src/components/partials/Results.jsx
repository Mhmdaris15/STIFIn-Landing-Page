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

const Results = () => {
  const results = [
    {
      title: "Sensing Introvert",
      description:
        "Persistent, Detailed, Recorder, Discpiline, Careful, Spirited, Encyclopedic, Workaholic, Timeful, Indifferent",
      image: image1,
    },
    {
      title: "Sensing Extrovert",
      description:
        "Adventurous, Playful, Demonstrative, Generous, Repetitious, Show offs, Tune in order, Inoffensive, Endurance, Experienced",
      image: image2,
    },
    {
      title: "Thinking Introvert",
      description:
        "Expert On Time, Scheduled, Independent, Focus, Through, Mechanistic, Prudent, Responsible, Scheme.",
      image: image3,
    },
    {
      title: "Thinking Extrovert",
      description:
        "Thoughtful, Analytical, Competitive, Reserved, Planner, Positive, Argumentative, Forceful, Formal, Justice.",
      image: image4,
    },
    {
      title: "Insting",
      description:
        "Balanced, Compromizing, Peaceful, Resourceful, Simple, Forgiving, Occupied, Flowing, Smooth, Intermediary.",
      image: image5,
    },
    {
      title: "Intuiting Introvert",
      description:
        "Learner, Assertive, Perfectionist, Scholar, Hard to Please, Proud, Optimistic, Deep, Insistent, Capable, Selling.",
      image: image6,
    },
    {
      title: "Intuiting Extrovert",
      description:
        "Inspiring, Solver, Benchmarker, Expressive, Respectful, Assemblies, Detective, Seletive, Diesel, Romantic.",
      image: image7,
    },
    {
      title: "Feeling Introvert",
      description:
        "Influencing, Idealistic, Leader, Kindful, Reflective, Popular, Convincing, Promoter, Diplomatic, Friendship-appeal.",
      image: image8,
    },
    {
      title: "Feeling Extrovert",
      description:
        "Emphaty, Tolerant, Communicative, Listener, Symphaty, Affectionate, Persuasive, Enable, Considerate, Guiding.",
      image: image9,
    },
  ];

  return (
    <>
      <h1
        className="font-extrabold text-4xl my-5"
        id="results">
        Results of STIFin Test
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {results.map((result, index) => (
          <div
            className="max-w-sm"
            key={index}>
            <Card
              imgAlt="Card image"
              imgSrc={result.image}
              style={{ width: "15rem" }}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {result.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {result.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Results;
