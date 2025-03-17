import React from "react";
import { TimelineItem } from "../components/TimelineItem";
import kendrascott from "../assets/kendrascott.svg";

export const Timeline = () => {
  const timelineData = [
    {
      year: "May 2023 - Present",
      company: "Kendra Scott",
      role: "Content Creator",
      description:
        "Develop and execute comprehensive content strategies that increased engagement by 30% across platforms",
      logo: kendrascott,
    },
    {
      year: "May 2023 - Present",
      company: "Kendra Scott",
      role: "Junior Creator",
      description:
        "Develop and execute comprehensive content strategies that increased engagement by 30% across platforms ",
      logo: kendrascott,
    },
  ];

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
      <div className="relative">
        {/* Continuous vertical line */}

        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 z-0"></div>

        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            company={item.company}
            role={item.role}
            description={item.description}
            logo={item.logo}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};
