"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const gradientStyle = {
    background:
      "linear-gradient(135deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      style={gradientStyle}
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
      className="bg-transparent dark:bg-black p-2 rounded-full text-gray-800 dark:text-gray-200"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" || resolvedTheme === "dark" ? (
        <AiOutlineSun size={20} />
      ) : (
        <AiOutlineMoon size={20} />
      )}
    </button>
  );
};

export default ThemeSwitch;
