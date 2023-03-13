import { Typography } from "@mui/material";
import React, { Suspense, useState } from "react";
import { useLoader, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";
import fonted from "../../assets/font.json";

extend({ TextGeometry });

const MainPage = () => {
  const font = new FontLoader().parse(fonted);
  const gltf = useLoader(GLTFLoader, "/ibanban/comet/comet.gltf");
  const myMesh = React.useRef<any>();
  const textRef = React.useRef<any>();
  const [direction, setDirection] = useState("right");

  console.log(textRef);
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y += 0.01;
  });

  return (
    <mesh position={[1, 0, 0]}>
      <meshPhysicalMaterial attach="material" color={"gray"} />
      {/* @ts-ignore */}
      <animated.primitive
        position={[0, 0, -3]}
        object={gltf.scene}
        scale={3}
        ref={myMesh}
      />
      <ambientLight />
    </mesh>
  );
};

export default MainPage;
