"use client";

import { useRouter } from "next/navigation";

import { ReactNode } from "react";

export default function BackButton({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`rounded-md text-[#D4AF37] dark:text-white hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] transition-colors ${className}`}
      aria-label="Go back"
    >
      {children ?? "<- Back"}
    </button>
  );
}
