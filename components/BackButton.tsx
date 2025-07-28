"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className = "", children }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`rounded-md text-[#D4AF37] dark:text-white hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] transition-colors ${className}`}
      aria-label="Go back"
    >
      {children ?? "Back"}
    </button>
  );
}
