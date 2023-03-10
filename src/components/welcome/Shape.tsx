import { Suspense, useContext } from "react";
import { gltfContext } from "../../pages/PlanetDefenderWrapper";

export function Scene() {
  const gltf = useContext(gltfContext);
  console.log(gltf);
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} scope={10} />
    </Suspense>
  );
}
