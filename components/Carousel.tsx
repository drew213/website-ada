"use client";

import { useState } from "react";

export default function ProjectImageCycler({
  images = [],
  altBase = "Project image",
}: {
  images: string[];
  altBase?: string;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  // sourcery skip: use-braces
  if (!images.length) return null;

  const goPrev = () =>
    setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setImgIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative flex flex-col items-center">
      <img
        src={images[imgIndex]}
        alt={`${altBase} ${imgIndex + 1}`}
        className="rounded-3xl w-full h-56 md:h-72 lg:h-80 object-cover transition-all duration-300"
      />
      {images.length > 1 && (
        <div className="bottom-0 left-1/2 absolute flex items-center sm:space-x-4 space-y-2 sm:space-y-0 px-2 -translate-x-1/2">
          <button
            className="bg-white/80 hover:bg-blue-500 dark:bg-gray-900/80 shadow px-4 py-2 border dark:border-cyan-800 border-blue-300 rounded-full sm:min-w-[100px] max-w-fit sm:max-h-fit font-semibold text-blue-700 hover:text-white dark:text-cyan-200 text-sm sm:text-base transition-all"
            onClick={goPrev}
            aria-label="Show previous image"
            type="button"
          >
            &#8592; Prev
          </button>
          <span className="bg-white/60 dark:bg-gray-800/80 px-3 py-1 rounded max-w-[50px] font-semibold text-blue-800 dark:text-cyan-300 text-xs text-center">
            {imgIndex + 1}/{images.length}
          </span>
          <button
            className="bg-white/80 hover:bg-blue-500 dark:bg-gray-900/80 shadow px-4 py-2 border dark:border-cyan-800 border-blue-300 rounded-full min-w-[72px] font-semibold text-blue-700 hover:text-white dark:text-cyan-200 text-sm sm:text-base transition-all"
            onClick={goNext}
            aria-label="Show next image"
            type="button"
          >
            Next &#8594;
          </button>
        </div>
      )}
    </div>
  );
}
