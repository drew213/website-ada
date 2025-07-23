import PageLayout from "@/components/PageLayout";
import SlidingBar from "@/components/SlidingBar";
import ViewAllTeamMembersLink from "@/components/TeamMembersLink";
import Head from "next/head";
import Link from "next/link";
import { Metadata } from "next/types";
import React from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaCheck, FaInvision } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About Us | ADA Inventive",
  description: "User Centric and Innovative Software Solutions.",
};

type TeamMember = {
  name: string;
  role: string;
  imgUrl: string;
  bio: string;
};

const TEAM: TeamMember[] = [
  {
    name: "A.D Adetunji",
    role: "CEO & Co-founder",
    imgUrl: "/ADANew.png",
    bio: "Driven by innovation, Darren leads strategy and vision at the company, drawing on a lifelong vision for what tech should be.",
  },
  {
    name: "Windapo Olaoluwa",
    role: "CDO & Co-founder",
    imgUrl: "/ADANew.png",
    bio: "Windy excels at creating mesmerizing designs that bring to life the innovative details of a project.",
  },
  {
    name: "Quadri AbdulBasit",
    role: "CIO",
    imgUrl: "/ADANew.png",
    bio: "Q serves as the engine that continually builds on ADA's innovative ideas, he breaks down complicated matters into easily understood and resonating ideas.",
  },
  {
    name: "Mujeeb Ibrahim",
    role: "CTO",
    imgUrl: "/ADANew.png",
    bio: "Mj as he's so fondly known is an extremely important part of the team, his disposition and proficiency in multiple languages making him a useful element of the company..",
  },
];

const VALUES = [
  {
    icon: (
      <svg
        className="w-9 h-9 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <BsFillLightbulbFill />
      </svg>
    ),
    title: "Innovation",
    desc: "We solve tomorrow’s challenges with creativity.",
  },
  {
    icon: (
      <svg
        className="w-9 h-9 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <FaCheck />
      </svg>
    ),
    title: "Trust",
    desc: "Honesty, transparency, and commitment in all we do.",
  },
  {
    icon: (
      <svg
        className="w-9 h-9 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <FaClock/>
      </svg>
    ),
    title: "Reliability",
    desc: "We deliver, every time, with excellence.",
  },
];

const HERO_IMG = "/ADALong2.png";
export default function page() {
  return (
    <PageLayout>
      <section
        className="relative flex sm:flex-row flex-col-reverse justify-center items-center dark:bg-neutral-900 px-4 py-14 md:py-24 w-full overflow-hidden animate-in duration-700 fade-in zoom-in-90"
        style={{
          background:
            "linear-gradient(45deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",
        }}
      >
        <div className="flex flex-col flex-1 items-center sm:items-start sm:text-left text-center">
          <h1 className="mb-6 font-black text-blue-900 dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Building Reliable Tech For the Future
          </h1>
          <p className="mb-4 max-w-xl text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl">
            We are a passionate team of engineers, designers, and creators,
            dedicated to building technology that empowers, connects and
            endures.
          </p>
          <div className="slide-in-from-bottom-6 flex gap-4 mt-4 animate-in duration-1000 fade-in">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-800 shadow-md px-7 py-3 rounded-full focus:ring-2 focus:ring-blue-300 font-semibold text-white text-base transition"
            >
              Contact Us
            </a>
            <a
              href="#team"
              className="bg-white hover:bg-blue-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-7 py-3 border border-blue-600 rounded-full font-semibold text-blue-700 dark:text-blue-400 text-base transition"
            >
              Meet the Team
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center mb-10 sm:mb-0">
          <img
            src={HERO_IMG}
            alt="Tech innovation and teamwork"
            className="slide-in-from-right-8 shadow-xl border-4 dark:border-neutral-800 border-blue-100 rounded-3xl w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 object-cover animate-in duration-1000 fade-in"
          />
        </div>
      </section>

      {/* Mission/Values */}

      <section className="mx-auto px-4 py-14 md:py-24 max-w-5xl">
        <SlidingBar />
        <h2 className="mt-6 mb-8 font-extrabold text-blue-800 dark:text-white text-2xl sm:text-3xl md:text-4xl text-center">
          Our Mission & Values
        </h2>
        <div className="flex sm:flex-row flex-col justify-center gap-10">
          {VALUES.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex flex-col flex-1 items-center bg-blue-50 dark:bg-neutral-800 shadow-lg px-4 py-7 rounded-xl text-center animate-in duration-700 fade-in zoom-in-90"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="mb-2 font-bold text-blue-700 dark:text-blue-400 text-lg md:text-xl">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-200">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}

      <section id="team" className="mx-auto px-4 py-14 md:py-24 max-w-5xl">
        <h2 className="mb-8 font-extrabold text-blue-800 dark:text-white text-2xl sm:text-3xl md:text-4xl text-center">
          Meet Our Team
        </h2>
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {TEAM.map((member) => (
            <Link
              key={member.name}
              href={`/team/${member.name.toLowerCase().replace(/ /g, "-")}`}
              className="flex flex-col items-center bg-blue-50 dark:bg-neutral-800 shadow-lg p-6 rounded-xl text-center hover:scale-105 transition-transform duration-150"
            >
              <img
                src={member.imgUrl}
                alt={member.name}
                className="shadow mb-3 border-4 dark:border-neutral-700 border-blue-100 rounded-full w-24 h-24 object-cover"
              />
              <h3 className="font-bold text-blue-700 dark:text-blue-300 text-lg">
                {member.name}
              </h3>
              <span className="mb-2 font-medium text-blue-500 dark:text-blue-400 text-sm">
                {member.role}
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {member.bio}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <ViewAllTeamMembersLink />
        </div>
      </section>

      {/* Animations for Tailwind */}
    </PageLayout>
  );
}
