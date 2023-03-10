import { Typography } from "@mui/material";
import React, { Suspense, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

const MainPage = () => {
  const gltf = useLoader(GLTFLoader, "/ibanban/earth/scene.gltf");
  const myMesh = React.useRef<any>();
  // const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: 0.3,
    config: config.wobbly,
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y += 0.007;
  });

  return (
    <>
      {/* <ambientLight intensity={0.1} /> */}
      <directionalLight position={[0, 0, 5]} />
      <Suspense fallback={null}>
        {/* @ts-ignore */}
        <animated.primitive
          // onClick={() => setActive(!active)}
          object={gltf.scene}
          scale={scale}
          ref={myMesh}
        />
      </Suspense>
    </>
  );
};

export default MainPage;
