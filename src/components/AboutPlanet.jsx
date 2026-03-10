import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function AboutPlanet({ position }) {
    const planetRef = useRef();

    useFrame((state, delta) => {
        if (planetRef.current) {
            planetRef.current.rotation.y += delta * 0.2;
            planetRef.current.rotation.x += delta * 0.1;
        }
    });

    return (
        <group position={position}>
            <mesh ref={planetRef}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshStandardMaterial
                    color="#10b981"
                    transparent={true}
                    opacity={0.3}
                    wireframe={true}
                    emissive="#059669"
                    emissiveIntensity={0.8}
                />
                {/* Inner solid core */}
                <Sphere args={[1.5, 32, 32]}>
                    <meshStandardMaterial color="#047857" roughness={0.2} metalness={0.8} />
                </Sphere>
            </mesh>

            <pointLight color="#34d399" intensity={2} distance={15} />
        </group>
    );
}
