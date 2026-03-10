import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

export default function ScrollCamera({ endZ = -60 }) {
    const scroll = useScroll();

    useFrame((state) => {
        // scroll.offset gets the scroll position from 0 to 1
        const offset = scroll.offset;

        // We want to move the camera forward as we scroll
        // Start at z=10. End at z=endZ
        const startZ = 10;
        const currentZ = startZ + (endZ - startZ) * offset;

        // Smoothly interpolate the camera position
        state.camera.position.z = currentZ;

        // Optional: Add slight sway or rotation to the camera as it moves through space
        state.camera.rotation.z = offset * Math.PI * 0.1;
        state.camera.rotation.y = offset * Math.PI * 0.2;
    });

    return null;
}
