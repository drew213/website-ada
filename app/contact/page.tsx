"use client";

import { EarthCanvas } from "@/components/canvas";
import ContactPage from "@/components/ContactPage";
import PageLayout from "@/components/PageLayout";
import SolarSystem from "@/components/SolarSystem";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

export default function page() {
  return (
    <PageLayout>
      <div className="bg-black-100">
        <Canvas camera={{ position: [0, 10, 30], fov: 60 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 20, 10]} intensity={4} />
          <Stars radius={200} depth={60} count={5000} factor={7} fade />
          <SolarSystem />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            minDistance={5}
            maxDistance={100}
            target={[0, 0, 0]} // Center of the solar system
          />
        </Canvas>
      </div>
      <div className="relative flex xl:flex-row flex-col-reverse bg-white dark:bg-gray-800 mx-auto w-full h-screen overflow-hidden">
        <ContactPage />

        <EarthCanvas />
      </div>
    </PageLayout>
  );
}
