import { ReactNode } from "react";

interface SlidingBarProps {
  // Bar container styling
  containerClassName?: string;
  barClassName?: string;
  sliderClassName?: string;

  // Dimensions
  barHeight?: string;
  sliderHeight?: string;
  sliderWidth?: string;

  // Position (as percentage or specific value)
  sliderPosition?: string;

  // Custom styling
  barColor?: string;
  sliderColor?: string;

  // Animation
  animated?: boolean;
  animationDuration?: string;
}

export default function SlidingBar({
  containerClassName = "",
  barClassName = "",
  sliderClassName = "",
  barHeight = "h-3",
  sliderHeight = "h-4",
  sliderWidth = "w-[15px]",
  sliderPosition = "0%",
  barColor = "bg-gray-900",
  sliderColor = "linear-gradient(45deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",

  animated = false,
  animationDuration = "300ms",
}: SlidingBarProps) {
  const barClasses = `${barColor} rounded-lg w-full ${barHeight} relative ${barClassName}`;
  const sliderClasses = `${sliderColor} rounded-lg ${sliderWidth} ${sliderHeight} absolute top-1/2 transform -translate-y-1/2 ${
    animated ? "transition-all ease-in-out" : ""
  } ${sliderClassName}`;

  const sliderStyle = {
    left: sliderPosition,
    ...(animated && { transitionDuration: animationDuration }),
  };

  const gradientStyle = {
    background:
      "linear-gradient(45deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",
  };

  return (
    <div className={`${containerClassName}`}>
      <div className={barClasses}>
        <div style={gradientStyle} className={sliderClasses} />
      </div>
    </div>
  );
}
