import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Portfolio | ADA Inventive",
  description:
    "A selection of innovative, user-centric software solutions we've built across web, mobile, AI, and more.",
};

// Example portfolio data per category
const SECTIONS = [
  { label: "Web Development", hash: "web" },
  { label: "Mobile Apps", hash: "mobile" },
  { label: "AI & Data", hash: "ai" },
  { label: "UI/UX Design", hash: "design" },
  { label: "Enterprise", hash: "enterprise" },
  { label: "Branding", hash: "branding" },
];

const PROJECTS = {
  web: [
    {
      title: "NextGen Platform",
      img: "/mock-web1.png",
      summary:
        "A scalable SaaS platform with real-time dashboards and beautiful UI.",
      link: "#",
      tags: ["React", "Next.js", "Node.js"],
    },
    {
      title: "Startup Launchpad",
      img: "/mock-web2.png",
      summary:
        "Landing site for a fintech startup, focusing on conversion and performance.",
      link: "#",
      tags: ["Landing", "Performance", "SEO"],
    },
  ],
  mobile: [
    {
      title: "Healthly App",
      img: "/mock-mobile1.png",
      summary: "iOS/Android fitness app with social features and device sync.",
      link: "#",
      tags: ["Flutter", "Firebase"],
    },
  ],
  ai: [
    {
      title: "Vision Analytics",
      img: "/mock-ai1.png",
      summary: "AI platform for image recognition and automated reporting.",
      link: "#",
      tags: ["Python", "TensorFlow", "Cloud"],
    },
  ],
  design: [
    {
      title: "Brand System",
      img: "/mock-design1.png",
      summary: "Complete brand identity & UI kit for a tech education company.",
      link: "#",
      tags: ["Figma", "UI Kit", "Brand"],
    },
  ],
  enterprise: [
    {
      title: "Logistics Portal",
      img: "/mock-ent1.png",
      summary: "Integrated B2B logistics dashboard for global supply chain.",
      link: "#",
      tags: ["Data Viz", "API", "Security"],
    },
  ],
  branding: [
    {
      title: "Campaign Suite",
      img: "/mock-brand1.png",
      summary: "Social/branding campaign toolkit with custom design language.",
      link: "#",
      tags: ["Design", "Marketing", "Brand"],
    },
  ],
};

export default function page() {
  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#191716] dark:from-neutral-900 via-[#2C1810] to-[#312415] dark:to-neutral-800 px-4 py-14 md:py-20 w-full text-center">
        <h1 className="mb-4 font-black text-white dark:text-blue-100 text-3xl sm:text-4xl md:text-5xl tracking-tight">
          Our Portfolio
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-gray-200 dark:text-gray-300 text-base sm:text-lg">
          Explore a curated selection of our{" "}
          <span className="font-semibold text-cyan-400">web</span>,{" "}
          <span className="font-semibold text-blue-400">mobile</span>,{" "}
          <span className="font-semibold text-emerald-400">AI</span>, design,
          and branding solutions—innovative results built for impact.
        </p>
        {/* Animated Nav Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-7 mt-6">
          {SECTIONS.map(({ label, hash }) => (
            <a
              key={label}
              href={`#${hash}`}
              className="group inline-flex relative justify-center items-center bg-gradient-to-r from-blue-600 hover:from-blue-900 to-cyan-500 hover:to-blue-600 shadow-md px-5 py-2.5 border-2 border-blue-600 rounded-full focus:outline-none overflow-hidden font-semibold text-white transition-all duration-200 animated-portfolio-btn"
            >
              <span className="z-10 relative">{label}</span>
              <span className="inline-block z-10 relative ml-2 transition-transform group-hover:translate-x-2 duration-300">
                <svg
                  className="w-4 h-4"
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
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-cyan-400/60 opacity-0 group-hover:opacity-100 group-hover:blur-[4px] rounded-full transition-all duration-500"
                aria-hidden
              />
            </a>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SECTIONS */}
      {SECTIONS.map(({ label, hash }) => (
        <section
          id={hash}
          key={hash}
          className="mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 max-w-7xl"
        >
          <h2 className="drop-shadow-sm mb-7 font-extrabold text-blue-800 dark:text-cyan-300 text-2xl sm:text-3xl md:text-4xl text-center">
            {label}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {(PROJECTS[hash as keyof typeof PROJECTS] || []).map((proj) => (
              <a
                key={proj.title}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/70 dark:bg-neutral-900/80 shadow-xl p-4 sm:p-6 md:p-8 rounded-2xl hover:ring-2 hover:ring-blue-400/50 w-full max-w-xs sm:max-w-sm overflow-hidden text-left transition-transform hover:-translate-y-2 duration-200 glass-card"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="shadow-md mb-4 rounded-xl w-full h-36 sm:h-48 object-cover mixed-blend"
                />
                <h3 className="mb-1 font-bold text-blue-700 dark:text-blue-300 text-xl">
                  {proj.title}
                </h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm">
                  {proj.summary}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gradient-to-r from-blue-100/70 dark:from-blue-900/60 to-blue-300/40 dark:to-cyan-800/40 shadow px-3 py-1 rounded-full font-semibold text-blue-700 dark:text-blue-200 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}
    </PageLayout>
  );
}
