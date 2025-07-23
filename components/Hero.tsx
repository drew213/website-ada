import Link from "next/link";
import * as THREE from 'three';

// TODO: make a 3d scene const scene = new THREE.Scene(); const camera

export default function Hero() {
  return (
    <>
      <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-32 text-center">
        <h1 className="mb-6 font-sans dark:text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
          User Centric Solutions
        </h1>
        <p className="mb-12 font-light text-gray-600 dark:text-gray-300 text-xl">
          ADA INVENTIVE is a company focused on building inventive,
          <br />
          innovative and{" "}
          <Link href="/portfolio">
            <strong className="text-blue-500">user centric solutions</strong>
          </Link>
          &nbsp;to varied problems.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/ada-inventive"
            className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 px-5 py-2 rounded-md font-semibold text-white dark:text-black text-base transition duration-300"
          >
            Demo an App
          </Link>
          <Link
            href="/portfolio"
            className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 px-5 py-2 rounded-md font-semibold text-white dark:text-black text-base transition duration-300"
          >
            Portfolio
          </Link>
        </div>

        
      </section>
    </>
  );
}
