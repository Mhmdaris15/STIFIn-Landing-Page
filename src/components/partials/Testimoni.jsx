import { Container } from "postcss";
import React from "react";
import star from "../../assets/images/users/star.png";

const Testimoni = () => {
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
    <>
      <h1 className="font-extrabold text-4xl py-5">Testimoni</h1>
      <div className="grid lg:grid-cols-2 lg:grid-rows-3 lg:w-1/2 lg:grid-flow-col mx-auto lg:gap-4 gap-y-2 text-left text-white">
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
    </>
  );
};

export default Testimoni;
