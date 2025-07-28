import React from "react";

type FeatureCardProps = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg transition-colors duration-200">
      <Icon size={34} />
      <h3 className="mb-2 font-semibold text-gray-800 dark:text-white text-xl">
        {title}
      </h3>
      <p className="font-light text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
