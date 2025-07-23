"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { OrbitControls, Stars } from "@react-three/drei";

import SolarSystem from "./SolarSystem";

export default function ContactBackground() {
  return (
    <Canvas camera={{ position: [0, 10, 30], fov: 60 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 20, 10]} intensity={4.2} />
      <Stars radius={200} depth={60} count={20000} factor={7} fade />
      <OrbitControls enableZoom enablePan enableRotate />
    </Canvas>
  );
}
