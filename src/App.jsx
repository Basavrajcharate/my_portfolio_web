import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, ScrollControls, Scroll } from '@react-three/drei';
import Scene from './components/Scene';
import Overlay from './components/Overlay';
import NavBar from './components/NavBar';
import LightPortfolio from './components/light-theme/LightPortfolio';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`w-full h-screen relative ${theme === '3d' ? (isMobile ? 'text-white bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900' : 'text-white bg-black') : 'text-slate-900 bg-gray-50'}`}>

      {/* NavBar is always present, but we rely on its own transparent/glass styling */}
      <div className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
        <NavBar />
      </div>

      {theme === '3d' ? (
        <div className="canvas-container absolute top-0 left-0 w-full h-full">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 60 }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <ScrollControls pages={5} damping={0.2}>
                {!isMobile && <Scene />}
                <Scroll html style={{ width: '100%' }}>
                  <Overlay />
                </Scroll>
              </ScrollControls>
              <Preload all />
            </Suspense>
          </Canvas>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full overflow-y-auto">
          <LightPortfolio />
        </div>
      )}
    </div>
  );
}

export default App;
