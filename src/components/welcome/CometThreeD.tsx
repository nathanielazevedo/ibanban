import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const CometThreeD = () => {
  const gltf = useLoader(GLTFLoader, "/ibanban/comet/comet.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
  });
  const myMesh = useRef<any>();

  useFrame(() => {
    myMesh.current.rotation.y += 0.002;
  });

  return (
    <mesh position={[1, 0, 0]}>
      <primitive
        position={[0, 0, -3]}
        object={gltf.scene}
        scale={3}
        ref={myMesh}
      />
      <ambientLight />
    </mesh>
  );
};

export default CometThreeD;
