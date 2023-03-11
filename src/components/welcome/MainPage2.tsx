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
  const [direction, setDirection] = useState("right");
  const { scale } = useSpring({
    scale: 1,
    config: config.wobbly,
  });

  // const { position } = useSpring({
  //   position: ,
  // });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y += 0.01;
    if (myMesh.current.position.x <= 3.02 && direction == "left") {
      myMesh.current.position.x += 0.01;
    } else if (myMesh.current.position.x >= 2.02 && direction == "right") {
      myMesh.current.position.x -= 0.01;
    }
  });

  return (
    <mesh position={[-12, -1, -1]}>
      {/* @ts-ignore */}
      <textGeometry
        args={["Planet Defender", { font, size: 2, height: 0.1 }]}
      />
      <meshPhysicalMaterial attach="material" color={"gray"} />
      {/* @ts-ignore */}
      <animated.primitive
        // onClick={() => setActive(!active)}
        position={[10, 3, -3]}
        object={gltf.scene}
        scale={3}
        ref={myMesh}
      />
      <ambientLight />
    </mesh>
  );
};

export default MainPage;
