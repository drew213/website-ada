"use client";

import { useState } from "react";

type Project = {
  title: string;
  summary: string;
  summaryLong?: string;
  img: string;
  video: string;
  tags: string[];
};

export function ProjectFolderCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group relative mb-8 w-64 h-40 cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={() => setOpen(true)}
      >
        {/* Folder Shadow */}
        <div className="bottom-0 left-5 z-0 absolute bg-black opacity-10 blur-[3px] rounded-b-xl w-[90%] h-6 pointer-events-none" />
        {/* Folder body (main part) */}
        <div
          className={`
            absolute top-4 left-0 w-full h-36
            transition-transform duration-500 ease-in-out
            rounded-b-xl rounded-t-md border-y-4 border-x border-yellow-700/70
            ${open ? "scale-y-95 shadow-2xl z-30" : "shadow-lg"}
            folder-body-gradient
          `}
        >
          {/* Glass highlight */}
          <div
            className="absolute inset-0 rounded-t-md rounded-b-xl pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg,rgba(255,255,255,0.1) 40%,rgba(255,255,255,0.045) 80%)",
            }}
          />

          {/* Folder content */}
          <div className="z-10 relative flex flex-col p-4 pt-8 h-full">
            <h3 className="mb-1 font-semibold text-yellow-900 text-base truncate">
              {project.title}
            </h3>
            <p className="mt-1 text-yellow-800 text-xs line-clamp-2">
              {project.summary}
            </p>
            {/* Tags bar */}
            <div className="bottom-4 left-4 absolute flex flex-wrap gap-1">
              {project.tags.map((t, i) => (
                <span
                  key={t}
                  className="bg-yellow-100/80 px-2 py-0.5 border border-yellow-600/30 rounded font-medium text-yellow-900 text-xs"
                  style={{
                    transitionDelay: open ? `${i * 70 + 120}ms` : "0ms",
                    opacity: open ? 1 : 0.76 + Math.random() * 0.2,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Folder lid (flips up when open) */}
        <div
          className={`
            absolute top-0 left-0 w-full h-9 z-40 transition-transform duration-600 origin-bottom
            rounded-t-xl folder-top-gradient
            border-t-2 border-x border-yellow-800/60
            ${open ? "folder-lid-open" : "folder-lid-closed"}
          `}
        >
          {/* Shine on lid */}
          <div className="top-3 right-8 left-8 absolute bg-white/30 blur-sm rounded-full h-2 pointer-events-none filter" />
        </div>
        {/* Folder Clip/Label */}
        <div className="top-2 right-4 absolute flex items-center gap-1">
          <div className="bg-white/40 shadow-inner border-x border-yellow-600/30 border-t rounded-r-lg rounded-l-xl w-7 h-2 -skew-x-12" />
          <span className="bg-yellow-50/70 px-1 border border-yellow-200 rounded font-mono text-[10px] text-yellow-700 uppercase tracking-widest">
            {project.title}
          </span>
        </div>
      </div>

      {/* Modal for folder details */}
      {open && (
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
        >
          <div
            className="relative bg-white/70 dark:bg-neutral-900/90 shadow-2xl mx-4 p-6 sm:p-8 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="top-4 right-5 absolute focus:outline-none font-bold text-gray-600 hover:text-yellow-600 dark:hover:text-yellow-400 dark:text-gray-300 text-xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Title */}
            <h3
              id="modal-title"
              className="mb-4 font-bold text-yellow-900 dark:text-yellow-300 text-3xl text-center"
            >
              {project.title}
            </h3>

            {/* Demo Video Player */}
            {project.video && (
              <div className="shadow-lg mb-6 rounded-xl aspect-video overflow-hidden">
                <video
                  src={project.video}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label={`${project.title} demo video`}
                />
              </div>
            )}

            {/* Long Summary */}
            <p
              id="modal-desc"
              className="mb-6 text-gray-900 dark:text-gray-200 text-justify leading-relaxed"
            >
              {project.summaryLong ?? project.summary}
            </p>

            {/* Project Image */}
            <div className="shadow-md mb-6 rounded-xl overflow-hidden">
              <img
                src={project.img}
                alt={`${project.title} screenshot`}
                className="w-full object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow-100/90 dark:bg-yellow-900/70 px-4 py-1 border border-yellow-300 rounded-full font-semibold text-yellow-900 dark:text-yellow-300 text-sm glass-tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
