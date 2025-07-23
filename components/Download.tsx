import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

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
            Coming soon
          </h2>
          <p className="mb-6 font-light text-gray-800 dark:text-gray-300 text-xl">
            Signup today to use our state of the art app and start your journey
            towards running a successful service based business, coming soon to
            the appstores.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="flex items-center space-x-2 bg-black dark:bg-white px-5 py-2 rounded-md text-white dark:text-black text-base transition-colors duration-200 download-button"
            >
              <FaApple className="text-2xl" />
              <span>App Store</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 bg-black dark:bg-white px-5 py-2 rounded-md text-white dark:text-black text-base transition-colors duration-200 download-button"
            >
              <FaGooglePlay className="text-2xl" />
              <span>Google Play</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Download;
