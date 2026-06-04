import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase } from "react-icons/fa";
import { 
  SiReact,
  SiTailwindcss,
  SiStripe,
  SiResend,
  SiTwilio,
  SiNextdotjs,
SiSupabase} from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: SiNextdotjs,
      title: "Next.js 16 (App Router)",
      description:
        "Built on Next.js 16 with the App Router and Turbopack, enabling fast server and client components, API routes, and cron-based scheduled maintenance jobs.",
    },
    {
      icon: SiReact,
      title: "React 18",
      description:
        "UI built with React 18, using hooks and context throughout — from ticket workflows to contractor-facing tokenized views.",
    },
    {
      icon: SiSupabase,
      title: "Supabase",
      description:
        "PostgreSQL database with Supabase for data storage, row-level security, file storage, and real-time updates across the three-sided maintenance workflow.",
    },
    {
      icon: SiTailwindcss,
      title: "Tailwind CSS & shadcn/ui",
      description:
        "Fully responsive UI built with Tailwind CSS and shadcn/ui components, styled to Hestia's ember-and-stone design system.",
    },
    {
      icon: SiStripe,
      title: "Stripe Billing",
      description:
        "Stripe powers subscription management across all five pricing tiers, with webhook handling, plan-gated feature flags, and a self-serve customer portal.",
    },
    {
      icon: SiTwilio,
      title: "Twilio",
      description:
        "SMS notifications and inbound SMS-to-ticket creation via Twilio webhooks, with WhatsApp Business API support scoped for Growth-tier and above.",
    },
    {
      icon: SiResend,
      title: "Resend",
      description:
        "Transactional email for tenant requests, contractor work order updates, invoice approvals, and manager notifications — all sent via Resend.",
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


