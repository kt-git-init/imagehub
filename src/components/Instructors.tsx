"use client";

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const instructors = [
  {
    id: 1,
    name: "Sophia Bennett",
    designation: "Photography Instructor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Liam Carter",
    designation: "Photo Editing Specialist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fD",
  },
  {
    id: 3,
    name: "Mia Wilson",
    designation: "Graphic Design Expert",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Ethan Martinez",
    designation: "Digital Illustrator",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

function Instructors() {
  return (
    <div className="relative flex h-[40rem] items-center justify-center overflow-hidden">
      <WavyBackground className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          Meet Our Instructors
        </h2>
        <p className="mb-4 text-center text-base text-white md:text-lg">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="mb-10 flex w-full flex-row items-center justify-center">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
