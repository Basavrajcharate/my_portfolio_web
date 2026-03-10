import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import HeroPlanet from './HeroPlanet';
import ScrollCamera from './ScrollCamera';
import AboutPlanet from './AboutPlanet';
import ProjectGalaxy from './ProjectGalaxy';
import TechOrbit from './TechOrbit';
import ContactStation from './ContactStation';

export default function Scene() {
    const starsRef = useRef();

    useFrame((state, delta) => {
        if (starsRef.current) {
            starsRef.current.rotation.x -= delta * 0.02;
            starsRef.current.rotation.y -= delta * 0.03;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />

            <group ref={starsRef}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </group>

            <ScrollCamera endZ={-60} />
            <HeroPlanet position={[0, 0, 0]} />
            <AboutPlanet position={[0, 0, -15]} />
            <ProjectGalaxy position={[0, 0, -30]} />
            <TechOrbit position={[0, 0, -45]} />
            <ContactStation position={[0, 0, -60]} />
        </>
    );
}
