import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function HeroPlanet() {
    const planetRef = useRef();

    useFrame((state, delta) => {
        if (planetRef.current) {
            planetRef.current.rotation.y += delta * 0.1;
            // Gentle floating animation
            planetRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <group>
            <mesh ref={planetRef}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial
                    color="#3b82f6"
                    emissive="#1d4ed8"
                    emissiveIntensity={0.5}
                    roughness={0.4}
                    metalness={0.8}
                    wireframe={true} // Add a wireframe or sci-fi look
                />
                {/* Core glow light */}
                <pointLight color="#60a5fa" intensity={2} distance={10} />
            </mesh>

            {/* Floating particles around the planet */}
            <Sparkles
                count={200}
                scale={8}
                size={4}
                speed={0.4}
                opacity={0.5}
                color="#93c5fd"
            />
        </group>
    );
}
