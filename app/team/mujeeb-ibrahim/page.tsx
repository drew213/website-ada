"use client";

import PageLayout from "@/components/PageLayout";
import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SimpleCarousel } from "react-whirlpool";
import "react-whirlpool/dist/cjs/component/SimpleCarousel.css";

type Experience = {
  title: string;
  dateRange: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: "Founder – TheBrayem",
    dateRange: "2025 – Present",
    description:
      "Currently building TerraFynd[subject to change], a real estate platform designed to simplify property discovery, agent verification, and lifestyle services across Nigeria Running brand, product, and UX strategy for the entire ecosystem under TheBrayem umbrella Producing engaging, insight-driven video content under TheREDev, educating and entertaining young Nigerians about property Developing a long-term brand roadmap that connects tech, emotion, and culture in real estate",
  },
  {
    title: "Mobile Developer Intern – Nupat Technologies",
    dateRange: "01/2025 – 06/2025",
    description:
      "Built cross-platform mobile apps with React Native Contributed to UI implementation and collaborated across product and engineering teams Learned mobile deployment pipelines, performance optimization, and component abstraction",
  },
  {
    title: "Freelance Frontend Developer",
    dateRange: "2024 – Present",
    description:
      "Designed and built responsive landing pages and portfolio sites using React.js, Tailwind CSS, and Vite Focused on modern UI/UX, speed optimization, and mobile-first development Delivered client work that balanced clean design with business impact",
  },
];

const skills = [
  "HTML",
  "CSS",
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "APIs",

  "Analytical and Problem solving",
  "Effective communication",
  "Excellent Team Collaboration",
  "BiLingual (English & Yoruba)",
];

const duplicatedSkills = [...skills, ...skills];

export default function page() {
  const [typedText] = useTypewriter({
    words: [
      " I’m Mujeeb Ibrahim.",
      "Obsessed with systems. Focused on execution",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

  // Modal control for experience folders
  const [openExpIndex, setOpenExpIndex] = useState<number | null>(null);

  return (
    <PageLayout>
      <main className="flex flex-col bg-white dark:bg-black mx-auto px-4 md:px-16 py-12 max-w-7xl min-h-screen text-gray-800 dark:text-gray-100">
        {/* Hero section */}
        <section className="flex md:flex-row flex-col-reverse justify-between items-center gap-8 mb-20">
          {/* Left Text */}
          <div className="space-y-5 md:w-1/2 max-w-xl md:text-left text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl leading-tight">
              {typedText}
              <Cursor cursorColor="#3b82f6" />
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
              I don’t just write code — I design, strategize, and ship bold
              ideas. My core skills lie in frontend development with React and
              APIs, and I back that up with a product mindset and obsession with
              real-world execution.
            </p>
          </div>

          {/* Right Image */}
          <div className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl md:w-1/2 max-w-lg overflow-hidden">
            <img
              src="/ghostvatar.png"
              alt="David Ajibewa"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* About/Bio Section */}
        <section className="bg-gray-50 dark:bg-gray-800 shadow-md mx-auto mb-16 p-8 rounded-lg max-w-4xl">
          <h2 className="mb-4 font-bold text-3xl">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’m Mujeeb Ibrahim, a Nigerian software developer and Computer
            Science student at Babcock University, on a mission to transform
            real estate through smart, scalable tech. I recently completed a
            mobile and web development internship at Nupat Technologies, where I
            learned how to ship real-world applications under pressure. I’m
            currently building TerraFynd, a next-gen property platform under my
            brand TheBrayem, focused on solving the chaos of renting, buying,
            and verifying properties in Nigeria. Alongside that, I run TheREDev,
            a content series simplifying real estate and tech for the everyday
            Nigerian using short-form, relatable content.
          </p>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="relative mx-auto mb-16 px-4 max-w-full overflow-hidden"
        >
          <h2 className="mb-6 font-bold text-gray-900 dark:text-gray-100 text-3xl text-center">
            Skills
          </h2>

          <div
            className="relative overflow-hidden select-none"
            style={{
              background:
                "linear-gradient(to right, transparent, #f9fafb, transparent)", // subtle white fade edges (adjust based on your bg)
            }}
          >
            {/* Scrolling container */}
            <div className="flex gap-6 min-w-max animate-scrollSkills">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="flex flex-col justify-center items-center bg-white/30 dark:bg-gray-700/40 shadow-md hover:shadow-xl backdrop-blur-md px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl min-w-[120px] hover:scale-105 transition-all cursor-default"
                  style={{ userSelect: "none" }}
                >
                  <p className="max-w-full font-semibold text-gray-900 dark:text-gray-100 text-sm text-center break-words leading-tight">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Scroll Animation */}
          <style jsx>{`
            @keyframes scrollSkills {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scrollSkills {
              animation: scrollSkills 30s linear infinite;
            }
          `}</style>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-8 font-bold text-3xl text-center">Experience</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {experiences.map((exp, idx) => (
              <ExperienceFolder
                key={idx}
                index={idx}
                experience={exp}
                isOpen={openExpIndex === idx}
                onClick={() =>
                  setOpenExpIndex(openExpIndex === idx ? null : idx)
                }
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4 bg-gray-50 dark:bg-gray-800 shadow-md mx-auto mb-14 p-8 rounded-lg max-w-4xl text-center">
          <h2 className="mb-2 font-bold text-3xl">
            Whether you're a recruiter, investor, collaborator, or just someone
            building something cool — Let’s talk.
          </h2>
          <p>
            📍 Nigeria | ✉️{" "}
            <a
              href="mailto:mjibrahim25@gmail.com"
              className="text-blue-600 hover:dark:text-blue-600 hover:text-blue-800 dark:text-blue-400 underline"
            >
              mjibrahim25@gmail.com
            </a>
          </p>
          <p className="mx-auto max-w-lg text-gray-700 dark:text-gray-300">
            I’m open to freelance work, collaborations, or full-time roles.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <a
              href="mailto:mjibrahim25@gmail.com"
              className="hover:bg-blue-600 px-6 py-3 border border-blue-600 rounded-md font-semibold text-blue-600 hover:text-white dark:text-blue-400 transition"
            >
              Email Me
            </a>
            <a
              href="#experience"
              className="hover:bg-gray-300 hover:dark:bg-gray-700 px-6 py-3 border border-gray-400 rounded-md font-semibold text-gray-700 dark:text-gray-300 transition"
            >
              View Experience
            </a>
            <a
              href="#skills"
              className="hover:bg-gray-300 hover:dark:bg-gray-700 px-6 py-3 border border-gray-400 rounded-md font-semibold text-gray-700 dark:text-gray-300 transition"
            >
              View Skills
            </a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

function ExperienceFolder({
  experience,
  onClick,
  isOpen,
  index,
}: {
  experience: Experience;
  onClick: () => void;
  isOpen: boolean;
  index: number;
}) {
  return (
    <>
      {/* Folder Card */}
      <div
        onClick={onClick}
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" ? onClick() : null)}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`experience-detail-${index}`}
        className="relative bg-yellow-100 dark:bg-yellow-900/90 shadow-lg hover:shadow-2xl p-5 rounded-lg max-w-[400px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        {/* Folder tab */}
        <div className="top-0 left-0 absolute bg-yellow-200 border-yellow-400 dark:border-yellow-700 border-t border-l rounded-t-xl w-20 h-6" />
        <h3 className="relative font-semibold text-yellow-900 dark:text-yellow-200 text-lg">
          {experience.title}
        </h3>
        <p className="mt-2 text-yellow-800 dark:text-yellow-300 text-sm">
          {experience.dateRange}
        </p>
      </div>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="z-40 fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={onClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`experience-detail-title-${index}`}
        >
          <article
            tabIndex={-1}
            id={`experience-detail-${index}`}
            className="relative bg-yellow-100 dark:bg-yellow-900/90 shadow-2xl p-6 rounded-lg w-full max-w-lg text-yellow-900 dark:text-yellow-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="top-4 right-4 absolute focus:outline-none font-bold text-yellow-900 hover:text-yellow-700 dark:hover:text-yellow-500 dark:text-yellow-200 text-3xl"
              onClick={onClick}
              aria-label="Close experience detail"
              type="button"
            >
              &times;
            </button>
            <h3
              id={`experience-detail-title-${index}`}
              className="mb-4 font-semibold text-2xl"
            >
              {experience.title}
            </h3>
            <p className="mb-4 text-yellow-800 dark:text-yellow-300 leading-relaxed whitespace-pre-wrap">
              {experience.description}
            </p>
            <p className="font-mono text-yellow-800 dark:text-yellow-300 text-sm italic">
              {experience.dateRange}
            </p>
          </article>
        </div>
      )}
    </>
  );
}
