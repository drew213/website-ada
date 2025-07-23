"use client";

import { useState, useRef } from "react";

type FormFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: FormFields = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const currErrors: Partial<FormFields> = {};
    if (!form.name.trim()) currErrors.name = "Name is required.";
    if (!validateEmail(form.email)) currErrors.email = "Enter a valid email.";
    if (!form.message.trim()) currErrors.message = "Message is required.";
    setErrors(currErrors);
    return Object.keys(currErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    if (!validate()) return;
    setLoading(true);

    // TODO: Integrate emailjs or any API submission here

    setTimeout(() => {
      // simulate API delay
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
      formRef.current?.reset();
    }, 1400);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative flex flex-col space-y-8 bg-white dark:bg-neutral-900 shadow-2xl mx-auto p-10 border border-blue-100 dark:border-blue-900 rounded-2xl w-full max-w-lg animate-in duration-700 fade-in zoom-in-75"
      aria-labelledby="contact-heading"
      noValidate
    >
      <h2
        id="contact-heading"
        className="mb-0 font-black text-blue-700 dark:text-blue-400 text-3xl tracking-tight"
      >
        Get in Touch
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-300">
        Have a question or project in mind? Fill in the form and our tech team
        will get back to you soon.
      </p>

      <div className="relative">
        <input
          autoComplete="name"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          className={`
            peer block w-full px-5 py-3 bg-transparent text-base border-b-2 border-gray-300 dark:border-gray-600 outline-none
            text-gray-900 dark:text-white focus:border-blue-500
            transition-all duration-200
            ${
              errors.name
                ? "border-red-400 dark:border-red-400 animate-shake"
                : ""
            }
          `}
          required
        />
        <label
          htmlFor="name"
          className={`
            absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-blue-500 peer-[.not-empty]:-translate-y-6 peer-[.not-empty]:text-xs peer-[.not-empty]:text-blue-500
            ${form.name ? "-translate-y-6 text-xs text-blue-500" : ""}
          `}
        >
          Full Name *
        </label>
        {errors.name && (
          <div className="mt-1 text-red-500 text-xs">{errors.name}</div>
        )}
      </div>

      <div className="relative">
        <input
          autoComplete="organization"
          type="text"
          name="company"
          id="company"
          onChange={handleChange}
          className="peer block bg-transparent px-5 py-3 border-gray-300 dark:border-gray-600 border-b-2 focus:border-blue-500 outline-none w-full text-gray-900 dark:text-white text-base transition-all duration-200"
        />
        <label
          htmlFor="company"
          className={`
            absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-blue-500 peer-[.not-empty]:-translate-y-6 peer-[.not-empty]:text-xs peer-[.not-empty]:text-blue-500
            ${form.company ? "-translate-y-6 text-xs text-blue-500" : ""}
          `}
        >
          Company (optional)
        </label>
      </div>

      <div className="relative">
        <input
          autoComplete="email"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          className={`
            peer block w-full px-5 py-3 bg-transparent text-base border-b-2 border-gray-300 dark:border-gray-600 outline-none
            text-gray-900 dark:text-white focus:border-blue-500
            transition-all duration-200
            ${
              errors.email
                ? "border-red-400 dark:border-red-400 animate-shake"
                : ""
            }
          `}
          required
        />
        <label
          htmlFor="email"
          className={`
            absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-blue-500 peer-[.not-empty]:-translate-y-6 peer-[.not-empty]:text-xs peer-[.not-empty]:text-blue-500
            ${form.email ? "-translate-y-6 text-xs text-blue-500" : ""}
          `}
        >
          E-mail *
        </label>
        {errors.email && (
          <div className="mt-1 text-red-500 text-xs">{errors.email}</div>
        )}
      </div>

      <div className="relative">
        <textarea
          name="message"
          id="message"
          rows={4}
          onChange={handleChange}
          className={`
            peer block w-full px-5 py-3 bg-transparent text-base border-b-2 border-gray-300 dark:border-gray-600 outline-none
            text-gray-900 dark:text-white focus:border-blue-500 resize-none transition-all duration-200
            ${
              errors.message
                ? "border-red-400 dark:border-red-400 animate-shake"
                : ""
            }
          `}
          required
        />
        <label
          htmlFor="message"
          className={`
            absolute left-5 top-7 text-gray-500 dark:text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-blue-500 peer-[.not-empty]:-translate-y-6 peer-[.not-empty]:text-xs peer-[.not-empty]:text-blue-500
            ${form.message ? "-translate-y-6 text-xs text-blue-500" : ""}
          `}
        >
          Your Message *
        </label>
        {errors.message && (
          <div className="mt-1 text-red-500 text-xs">{errors.message}</div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`
          group relative overflow-hidden bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-full py-4 mt-4
          transition-all duration-200 shadow-xl focus:ring-2 focus:ring-blue-400 focus:outline-none
          ${loading ? "cursor-wait opacity-75" : ""}
        `}
      >
        {loading ? (
          <span className="flex justify-center items-center animate-fade-in">
            <svg
              className="mr-2 w-5 h-5 text-blue-200 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-40"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="z-10 relative flex justify-center items-center">
            <span>Send Message</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        )}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-20 transition-all duration-500"></span>
      </button>

      {submitted && (
        <div className="flex justify-center items-center gap-2 text-green-600 dark:text-green-400 animate-fade-in duration-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Thank you! Your message has been sent.</span>
        </div>
      )}

      {/* Add some minimal extra animation styles */}
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          15% {
            transform: translateX(-7px);
          }
          35% {
            transform: translateX(7px);
          }
          55% {
            transform: translateX(-5px);
          }
          70% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-shake {
          animation: shake 0.4s;
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </form>
  );
}
