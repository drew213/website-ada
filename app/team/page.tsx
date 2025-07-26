import PageLayout from "@/components/PageLayout";
import SlidingBar from "@/components/SlidingBar";
import Link from "next/link";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Our Team | ADA Inventive",
  description: "User Centric and Innovative Software Solutions.",
};

type TeamMember = {
  name: string;
  role: string;
  imgUrl: string;
  bio: string;
  skills: string[];
};
type TeamMemberSupport = {
  name: string;
  role: string;
  imgUrl: string;
  bio: string;
  skills: string[];
};

type certifications = {
  name: string;
};

const TEAM: TeamMember[] = [
  {
    name: "A.D Adetunji",
    role: "COO & Co-founder",
    imgUrl: "/ADANew.png",
    bio: "Driven by innovation, Darren leads strategy and vision at the company, drawing on a lifelong vision for what tech should be.",
    skills: ["Software Development", "Project Management", "Team Leadership"],
  },
  {
    name: "Windapo Olaoluwa",
    role: "CDO & Co-founder",
    imgUrl: "/ADANew.png",
    bio: "Windy excels at creating mesmerizing designs that bring to life the innovative details of a project.",
    skills: ["UI/UX Design", "Graphic Design", "Branding"],
  },
  {
    name: "Oluwagbemiga Adetunji",
    role: "CMO & Co-founder",
    imgUrl: "/ADANew.png",
    bio: "Gbemiga comes up with innovative, modern and well tailored marketing campaigns.",
    skills: ["Digital Marketing", "Content Strategy", "Brand Development"],
  },
  {
    name: "Quadri AbdulBasit",
    role: "CIO",
    imgUrl: "/ADANew.png",
    bio: "Q serves as the engine that continually builds on ADA's innovative ideas, he breaks down complicated matters into easily understood and resonating ideas.",
    skills: ["Data Analysis", "IT Strategy", "System Architecture"],
  },
  {
    name: "Mujeeb Ibrahim",
    role: "CTO",
    imgUrl: "/ADANew.png",
    bio: "Mj as he's so fondly known is an extremely important part of the team, his disposition and proficiency in multiple languages making him a useful element of the company..",
    skills: ["Software Engineering", "Cloud Computing", "DevOps"],
  },
];
const SUPPORT: TeamMemberSupport[] = [
  {
    name: "Precious Oluoma",
    role: "Assistant",
    imgUrl: "/ADANew.png",
    bio: "Precious is a dedicated assistant who ensures the smooth operation of daily tasks, providing invaluable support to the team.",
    skills: ["Communication", "Organization", "Administrative Support"],
  },
  {
    name: "Sheriph Eyitayo Olajide",
    role: "Design and Animation Specialist",
    imgUrl: "/ADANew.png",
    bio: "Sheriph is an invaluable member of our team, especially talented at creating animated and 2d videos.",
    skills: ["Animation", "Video Editing", "Graphic Design"],
  },
  {
    name: "David Ajibewa",
    role: "Marketing Strategist",
    imgUrl: "/ADANew.png",
    bio: "Gbemiga comes up with innovative, modern and well tailored marketing campaigns.",
    skills: [
      "Marketing Strategy",
      "Social Media Management",
      "Content Creation",
    ],
  },
];
const HERO_IMG = "/ADALong2.png";

export default function page() {
  return (
    <PageLayout>
      <div className="flex flex-col bg-white dark:bg-black min-h-screen">
        <section
          className="relative flex sm:flex-row flex-col-reverse justify-center items-center dark:bg-neutral-900 px-4 py-14 md:py-24 w-full h-auto sm:h-[300px] overflow-hidden animate-in duration-700 fade-in zoom-in-90"
          style={{
            background:
              "linear-gradient(45deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",
          }}
        >
          <div className="flex flex-col flex-1 items-center sm:items-start sm:max-w-none max-w-xl sm:text-left text-center">
            <h1 className="mb-6 font-black text-blue-900 dark:text-white text-2xl sm:text-3xl md:text-5xl tracking-tight">
              Meet the Team Behind ADA
            </h1>
            <p>
              Our ever expanding team comprises of members within various
              technical disciplines and backgrounds, capable of some of the most
              innovative technical tasks.
            </p>

            <div className="slide-in-from-bottom-6 flex flex-wrap justify-center sm:justify-start gap-4 mt-4 animate-in duration-1000 fade-in">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-800 shadow-md px-5 sm:px-7 py-2 sm:py-3 rounded-full focus:ring-2 focus:ring-blue-300 font-semibold text-white text-sm sm:text-base transition"
              >
                Contact Us
              </a>
              <a
                href="#team"
                className="bg-white hover:bg-blue-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-5 sm:px-7 py-2 sm:py-3 border border-blue-600 rounded-full font-semibold text-blue-700 dark:text-blue-400 text-sm sm:text-base transition"
              >
                Meet the Team
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-center mb-10 sm:mb-0">
            <img
              src={HERO_IMG}
              alt="Tech innovation and teamwork"
              className="slide-in-from-right-8 shadow-xl border-4 border-green-100 dark:border-neutral-800 rounded-3xl w-40 sm:w-40 md:w-96 h-40 sm:h-40 md:h-48 object-cover animate-in duration-1000 fade-in"
            />
          </div>
        </section>

        <section
          id="team"
          className="justify-items-center mx-auto px-4 py-14 md:py-24 max-w-[1000px]"
        >
          <h2 className="mb-8 font-extrabold text-blue-800 dark:text-white text-xl sm:text-3xl md:text-4xl text-center">
            Meet Our Team
          </h2>

          {/* TEAM MEMBERS */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10">
            {TEAM.map((member) => (
              <Link
                key={member.name}
                href={`/team/${member.name.toLowerCase().replace(/ /g, "-")}`}
                className="flex flex-col items-center bg-blue-50 dark:bg-neutral-800 shadow-lg p-6 rounded-xl w-full sm:w-[440px] md:w-[460px] text-center hover:scale-105 transition-transform duration-150"
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
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block relative bg-white/50 dark:bg-neutral-800/40 shadow-md backdrop-blur-md px-4 py-1 border border-white/20 dark:border-neutral-700/50 rounded-lg font-semibold text-blue-900 dark:text-blue-300 text-sm transition glass-skill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <SlidingBar />

          {/* SUPPORT MEMBERS */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10">
            {SUPPORT.map((member) => (
              <Link
                key={member.name}
                href={`/team/${member.name.toLowerCase().replace(/ /g, "-")}`}
                className="flex flex-col items-center bg-blue-50 dark:bg-neutral-800 shadow-lg p-6 rounded-xl w-full sm:w-[260px] md:w-[260px] text-center hover:scale-105 transition-transform duration-150"
              >
                <img
                  src={member.imgUrl}
                  alt={member.name}
                  className="shadow mb-3 border-4 dark:border-neutral-700 border-blue-100 rounded-full w-20 sm:w-24 h-20 sm:h-24 object-cover"
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
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block relative bg-white/50 dark:bg-neutral-800/40 shadow-md backdrop-blur-md px-4 py-1 border border-white/20 dark:border-neutral-700/50 rounded-lg font-semibold text-blue-900 dark:text-blue-300 text-sm transition glass-skill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
