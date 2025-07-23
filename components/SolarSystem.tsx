"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Example planet textures (place in /public/textures/)

export default function SolarSystem() {
  const group = useRef<THREE.Group>(null);

  return (
    <group ref={group}>
      {/* Sun */}
      <mesh>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial
          emissive="#fff700"
          color="#fff700"
          emissiveIntensity={3}
        />
      </mesh>
      {/* Planets */}
    </group>
  );
}
