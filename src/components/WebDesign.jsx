import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Sketchbook from "./Sketchbook"
import React from "react";

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Sketchbook />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default WebDesign;
