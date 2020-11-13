import React, { useEffect } from 'react'
import {
  useLoader,
  useThree,
  useFrame,
} from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "./assets/k-cup-exploded-02.glb";
import gsap from 'gsap';

export default function Model() {
  const gltf = useLoader(GLTFLoader, model);
  useEffect(() => {
    function updateMaterial() {
      let lid = null,
        filter = null;
        
      gltf.scene.traverse(child => {
        if (child.name === "Lid") {
          lid = child
          gsap.to(lid.position, { duration: 1, y: 1, delay: 2, ease: 'elastic.out(1, 1)' })
        }
        if (child.name === "Filter") {
          filter = child
          gsap.to(filter.position, { duration: 1, y: 1, delay: 2, ease: 'elastic.out(1, 1)' })
        }
      })
    }
    updateMaterial();
  });
  return <primitive object={gltf.scene} position={[0, 0, 0]} />; 
}