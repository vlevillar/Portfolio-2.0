import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Megaphone from "./Megaphone"
import React from "react";

const Communication = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Megaphone />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default Communication;
