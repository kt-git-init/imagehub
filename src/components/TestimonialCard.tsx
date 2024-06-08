"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const imageIndustryTestimonials = [
  {
    quote:
      "Attending this image school completely reshaped my understanding of visual storytelling. The instructors are truly experts in their fields!",
    name: "Jordan Smith",
    title: "Photography Student",
  },
  {
    quote:
      "The sense of community and support here is phenomenal. I've not only improved my technical skills but also my creative vision, thanks to their holistic approach.",
    name: "Taylor Brown",
    title: "Graphic Design Student",
  },
  {
    quote:
      "This school provided me with the tools and confidence to elevate my videography skills. The personalized coaching is beyond compare.",
    name: "Jamie Park",
    title: "Videography Student",
  },
  {
    quote:
      "As an aspiring animator, finding the right mentor was crucial. This school connected me with a teacher who truly understands my artistic goals and challenges.",
    name: "Morgan Lee",
    title: "Animation Student",
  },
  {
    quote:
      "The digital arts courses here opened my eyes to the complexities of digital media. Highly recommend for any aspiring digital artists!",
    name: "Alex Kim",
    title: "Digital Arts Student",
  },
];

const TestimonialCard = () => {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden dark:bg-black dark:bg-grid-white/[0.2]">
      <h2 className="z-10 mb-8 mt-10 text-center text-3xl font-bold">
        United in Achievement: The Portrait of Success
      </h2>
      <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={imageIndustryTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
