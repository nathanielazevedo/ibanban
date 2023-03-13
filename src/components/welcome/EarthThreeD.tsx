import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const MainPage = () => {
  const gltf = useLoader(GLTFLoader, "/ibanban/earth/earth.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
  });
  const myMesh = React.useRef<any>();

  useFrame(() => {
    myMesh.current.rotation.y += 0.003;
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
