import Image from "next/image";
import Link from "next/link";
const Download: React.FC = () => (
  <section className="mx-auto px-4 md:px-6 py-24 container">
    <div className="flex md:flex-row flex-col items-center gap-8">
      <div className="flex justify-center md:justify-start items-center order-1 p-4 w-full md:w-1/2">
        <Image
          src="/phone1.png"
          alt="Financial app interface"
          width={500}
          height={500}
          className="mx-auto md:mx-0 w-1/2 h-auto"
        />
      </div>
      <div className="flex justify-center md:justify-end order-2 w-full md:w-1/2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Here Now ...
          </h2>
          <p className="mb-6 font-light text-gray-800 dark:text-gray-300 text-xl">
            Signup today to use our state of the art platform without any
            downloads or payment needed.
          </p>
          <a href="https://hestiapm.ca">
            <button className="bg-red-950 p-2 w-50 text-2xl">
              Start Now
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Download;
