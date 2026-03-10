import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const technologies = [
    "Python", "C", "Java", "MongoDB", "Express.js",
    "React", "Node.js", "HTML", "CSS", "JavaScript",
    "MySQL", "XAMPP", "QML", "Qiskit", "PennyLane",
    "Arduino UNO", "ESP32", "Embedded C"
];

function OrbitNode({ label, radius, angleOffset, speed }) {
    const nodeRef = useRef();
    const labelRef = useRef();
    const vec = new THREE.Vector3();

    useFrame((state) => {
        if (nodeRef.current) {
            const angle = (state.clock.elapsedTime * speed) + angleOffset;
            nodeRef.current.position.x = Math.cos(angle) * radius;
            nodeRef.current.position.z = Math.sin(angle) * radius;

            nodeRef.current.getWorldPosition(vec);
            const dist = state.camera.position.distanceTo(vec);
            const opacity = Math.max(0, Math.min(1, 1 - (dist - 20) / 10));

            if (labelRef.current) {
                labelRef.current.style.opacity = opacity;
                labelRef.current.style.display = opacity < 0.01 ? 'none' : 'block';
            }
        }
    });

    return (
        <group ref={nodeRef}>
            <mesh>
                <boxGeometry args={[0.4, 0.4, 0.4]} />
                <meshStandardMaterial color="#c4b5fd" roughness={0.1} metalness={0.9} emissive="#7c3aed" emissiveIntensity={0.5} />
            </mesh>
            <Html center position={[0, -0.6, 0]} zIndexRange={[100, 0]}>
                <div ref={labelRef} className="text-purple-100 text-xs whitespace-nowrap font-bold bg-gradient-to-br from-purple-900/80 to-[#020617]/90 px-3 py-1.5 rounded-md backdrop-blur-md border border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-110 hover:border-purple-400 transition-transform cursor-default">
                    {label}
                </div>
            </Html>
        </group>
    );
}

export default function TechOrbit({ position }) {
    const coreRef = useRef();

    useFrame((state, delta) => {
        if (coreRef.current) {
            coreRef.current.rotation.y -= delta * 0.5;
        }
    });

    return (
        <group position={position}>
            {/* Glowing Core */}
            <mesh ref={coreRef}>
                <dodecahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial color="#c084fc" emissive="#9333ea" emissiveIntensity={1.5} wireframe />
                <pointLight color="#d8b4fe" intensity={2} distance={15} />
            </mesh>

            {/* Orbit Rings & Nodes */}
            {[...Array(3)].map((_, i) => (
                <mesh key={i} rotation={[Math.PI / 2 + (i * 0.2), 0, 0]}>
                    <ringGeometry args={[3 + i * 1.5, 3.1 + i * 1.5, 64]} />
                    <meshBasicMaterial color="#a78bfa" transparent opacity={0.2} side={2} />
                </mesh>
            ))}

            {technologies.map((tech, i) => {
                const radius = 3 + (i % 3) * 1.5;
                const angleOffset = (i / technologies.length) * Math.PI * 2;
                const speed = 0.2 + (i % 3) * 0.1;
                return (
                    <OrbitNode
                        key={i}
                        label={tech}
                        radius={radius}
                        angleOffset={angleOffset}
                        speed={speed}
                    />
                );
            })}
        </group>
    );
}
