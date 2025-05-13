import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Earth = () => {
    const earth = useGLTF("/planet/scene.gltf");
    const earthRef = useRef();


    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.005;
        }
    });

    return (
        <primitive
            ref={earthRef}
            object={earth.scene}
            scale={1.5}
            position={[0, -3, 0]}
            rotation-y={0}
        />
    );
};

const EarthCanvas = () => {
    return (

        <Canvas
            style={{ width: '100%', height: '100vh' }}
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 60,
                near: 0.1,
                far: 200,
                position: [-10, 6, 12],
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[-5, 5, 5]} intensity={1} />
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    enableTouchEvents={true}
                    enableRotate={true}
                />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
