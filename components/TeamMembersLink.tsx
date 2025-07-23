import Link from "next/link";

export default function ViewAllTeamMembersLink() {
  return (
    <Link
      href="/team"
      className="flex justify-center items-center gap-2 bg-white hover:bg-blue-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-7 py-3 border border-blue-600 rounded-full font-semibold text-blue-700 dark:text-blue-400 text-base transition"
      style={{ minWidth: 230 }} // Ensures it looks button-like on all screens
    >
      <span className="inline-block">View All Team Members</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-2 duration-300"
        style={{ display: "inline-block" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
}
