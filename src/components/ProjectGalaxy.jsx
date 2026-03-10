import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ProjectGalaxy({ position }) {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group position={position} ref={groupRef}>
            {/* Central Star */}
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={1} roughness={0.5} />
                <pointLight color="#fbbf24" intensity={3} distance={20} />
            </mesh>

            {/* Satellite (Project 1) */}
            <group position={[4, 0, 0]}>
                <mesh>
                    <octahedronGeometry args={[0.5]} />
                    <meshStandardMaterial
                        color="#ec4899"
                        emissive="#db2777"
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </group>

            {/* Orbit Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[3.95, 4.05, 64]} />
                <meshBasicMaterial color="#fcd34d" transparent opacity={0.3} side={2} />
            </mesh>
        </group>
    );
}
