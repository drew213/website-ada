"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Desktop() {
  return (
    <group>
      {/* Desk Surface */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[6, 0.2, 3]} />
        <meshStandardMaterial color="#b8b8b8" />
      </mesh>
      {/* Monitor */}
      <mesh position={[0, 0.7, -1]}>
        <boxGeometry args={[3.5, 2.0, 0.15]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Monitor Stand */}
      <mesh position={[0, 0, -1]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#888" />
      </mesh>
      {/* Keyboard */}
      <mesh position={[0, -0.6, 0.5]}>
        <boxGeometry args={[4.0, 0.2, 1.5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      {/* Mouse */}
      <mesh position={[1.5, -0.7, 0.5]}>
        <boxGeometry args={[0.8, 0.3, 1.2]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
    </group>
  );
}
