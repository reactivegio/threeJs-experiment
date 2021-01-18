// Auto-generated by https://github.com/react-spring/gltfjsx

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { getMouseDegrees } from "../../utils";

function moveJoint(mouse: any, joint: any, degreeLimit: number = 40) {
  if (!joint.rotation) return;
  let degrees = getMouseDegrees(mouse.current.x, mouse.current.y, degreeLimit);
  joint.rotation.xD = THREE.MathUtils.lerp(
    joint.rotation.xD || 0,
    degrees.y,
    0.1
  );
  joint.rotation.yD = THREE.MathUtils.lerp(
    joint.rotation.yD || 0,
    degrees.x,
    0.1
  );
  joint.rotation.x = THREE.MathUtils.degToRad(joint.rotation.xD);
  joint.rotation.y = THREE.MathUtils.degToRad(joint.rotation.yD);
}

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, animations } = useLoader(GLTFLoader, "./nurse.glb");
  const texture = useLoader(THREE.TextureLoader, "./nurse.jpg");
  const texture2 = useLoader(THREE.TextureLoader, "./nurse2.jpg");

  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer(nodes[props.animationType]));
  useFrame((state, delta) => mixer.update(delta));

  useEffect(() => {
    (actions.current as any) = { idle: mixer.clipAction(animations[props.animationType], group.current) };
    (actions.current as any).idle.play();
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, [props.animationType, mixer, animations]);

  useFrame((state, delta) => {
    mixer.update(delta);
    moveJoint(props.mouse, nodes.mixamorigNeck);
    moveJoint(props.mouse, nodes.mixamorigSpine);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes["mixamorigHips"]} />
        <skinnedMesh
          receiveShadow
          castShadow
          geometry={(nodes["Mesh_1"] as any).geometry}
          skeleton={(nodes["Mesh_1"] as any).skeleton}
        >
          <skinnedMesh
            receiveShadow
            castShadow
            geometry={(nodes["Mesh"] as any).geometry}
            skeleton={(nodes["Mesh"] as any).skeleton}
          ><meshStandardMaterial map={texture2} map-flipY={false} skinning /></skinnedMesh>
          <meshStandardMaterial map={texture} map-flipY={false} skinning />
        </skinnedMesh>
      </group>
    </group>
  );
}
