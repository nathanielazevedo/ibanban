import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";

const MainPage = () => {
  const gltf = useLoader(GLTFLoader, "/ibanban/earth/scene.gltf");
  const myMesh = React.useRef<any>();

  useFrame(() => {
    myMesh.current.rotation.y += 0.007;
  });

  return (
    <>
      <directionalLight position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={0.3} ref={myMesh} />
      </Suspense>
    </>
  );
};

export default MainPage;
