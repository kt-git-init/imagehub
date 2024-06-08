"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

interface ContentType {
  title: string;
  description: string;
}

const imageIndustryContent: ContentType[] = [
  {
    title:
      "Capture Your Vision with Us: A Personal Journey in Photography Mastery",
    description:
      "Embark on a photographic journey that’s uniquely yours. Our personalized instruction adapts to your individual style and needs, setting the stage for unparalleled growth and creativity. At our photography school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title:
      "Capture Your Vision with Us: A Personal Journey in Photography Mastery",
    description:
      "Embark on a photographic journey that’s uniquely yours. Our personalized instruction adapts to your individual style and needs, setting the stage for unparalleled growth and creativity. At our photography school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title:
      "Capture Your Vision with Us: A Personal Journey in Photography Mastery",
    description:
      "Embark on a photographic journey that’s uniquely yours. Our personalized instruction adapts to your individual style and needs, setting the stage for unparalleled growth and creativity. At our photography school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative shoot. This approach enhances your understanding and mastery of photography concepts and techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest photography trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated techniques and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your photography skills are always advancing.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={imageIndustryContent} />
    </div>
  );
};

export default WhyChooseUs;
