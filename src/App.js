import React, { Suspense, useRef, useState } from "react";
import {
  Canvas,
  useLoader,
  useThree,
  useFrame,
  extend
} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./index.css";
import "./overlay.css";

import Overlay from './Overlay'
import Model from './Model'

extend({ OrbitControls });

const Controls = props => {
  const { gl, camera } = useThree();
  const ref = useRef();
  useFrame(() => ref.current.update());
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};

function App() {
  const [showOverlay, setOverlay] = useState(true)
  return (
    <>
      <Canvas camera={{ position: [0, 3, 5] }}>
        <Controls
          autoRotate
          enablePan={true}
          enableZoom={true}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
        />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, -300, 600]} />
        <spotLight intensity={0.8} position={[-300, 300, -600]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      </>
      );
    }
    // {showOverlay && <Overlay />}

export default App;
