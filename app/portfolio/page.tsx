"use client";

import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import clsx from "clsx";
import ProjectImageCycler from "@/components/Carousel";

// Example portfolio data per category
const SECTIONS = [
  { label: "All", hash: "all" },
  { label: "Web Development", hash: "web" },
  { label: "Mobile Apps", hash: "mobile" },
  { label: "AI & Data", hash: "ai" },
  { label: "UI/UX Design", hash: "design" },
  { label: "Enterprise", hash: "enterprise" },
  { label: "Branding", hash: "branding" },
  { label: "Custom Solutions", hash: "custom" },
];

const HERO_IMG = "/ADANew.png";
type Project = {
  title: string;
  summary: string;
  summaryLong?: string;
  img: string[]; // Array of img (carousel or single)
  video?: string; // Demo video URL
  tags: string[];
  link: string;
  type: string; // Should match hash in sections
};
const ALL_PROJECTS: Project[] = [
  {
    title: "NextGen Platform",
    img: ["/ADALong2.png", "/ADANew.png"],
    video: "/mock-web1.mp4",
    summary:
      "A scalable SaaS platform with real-time dashboards and beautiful UI.",
    link: "#",
    tags: ["React", "Next.js", "Node.js"],
    type: "web",
  },
  {
    title: "Startup Launchpad",
    img: ["/ADALong2.png"],
    video: "/mock-web1.mp4",
    summary:
      "Landing site for a fintech startup, focusing on conversion and performance.",
    link: "#",
    tags: ["Landing", "Performance", "SEO"],
    type: "web",
  },

  {
    title: "Healthly App",
    img: ["/ADALong2.png"],
    video: "/mock-web1.mp4",
    summary: "iOS/Android fitness app with social features and device sync.",
    link: "#",
    tags: ["Flutter", "Firebase"],
    type: "mobile",
  },

  {
    title: "Vision Analytics",
    img: ["/ADALong2.png"],
    video: "/mock-web1.mp4",
    summary: "AI platform for image recognition and automated reporting.",
    link: "#",
    tags: ["Python", "TensorFlow", "Cloud"],
    type: "ai",
  },

  {
    title: "Brand System",
    img: ["/ADALong2.png"],
    video: "/mock-web1.mp4",
    summary: "Complete brand identity & UI kit for a tech education company.",
    link: "#",
    tags: ["Figma", "UI Kit", "Brand"],
    type: "design",
  },

  {
    title: "Logistics Portal",
    img: ["/ADALong2.png"],
    video: "/mock-web1.mp4",
    summary: "Integrated B2B logistics dashboard for global supply chain.",
    link: "#",
    tags: ["Data Viz", "API", "Security"],
    type: "enterprise",
  },

  {
    title: "Campaign Suite",
    img: ["/ADALong2.png"],
    video: "/mock-web1.mp4",
    summary: "Social/branding campaign toolkit with custom design language.",
    link: "#",
    tags: ["Design", "Marketing", "Brand"],
    type: "branding",
  },
];

export default function page() {
  const [active, setActive] = useState(SECTIONS[0].hash);
  const [demoModal, setDemoModal] = useState<null | Project>(null);

  // Filtering logic: show all or by section
  const visibleProjects =
    active === "all"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.type === active);

  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative flex md:flex-row flex-col-reverse justify-center items-center bg-gradient-to-br from-[#1F1B14] dark:from-neutral-900 via-[#3D2F1F] to-[#1A1611] dark:to-neutral-800 px-4 py-12 md:py-20 w-full min-h-[420px] animate-in duration-700 fade-in zoom-in-90">
        <div className="flex flex-col flex-1 items-center md:items-start max-w-2xl md:text-left text-center">
          <h1 className="bg-clip-text bg-gradient-to-r from-blue-700 dark:from-white via-cyan-500 dark:via-blue-200 to-blue-300 dark:to-cyan-300 drop-shadow-xl mb-4 font-black text-transparent text-3xl sm:text-4xl md:text-5xl break-words tracking-tighter animate-glow">
            Our env_
          </h1>
          <h1 className="relative mb-6 max-w-xl font-extrabold text-gray-700 dark:text-gray-200 text-base sm:text-lg md:text-4xl leading-tight">
            We{" "}
            <span className="inline-block bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 font-black text-transparent animate-glow highlight">
              BUILD
            </span>
            . yes we BUILD, no not that build... We {""}
            <strong className="gradient-word">B</strong>
            uild <strong className="gradient-word">U</strong>ser-centric &
            &nbsp;
            <strong className="gradient-word">I</strong>ndustry leading {""}
            <strong className="gradient-word">D</strong>eliverables.
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
            Explore our portfolio of innovative software solutions that
            transform ideas into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
            {SECTIONS.map((s) => (
              <button
                key={s.hash}
                onClick={() => setActive(s.hash)}
                className={clsx(
                  "px-5 py-2.5 border-2 rounded-full focus:outline-none font-semibold text-base transition-all duration-200",
                  active === s.hash
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-blue-700 shadow"
                    : "bg-white/80 dark:bg-neutral-900/80 text-blue-700 dark:text-cyan-200 border-blue-300 dark:border-cyan-700 hover:bg-blue-50 dark:hover:bg-cyan-900"
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center md:justify-end my-8 md:my-0">
          <img
            src={HERO_IMG}
            alt="Tech innovation and teamwork"
            className="slide-in-from-right-8 shadow-xl rounded-3xl w-44 sm:w-60 md:w-80 h-44 sm:h-60 md:h-80 object-cover animate-in duration-1000 fade-in"
          />
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-[#1b2a41] via-[#22415a] to-[#2a5a7e] px-6 py-20 rounded-b-3xl overflow-hidden">
        <div className="flex flex-col gap-10">
          {visibleProjects.map((project, i) => (
            <div
              key={project.title}
              className={clsx(
                "group relative flex md:flex-row flex-col items-stretch md:items-center shadow-lg rounded-3xl w-full overflow-hidden transition-all glass-row-card",
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* IMAGE GALLERY (LEFT or RIGHT) */}
              <div className="flex flex-col flex-shrink-0 justify-center p-4 md:p-0 md:w-1/2 max-w-[600px]">
                <ProjectImageCycler
                  images={project.img}
                  altBase={project.title}
                />
              </div>

              {/* INFO */}
              <div className="flex flex-col flex-1 justify-center p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 dark:bg-cyan-900/60 shadow px-3 py-1 border dark:border-cyan-800 border-blue-300 rounded-full font-semibold text-blue-700 dark:text-cyan-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 font-bold text-blue-900 dark:text-blue-100 text-2xl md:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  {project.summary}
                </p>
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => setDemoModal(project)}
                    className="group flex items-center hover:bg-blue-700 bg-gradient-to-r from-blue-600 to-cyan-500 shadow px-5 py-2.5 rounded-full font-semibold text-white text-base transition"
                  >
                    <span>View Demo</span>
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {/* Optional: Link to details/case study */}
                  {project.link && (
                    <a
                      href={project.link}
                      className="bg-white/60 hover:bg-blue-50 dark:bg-neutral-900/80 dark:hover:bg-cyan-900 ml-2 px-5 py-2.5 border-2 border-blue-600 rounded-full font-semibold text-blue-700 dark:text-cyan-200 transition"
                      target="_blank"
                    >
                      View Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DEMO VIDEO MODAL (GLASSMORPHIC) */}
        {demoModal && (
          <div
            className="z-50 fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-lg animate-fade-in"
            onClick={() => setDemoModal(null)}
          >
            <div
              className="relative bg-white/80 dark:bg-neutral-900/90 shadow-2xl mx-4 p-6 sm:p-10 rounded-3xl w-full max-w-3xl glass-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="top-4 right-6 absolute font-bold text-gray-500 hover:text-blue-600 dark:hover:text-cyan-400 text-2xl"
                onClick={() => setDemoModal(null)}
                aria-label="Close modal"
              >
                ×
              </button>
              {/* Title */}
              <h3 className="mb-4 font-extrabold text-blue-900 dark:text-cyan-200 text-2xl text-center">
                {demoModal.title}
              </h3>
              {/* Video */}
              {demoModal.video ? (
                <div className="shadow mb-6 rounded-xl aspect-video overflow-hidden">
                  <video
                    src={demoModal.video}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="bg-white/50 dark:bg-neutral-800/50 mb-6 p-8 rounded text-gray-500 dark:text-gray-400 text-xl text-center">
                  Demo not available.
                </div>
              )}
              {/* Summary Long */}
              <p className="mb-6 text-gray-900 dark:text-gray-100 text-justify leading-relaxed">
                {demoModal.summaryLong || demoModal.summary}
              </p>
              {/* Image Carousel or Main Image */}
              <div className="shadow-lg mb-2 rounded-xl overflow-hidden">
                <img
                  src={demoModal.img[0]}
                  alt={`${demoModal.title} screenshot`}
                  className="w-full object-cover"
                />
              </div>
              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {demoModal.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100/90 dark:bg-cyan-900/80 shadow px-4 py-1 border dark:border-cyan-600 border-blue-300 rounded-full font-semibold text-blue-900 dark:text-cyan-200 text-xs glass-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
