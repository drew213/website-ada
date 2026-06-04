"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="mb-4">
      <div
        className={`w-full rounded-lg overflow-hidden ${
          isOpen ? "bg-black dark:bg-gray-900" : "bg-black dark:bg-gray-900"
        }`}
      >
        <button
          className="flex justify-between items-center p-4 w-full text-left"
          onClick={toggleOpen}
        >
          <span className="font-semibold text-white dark:text-white text-xl">
            {title}
          </span>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown className="text-white text-2xl" />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="p-4">
            <p className="font-light text-white">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultAccordionItems = [
  {
    title: "Sign up for free",
    content:
      "Hestia offers a free tier for landlords with one property",
  },
  {
    title: "Easy of use",
    content:
      "Our app is designed to be user-friendly and easy to use. We want to provide a seamless experience for our users, both the businesses and our general users.",
  },
  {
    title: "For Business Minded Individuals",
    content:
      "With the tools and features we provide at your fingertips and with more to come, we continually ensure your business is operating at the highest possible level, you can focus on what matters most - your business.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({
  items = defaultAccordionItems,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
