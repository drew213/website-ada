"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedHeroText() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 80, opacity: 0, scale: 0.89 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.1,
      }
    );
    gsap.fromTo(
      subHeadingRef.current,
      { y: 90, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.4,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      pRef.current,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        delay: 0.75,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="relative w-full">
      <h1
        ref={headingRef}
        className="bg-clip-text bg-gradient-to-r from-blue-700 dark:from-white via-cyan-500 dark:via-blue-200 to-blue-300 dark:to-cyan-300 drop-shadow-xl mb-4 font-black text-transparent text-3xl sm:text-4xl md:text-5xl break-words tracking-tighter animate-glow"
        style={{
          letterSpacing: "0.03em",
          wordBreak: "break-word",
        }}
      >
        <span className="inline-block z-10 relative max-w-full">
          Our{" "}
          <span className="inline-block relative decoration-3 decoration-cyan-400 underline">
            env_
          </span>
        </span>
      </h1>

      <h1
        ref={subHeadingRef}
        className="relative mb-6 max-w-xl font-extrabold text-gray-700 dark:text-gray-200 text-base sm:text-lg md:text-4xl leading-tight"
      >
        We{" "}
        <span className="inline-block bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 font-black text-transparent animate-glow highlight">
          BUILD
        </span>
        . yes we BUILD, no, not that build... We{" "}
        <strong className="gradient-word">B</strong>
        uild <strong className="gradient-word">U</strong>
        ser-centric & <strong className="gradient-word">I</strong>
        ndustry leading <strong className="gradient-word">D</strong>
        eliverables.
      </h1>

      <p
        ref={pRef}
        className="mb-8 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg fade-in-anim"
      >
        Explore our portfolio of{" "}
        <span className="font-semibold text-cyan-500 dark:text-blue-300">
          innovative
        </span>{" "}
        software solutions that transform ideas into{" "}
        <span className="font-semibold text-blue-700 dark:text-cyan-200">
          reality
        </span>
        .
      </p>
    </div>
  );
}
