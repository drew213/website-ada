import Hero from "../components/Hero";
import Features from "../components/Features";
import Section from "../components/Section";
import Customers from "../components/Customers";
import Image from "next/image";
import Accordion from "../components/Accordion";
import Reviews from "../components/Reviews";
import Download from "../components/Download";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import Portfolio from "../components/Portfolio";
import SlidingBar from "../components/SlidingBar";
import type { Metadata } from "next";
// import Box from "components/Box";

export const metadata: Metadata = {
  title: "Home | ADA Inventive",
  description: "User Centric and Innovative Software Solutions.",
};
export default function Page() {
  return (
    <PageLayout>
      <div className="flex flex-col bg-white dark:bg-black min-h-screen">
        <main>
          <Hero />
          <div className="bg-green-300 w-full h-2"></div>
          <Portfolio />
          <div className="bg-green-300 w-full h-2"></div>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
            <SlidingBar />
            <div className="gap-3 dark:bg-gray-900 mt-5 rounded-lg">
              <Section
                leftHalf={
                  <>
                    <h2 className="mb-4 text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                      Introducing our latest Solution - HESTIA
                    </h2>
                    <p className="font-light text-xl">
                      <Link
                        href="https://hestiapm.ca/"
                        className="text-blue-500"
                      >
                        Hestia
                      </Link>
                      &nbsp;is a revolutionary platform created to aid canadian SFR landlords&nbsp;
                      <strong className="text-blue-500">
                        with their tenant management and maintenance requests
                      </strong>
                      , Hestia provides a variety of industry necessary tools to
                      help you improve your maintenance workflow.
                    </p>
                  </>
                }
                rightHalf={
                  <Image
                    src={"/hestia-mockup.png"}
                    alt="section-image"
                    width={400}
                    height={700}
                    className="w-full rotate-x-20"
                  />
                }
              />
            </div>{" "}
            <div className="gap-2 dark:bg-white w-full h-[5px]"></div>
            <Features />
            <Customers />
            <Section
              leftHalf={<Accordion />}
              rightHalf={
                <div className="flex flex-col justify-end">
                  <h2 className="mb-4 text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    <span>
                      <Link
                        aria-label="HESTIA"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://hestiapm.ca"}
                      >
                        <strong className="text-blue-500">HESTIA</strong>
                      </Link>
                    </span>
                    &nbsp;in 3&nbsp;<strong>Points</strong>
                  </h2>
                  <p className="font-light text-xl">
                    Here we provide you with 3 succinct Statements that
                    introduce you to what&nbsp;
                    <strong className="text-blue-500">HESTIA</strong> is all
                    about.
                  </p>
                </div>
              }
            />
            <div className="dark:bg-gray-900 w-full h-2"></div>
          </div>

          <Reviews />
          <Download />
        </main>
      </div>
    </PageLayout>
  );
}
