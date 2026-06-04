"use client";

import PageLayout from "@/components/PageLayout";
import SMAprovider from "@/components/SMAprovider";
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
    title: "Frontend Engineer",
    dateRange: "2022",
    description:
      "Assisted in the development of a web-based platform using React.js, focusing specifically on enhancing useractivity",
  },
  {
    title: "Full stack Dev - Banking App",
    dateRange: "05/2022 - 09/2022",
    description:
      "Developed a fully working web banking platform, complete with transaction functionalities as well as connecting of accounts within and without the ecosystem",
  },
  {
    title: "Full stack Dev - CryptoVault",
    dateRange: "10/2022 - 2/2023",
    description:
      "Developed a fully web application designed to help users securely purchase and store cryptocurrencies as a long term investment. The Platform seamlessly integrates with major blockchain networks and wallet providers, offering a secure, user-friendly environment for digital asset management that ses ML and trend analysis as well as market sentiment to determine investment security.",
  },
  {
    title: "Full stack Dev - A7AFiU",
    dateRange: "02/2023 - 03/2023",
    description:
      "Developed a fully working secure and scalable cloud-based platform designed for seamless file uploads, storage, and retrieval. It offers a user-friendly interface, fast data processing, and robust API integration, making it ideal for businesses and developers looking to manage files efficiently 📂. ",
  },
  {
    title: "Full Stack Dev - GFR",
    dateRange: "04/2023 - 07/2023",
    description:
      "Gas Fee Reducer is a Web3-powered platform designed to help users find the optimal time to send cryptocurrency, minimizing gas fees for transactions. By leveraging real-time blockchain data and predictive analytics, GFR ensures cost-efficient transfers across various networks, making crypto transactions smarter and more affordable. 🚀⛽🔗",
  },
  {
    title: "Full stack Dev - A&M Media",
    dateRange: "01/2024 - 02/2024",
    description:
      "A landing page for a digital marketing firm with calendly integration.",
  },
  {
    title: "Full stack Dev - S3CRETS",
    dateRange: "02/2024 - 04/2024",
    description:
      "A sign-up page for a fashion brand that stores user emails and creates a mailing list which is then used to create email campaigns, using automation.",
  },
  {
    title: "Full stack Dev - LayLuxeHair",
    dateRange: "04/2024 - 10/2024",
    description:
      "Built a fully animated and functional website for use by a hair business, then built a fully integrated e-commerce website using medusa.js, stripe integrations, mailgun, and shipping provider.",
  },
  {
    title: "Full stack Dev - A7A-DARREN",
    dateRange: "11/2024 - 12/2024",
    description: "A Personal portfolio website.",
  },

  {
    title: "Full stack Dev - S3RVHUB",
    dateRange: "01/2025 - 07/2024",
    description:
      "Learnt PHP to build 3 fully functional web platforms for service providers.",
  },
];

const skills = [
  "React",
  "Next.js",
  "Three.js",
  "PHP",
  "Laravel",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "DBMS (MySQL, MongoDB)",
  "Git & GitHub",
  "Web3 (Solidity, Ethereum)",
  "AI/ML (Python, TensorFlow)",
  "UI/UX Design",
  "Responsive Design",
  "Agile Methodologies",
  "Problem Solving",
  "Team Collaboration",
  "Bilingual (English & Yoruba)",
  "Excel",
  "Data Analysis",
  "Quantitative Trading",
  "Creative Problem Solving",
  "Time Management",
  "Attention to Detail",
  "Adaptability",
  "Continuous Learning",
  "Communication Skills",
  "Computer Hardware & Software",
  "Basic Networking",
  "Linux Systems",
  "Cybersecurity Fundamentals",
];

const duplicatedSkills = [...skills, ...skills];

export default function page() {
  const [typedText] = useTypewriter({
    words: [
      "Ohayo watashi no Darren.",
      "Mid-Level Consumer Grade Developer.",
      "Building the future, one line at a time.",
      "Exploring the intersection of technology and creativity.",
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
              I am a self-taught developer, sufficiently skilled in building
              websites, webapps and mobile applications.
            </p>
          </div>

          {/* Right Image */}
          <div className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl md:w-1/2 max-w-lg overflow-hidden">
            <img
              src="/advatar.png"
              alt="Darren Adetunji"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* About/Bio Section */}
        <section className="bg-gray-50 dark:bg-gray-800 shadow-md mx-auto mb-16 p-8 rounded-lg max-w-4xl">
          <h2 className="mb-4 font-bold text-3xl">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm currently pursuing my degree in Comp.Sci while pursuing various
            freelance projects and collaborations. I am passionate about
            creating innovative solutions that make a difference in people's
            lives. I've worked on a variety of projects, from web applications
            to websites and a little bit of dabbling in web 3 technologies and
            dapps as well as a beginner in AI/ML. I enjoy the challenge of
            solving complex problems and i'm always looking for new
            opportunities to learn and grow as a developer. I also enjoy
            researching and learning about quantitative trading to better
            improve and develop my own strategies.
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
          <h2 className="mb-2 font-bold text-3xl">Let’s Connect</h2>
          <p>
            📍 London - England 📍Toronto - Canada | ✉️{" "}
            <a
              href="mailto:darren.adainventive@gmail"
              className="text-blue-600 hover:dark:text-blue-600 hover:text-blue-800 dark:text-blue-400 underline"
            >
              darren.adainventive@gmail.com
            </a>{" "}
            | 📞 +44 785 0600 742 📞+1 548 331 1077
          </p>
          <p className="mx-auto max-w-lg text-gray-700 dark:text-gray-300">
            I’m open to freelance work, collaborations, or internship roles.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <a
              href="mailto:adetunjidarren@gmail.com"
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
        <section>
          <SMAprovider />
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
