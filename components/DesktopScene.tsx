"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import DesktopForm from "./DesktopForm";
import ContactBackground from "./ContactBackground";

export default function DesktopScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ContactBackground />
      <Canvas camera={{ position: [0, 2, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} />
        <DesktopForm /> {/* or <DesktopHtmlForm /> */}
        <OrbitControls enableZoom enablePan enableRotate />
      </Canvas>
    </div>
  );
}
