"use client";

import Link from "next/link";
import React from "react";
import courseData from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  instructor: string;
  price: number;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses: Course[] = courseData.courses.filter(
    (course: Course): boolean => course.isFeatured === true,
  );

  return (
    <div className="bg-gray-900 py-12">
      <div className="text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
          WHAT WILL YOU LEARN
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex h-full max-w-sm flex-col overflow-hidden rounded-[22px] bg-white dark:bg-zinc-900">
                <div className="flex flex-grow flex-col items-center p-4 text-center sm:p-6">
                  <p className="dark:next-neutral-200 mb-2 mt-4 text-lg text-white sm:text-xl">
                    {course.title}
                  </p>
                  <p>{course.description}</p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="rounded border border-neutral-600 bg-white px-4 py-2 font-bold text-black antialiased transition duration-200 hover:bg-gray-100"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
