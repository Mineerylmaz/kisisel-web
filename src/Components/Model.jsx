import { useGLTF, Html } from "@react-three/drei";

export default function Model({ isMobile }) {
    const gltf = useGLTF(import.meta.env.BASE_URL + 'models/scene.gltf')
    return (
        <>
            <primitive
                object={gltf.scene}
                scale={isMobile ? 0.45 : 0.75}
                position={isMobile ? [0, -3.5, -1.5] : [0, -3.6, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />



        </>
    );
}

useGLTF.preload("/models/scene.gltf");
