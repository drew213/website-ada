"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Determine current theme accurately
  const currentTheme = resolvedTheme || theme;

  // Gradient background style (can override Tailwind backgrounds)
  const gradientStyle = {
    background:
      "linear-gradient(135deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",
  };

  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      style={gradientStyle}
      className="p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-gray-800 dark:text-gray-200"
    >
      {currentTheme === "dark" ? (
        <AiOutlineSun size={20} />
      ) : (
        <AiOutlineMoon size={20} />
      )}
    </button>
  );
};

export default ThemeSwitch;
