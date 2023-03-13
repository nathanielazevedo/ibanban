import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CometThreeD = () => {
  const gltf = useLoader(GLTFLoader, "/ibanban/comet/comet.gltf");
  const myMesh = useRef<any>();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
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
