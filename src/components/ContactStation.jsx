import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function ContactStation({ position }) {
    const stationRef = useRef();

    useFrame((state, delta) => {
        if (stationRef.current) {
            stationRef.current.rotation.y += delta * 0.05;
            stationRef.current.rotation.z += delta * 0.02;
        }
    });

    return (
        <group position={position}>
            {/* Station Geometry */}
            <group ref={stationRef}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[3, 0.5, 16, 100]} />
                    <meshStandardMaterial color="#9ca3af" metalness={0.9} roughness={0.1} />
                </mesh>
                <mesh>
                    <cylinderGeometry args={[0.8, 0.8, 4, 32]} />
                    <meshStandardMaterial color="#d1d5db" metalness={0.8} roughness={0.2} emissive="#4b5563" emissiveIntensity={0.2} />
                </mesh>
                <pointLight color="#ffffff" intensity={2} distance={20} />
            </group>

        </group>
    );
}
