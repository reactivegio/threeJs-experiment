import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { getMousePos } from "../../utils";
const NurseComponent = lazy(() => import("./Nurse"));

const Plane = ({ ...props }) => {
    return (
        <mesh {...props} receiveShadow>
            <planeBufferGeometry args={[500, 500, 99, 1]} />
            <shadowMaterial transparent opacity={0.4} />
        </mesh>
    )
}

const Nurse = () => {
    const d = 8.25;
    const mouse = useRef({ x: 0, y: 0 });
    const [animationType, setAnimationType] = useState(0);


    useEffect(() => {
        const onKeyup = (e: KeyboardEvent) => {
            console.log(e.key);
            if (parseInt(e.key) < 9) {
                setAnimationType(parseInt(e.key));
            }
        }
        document.addEventListener('keyup', onKeyup);
        return () => document.removeEventListener('keyup', onKeyup);
    }, []);

    return (
        <Canvas onMouseMove={(e) => (mouse.current = getMousePos(e))} shadowMap pixelRatio={[1, 2.5]} camera={{ position: [0, -3, 18] }}>
            <hemisphereLight /*skyColor={"black"}*/ color={0x00ffff} intensity={0.5} position={[0, 50, 0]} />
            <directionalLight
                position={[-8, 20, 8]}
                shadow-camera-left={d * -1}
                shadow-camera-bottom={d * -1}
                shadow-camera-right={d}
                shadow-camera-top={d}
                shadow-camera-near={0.1}
                shadow-camera-far={1500}
                castShadow
            />

            <mesh position={[0, 0, -4]}>
                <boxGeometry args={[20, 34]} />
                <meshBasicMaterial color="#002E2C" />
            </mesh>
            <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -10, 10]} />
            <Suspense fallback={<mesh>
                <sphereBufferGeometry />
                <meshStandardMaterial color="hotpink" />
            </mesh>}>
                <NurseComponent animationType={animationType} mouse={mouse} position={[0, -10, 3]} scale={[0.08, 0.08, 0.08]} />
            </Suspense>
        </Canvas>
    )
}

export default Nurse;