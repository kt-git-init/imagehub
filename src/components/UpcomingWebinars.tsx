import Link from "next/link";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Mastering Photography Basics",
    description:
      "Learn the essential techniques of photography, from camera settings to composition.",
    slug: "mastering-photography-basics",
    isFeatured: true,
  },
  {
    title: "Advanced Photo Editing Techniques",
    description:
      "Take your photo editing skills to the next level with advanced techniques and software.",
    slug: "advanced-photo-editing-techniques",
    isFeatured: true,
  },
  {
    title: "Graphic Design Principles",
    description:
      "Explore the core principles of graphic design and enhance your creative projects.",
    slug: "graphic-design-principles",
    isFeatured: true,
  },
  {
    title: "Introduction to Digital Illustration",
    description:
      "Start creating stunning digital illustrations with essential tools and techniques.",
    slug: "introduction-to-digital-illustration",
    isFeatured: true,
  },
  {
    title: "Professional Photo Retouching",
    description:
      "Learn professional retouching techniques to enhance your portrait and landscape photos.",
    slug: "professional-photo-retouching",
    isFeatured: true,
  },
  {
    title: "Digital Marketing for Visual Artists",
    description:
      "Discover strategies to promote your artwork and grow your online presence effectively.",
    slug: "digital-marketing-for-visual-artists",
    isFeatured: true,
  },
];

interface ItemsDataType {
  title: string;
  description: string;
  link: string;
}

const UpcomingWebinars = () => {
  return (
    <div className="bg-gray-900 p-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Enhance Your Photography Skills
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="rounded border border-neutral-600 bg-white px-4 py-2 text-neutral-700 transition duration-200 hover:bg-gray-100"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
