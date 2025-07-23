import React from "react";
import {
  AiOutlineDiscord,
  AiTwotoneBug,
  AiTwotoneExperiment,
  AiOutlineTaobao,
  AiOutlineSpotify,
  AiOutlineCode,
  AiOutlineCiCircle,
} from "react-icons/ai";

const icons = [
  { Icon: AiTwotoneBug },
  { Icon: AiOutlineDiscord },
  { Icon: AiTwotoneExperiment },
  { Icon: AiOutlineTaobao },
  { Icon: AiOutlineSpotify },
  { Icon: AiOutlineCode },
  { Icon: AiOutlineCiCircle },
];

const Customers: React.FC = () => {
  return (
    <div className="bg-black dark:bg-white py-12 w-full">
      <div className="px-4 md:px-8 lg:px-16 w-full">
        <div className="flex md:flex-row flex-col justify-between items-center mx-auto max-w-7xl">
          <div className="flex md:flex-row flex-col w-full">
            <h2 className="mb-6 md:mb-0 md:w-1/3 font-bold text-white md:text-1xl dark:text-black text-sm sm:text-xl lg:text-2xl md:text-left text-center">
              Over 50,000 people rely on our app for their daily needs as well
              as 1000+ businesses conducting their business through our platform
            </h2>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:w-2/3">
              {icons.map(({ Icon }, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <Icon className="text-white dark:text-black text-3xl md:text-4xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
