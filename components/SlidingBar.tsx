import { ReactNode } from "react";

interface SlidingBarProps {
  containerClassName?: string;
  barClassName?: string;
  sliderClassName?: string;
  barHeight?: string;
  sliderHeight?: string;
  sliderWidth?: string;
  sliderPosition?: string;
  barColor?: string;
  sliderColor?: string;
  animated?: boolean;
  animationDuration?: string;
}

export default function SlidingBar({
  containerClassName = "",
  barClassName = "",
  sliderClassName = "",
  barHeight = "h-2 sm:h-3", // responsive height
  sliderHeight = "h-4 sm:h-5", // responsive slider height
  sliderWidth = "w-4 sm:w-[15px]", // responsive slider width
  sliderPosition = "0%",
  barColor = "bg-gray-900/80",
  sliderColor = "", // Ignored, use gradientStyle instead
  animated = false,
  animationDuration = "300ms",
}: SlidingBarProps) {
  // Responsive full width, with a max for large screens
  const barClasses = `${barColor} rounded-lg glass-skill w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg ${barHeight} relative ${barClassName}`;

  const sliderClasses = `rounded-lg ${sliderWidth} ${sliderHeight} absolute top-1/2 transform -translate-y-1/2 shadow-md ring ring-blue-700/30 ${
    animated ? "transition-all ease-in-out" : ""
  } ${sliderClassName}`;

  const sliderStyle = {
    left: sliderPosition,
    ...(animated && { transitionDuration: animationDuration }),
    background:
      "linear-gradient(45deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",
  };

  return (
    <div
      className={`w-full flex items-center justify-center px-2 ${containerClassName}`}
    >
      {/* Bar 
          - w-full: fills parent width on mobile
          - max-w-xs/sm/md: doesn't get too big on larger screens
      */}
      <div className={barClasses}>
        {/* The glowing sliding piece */}
        <div style={sliderStyle} className={sliderClasses} />
      </div>
    </div>
  );
}
