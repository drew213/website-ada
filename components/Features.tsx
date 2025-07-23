import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase } from "react-icons/fa";
import {
  SiPhp,
  SiLaravel,
  SiTailwindcss,
  SiStripe,
  SiMailgun,
} from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: SiLaravel,
      title: "Laravel 12",
      description:
        "The platform is built using Laravel 12, a powerful PHP framework, which allows us to create a robust, modular and scalable application, laravel comes prebuilt with solutions for authentication, authorization, RBAC and more.",
    },
    {
      icon: SiMailgun,
      title: "Mailgun",
      description:
        "Smart mailing utilizing mailgun for order notifications, booking notifications etc.",
    },
    {
      icon: FaReact,
      title: "React 18",
      description: "Server and Client Components. using hooks and context.",
    },
    {
      icon: FaDatabase,
      title: "Database",
      description:
        "Utilizes MySQL for data storage and management as well as technologies like redis to improve database efficiency.",
    },
    {
      icon: SiTailwindcss,
      title: "Components",
      description:
        "Awesome components built with Tailwind CSS and and also the DaisyUi component library.",
    },
    {
      icon: SiStripe,
      title: "Payment using Stripe",
      description:
        "The platform utilizes Stripe for secure payments and vendor disbursements.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 mx-auto px-4 py-12 rounded-lg transition-colors duration-200 container">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="mb-4 text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Features
          </h2>
          <p className="mt-8 font-light text-gray-600 dark:text-gray-300 text-xl">
            Some of the&nbsp;<span>cool</span> features of our new platform.
          </p>
        </div>
        <div className="mt-10">
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
