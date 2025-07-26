import PageLayout from "@/components/PageLayout";
import SlidingBar from "@/components/SlidingBar";
import ViewAllTeamMembersLink from "@/components/TeamMembersLink";
import Link from "next/link";
import { Metadata } from "next/types";
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

// Value cards use react-icons directly for better color/glow control
const VALUES = [
  {
    icon: <BsFillLightbulbFill className="w-9 h-9 text-blue-500" />,
    title: "Innovation",
    desc: "We continually think outside the box to create unique approaches that will yield result and solve problems.",
  },
  {
    icon: <FaCheck className="w-9 h-9 text-green-600" />,
    title: "Trust",
    desc: "Honesty, transparency, and commitment in all we do.",
  },
  {
    icon: <FaInvision className="w-9 h-9 text-pink-700" />,
    title: "User-Centric",
    desc: "Every solution we build puts the end user at the center, ensuring intuitive, accessible and impactful experiences.",
  },
  {
    icon: <FaClock className="w-9 h-9 text-amber-500" />,
    title: "Reliability",
    desc: "We leverage cutting edge technology and methodologies to stay ahead of the curve and to deliver robust, scalable solutions that stand the test of time.",
  },
];

const HERO_IMG = "/ADALong2.png";

export default function AboutPage() {
  return (
    <PageLayout>
      {/* --- HERO SECTION --- */}
      <section className="relative flex md:flex-row flex-col-reverse justify-center items-center bg-gradient-to-br from-[#1F1B14] dark:from-neutral-900 via-[#3D2F1F] to-[#1A1611] dark:to-neutral-800 px-4 py-12 md:py-20 w-full min-h-[420px] animate-in duration-700 fade-in zoom-in-90">
        <div className="flex flex-col flex-1 items-center md:items-start max-w-2xl md:text-left text-center">
          <h1 className="mb-4 font-black text-blue-900 dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Building Innovative Tech For the Future
          </h1>
          <p className="mb-6 max-w-xl text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl">
            We are a passionate team of engineers, designers, and creators,
            dedicated to building technology that empowers, connects, and
            endures.
          </p>
          <div className="slide-in-from-bottom-6 flex flex-wrap justify-center md:justify-start gap-3 mt-2 animate-in duration-1000 fade-in">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-800 shadow px-6 py-2.5 rounded-full focus:ring-2 focus:ring-blue-400 font-semibold text-white text-base transition"
            >
              Contact Us
            </a>
            <a
              href="#team"
              className="bg-white hover:bg-blue-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-6 py-2.5 border border-blue-600 rounded-full font-semibold text-blue-700 dark:text-blue-400 text-base transition"
            >
              Meet the Team
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center md:justify-end my-8 md:my-0">
          <img
            src={HERO_IMG}
            alt="Tech innovation and teamwork"
            className="slide-in-from-right-8 shadow-xl border-4 dark:border-neutral-800 border-blue-100 rounded-3xl w-44 sm:w-60 md:w-80 h-44 sm:h-60 md:h-80 object-cover animate-in duration-1000 fade-in"
          />
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <div className="bg-green-300 w-full h-2"></div>
      <section className="bg-gradient-to-br from-[#1F1B14] dark:from-neutral-900 via-[#3D2F1F] to-[#1A1611] dark:to-neutral-800 mx-auto px-4 py-12 md:py-20 w-full">
        <h2 className="mb-6 font-extrabold text-blue-800 dark:text-white text-2xl sm:text-3xl md:text-4xl text-center">
          Our Story
        </h2>
        <p className="mx-auto mb-6 max-w-3xl font-medium text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl text-center">
          ADA INVENTIVE is a software development company that specializes in
          creating user-centric and innovative software solutions. Our team is
          dedicated to pushing the boundaries of technology to deliver
          exceptional products and services that meet the needs of our clients
          and their users.
        </p>
      </section>

      {/* --- MISSION / VALUES --- */}
      <section className="mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <SlidingBar />
        <h2 className="mt-6 mb-10 font-extrabold text-blue-800 dark:text-white text-2xl sm:text-3xl md:text-4xl text-center">
          Our Mission &amp; Values
        </h2>
        <div className="gap-7 sm:gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
          {VALUES.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center shadow-lg px-4 sm:px-6 py-7 rounded-2xl text-center transition-transform hover:-translate-y-2 duration-200 glass-card icon-glow"
            >
              <div className="mb-3">{icon}</div>
              <h3 className="mb-2 font-bold text-blue-700 dark:text-blue-400 text-lg md:text-xl tracking-tight">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm sm:text-base">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-black dark:bg-white py-12 w-full">
          <div className="px-4 md:px-8 lg:px-16 w-full">
            <div className="flex md:flex-row flex-col justify-between items-center mx-auto max-w-7xl">
              <div className="flex md:flex-row flex-col items-center md:items-start w-full">
                <h2 className="mb-4 md:mb-0 md:w-1/3 font-bold text-white dark:text-black text-base sm:text-xl md:text-2xl lg:text-2xl md:text-left text-center">
                  What We Do
                </h2>
                <p className="md:mb-0 md:w-1/3 font-bold text-white dark:text-black text-sm sm:text-lg lg:text-xl text-center">
                  We solve varied problems across industries with innovative
                  solutions
                </p>
              </div>
            </div>

            {/* Animated Portfolio Section Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-7 mt-10">
              {[
                { label: "Web Development", hash: "#web" },
                { label: "Mobile Apps", hash: "#mobile" },
                { label: "AI & Data", hash: "#ai" },
                { label: "UI/UX Design", hash: "#design" },
                { label: "Enterprise Solutions", hash: "#enterprise" },
                { label: "Branding & Marketing", hash: "#branding" },
              ].map(({ label, hash }) => (
                <a
                  key={label}
                  href={`/portfolio${hash}`}
                  className="group inline-flex relative justify-center items-center bg-gradient-to-r from-blue-600 hover:from-blue-900 to-cyan-500 hover:to-blue-600 shadow-md px-5 py-2.5 border-2 border-blue-600 rounded-full focus:outline-none overflow-hidden font-semibold text-white dark:text-black transition-all duration-200 animated-portfolio-btn"
                >
                  <span className="z-10 relative">{label}</span>
                  <span className="inline-block z-10 relative ml-2 transition-transform group-hover:translate-x-2 duration-300">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* Animated glow on hover */}
                  <span
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-cyan-400/40 opacity-0 group-hover:opacity-100 group-hover:blur-[4px] rounded-full transition-all duration-500"
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Scoped custom animation if you want extra touch */}
      </section>

      {/* --- TEAM --- */}
      <section id="team" className="mx-auto px-4 py-12 md:py-20 max-w-5xl">
        <h2 className="mb-8 font-extrabold text-blue-800 dark:text-white text-2xl sm:text-3xl md:text-4xl text-center">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {TEAM.map((member) => (
            <Link
              key={member.name}
              href={`/team/${member.name.toLowerCase().replace(/ /g, "-")}`}
              className="flex flex-col items-center bg-blue-50/70 dark:bg-neutral-800/90 shadow-lg mb-4 p-6 rounded-xl w-full sm:w-[320px] md:w-[360px] text-center hover:scale-105 transition-transform duration-150 glass-card"
            >
              <img
                src={member.imgUrl}
                alt={member.name}
                className="shadow mb-3 border-4 dark:border-neutral-700 border-blue-100 rounded-full w-24 h-24 object-cover"
              />
              <h3 className="font-bold text-blue-700 dark:text-blue-300 text-lg sm:text-xl">
                {member.name}
              </h3>
              <span className="mb-2 font-medium text-blue-500 dark:text-blue-400 text-sm sm:text-base">
                {member.role}
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {member.bio}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <ViewAllTeamMembersLink />
        </div>
      </section>

      {/* --- Extra Glass/Card/Glow Styles --- */}
    </PageLayout>
  );
}
